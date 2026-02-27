import { NextRequest, NextResponse } from 'next/server'
import { createClient as createServerClient } from '@/utils/supabase/server'
import { createClient } from '@supabase/supabase-js'

// POST /api/admin/create-admin
// Only callable by authenticated super_admin users
export async function POST(request: NextRequest) {
    // 1. Verify the caller is a super_admin
    const supabase = await createServerClient()
    const { data: { user: caller } } = await supabase.auth.getUser()

    if (!caller) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const adminClient = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    // Verify caller is super_admin
    const { data: callerProfile } = await adminClient
        .from('users')
        .select('role')
        .eq('id', caller.id)
        .single()

    if (callerProfile?.role !== 'super_admin') {
        return NextResponse.json({ error: 'Only super_admin can create admin accounts.' }, { status: 403 })
    }

    // 2. Parse request body
    const body = await request.json()
    const { email, password, full_name, permissions } = body

    if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
    }

    // 3. Create user via Supabase Admin API
    const { data: newUser, error: createError } = await adminClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: full_name ?? '' },
    })

    if (createError || !newUser?.user) {
        return NextResponse.json({ error: createError?.message ?? 'Failed to create user.' }, { status: 500 })
    }

    // 4. Upsert into users table with role = admin
    const { error: profileError } = await adminClient
        .from('users')
        .upsert({
            id: newUser.user.id,
            email,
            full_name: full_name ?? '',
            role: 'admin',
        })

    if (profileError) {
        // Rollback: delete the auth user we just created
        await adminClient.auth.admin.deleteUser(newUser.user.id)
        return NextResponse.json({ error: 'Failed to set admin role.' }, { status: 500 })
    }

    // 5. Insert permissions row
    const { error: permsError } = await adminClient
        .from('admin_permissions')
        .upsert({
            admin_id: newUser.user.id,
            can_manage_products: permissions?.can_manage_products ?? false,
            can_manage_orders: permissions?.can_manage_orders ?? false,
            can_manage_users: permissions?.can_manage_users ?? false,
            can_manage_admins: false, // only super_admin can ever grant this
        })

    if (permsError) {
        return NextResponse.json({ error: 'Admin created but permissions could not be set.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, adminId: newUser.user.id })
}
