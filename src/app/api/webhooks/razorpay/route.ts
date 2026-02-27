import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
    // Initialize inside handler to avoid module-level Supabase URL validation during build
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    )

    const body = await req.text()
    const signature = req.headers.get('x-razorpay-signature')

    if (!signature) {
        return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    // Verify HMAC signature
    const expectedSig = crypto
        .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET ?? '')
        .update(body)
        .digest('hex')

    if (signature !== expectedSig) {
        console.warn('⚠️ Invalid Razorpay webhook signature')
        return NextResponse.json({ error: 'Invalid signature' }, { status: 403 })
    }

    const event = JSON.parse(body)

    if (event.event === 'payment.captured') {
        const payment = event.payload.payment.entity
        const orderId = payment.notes?.savika_order_id as string | undefined

        if (orderId) {
            const { error } = await supabaseAdmin
                .from('orders')
                .update({
                    status: 'paid',
                    payment_status: 'paid',
                    rzp_payment_id: payment.id,
                    rzp_order_id: payment.order_id,
                })
                .eq('id', orderId)

            if (error) {
                console.error('Failed to update order status:', error)
                return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
            }

            console.log(`✅ Order ${orderId} marked as paid`)
        }
    }

    if (event.event === 'payment.failed') {
        const payment = event.payload.payment.entity
        const orderId = payment.notes?.savika_order_id as string | undefined
        if (orderId) {
            await supabaseAdmin
                .from('orders')
                .update({ payment_status: 'failed' })
                .eq('id', orderId)
        }
    }

    return NextResponse.json({ received: true })
}
