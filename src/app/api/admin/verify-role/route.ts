import { NextResponse } from 'next/server'
import { createClient as createServerSupabaseClient } from '@/utils/supabase/server'
import { createClient } from '@supabase/supabase-js'

// GET /api/admin/verify-role
// Called after sign-in to check if the logged-in user is an admin
export async function GET() {
    const supabase = await createServerSupabaseClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return NextResponse.json({ role: 'guest' }, { status: 401 })
    }

    // Use service role to bypass RLS
    const adminClient = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    const { data } = await adminClient
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single()

    return NextResponse.json({ role: data?.role ?? 'customer' })
}
