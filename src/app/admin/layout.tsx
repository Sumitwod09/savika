// Admin Layout — Server Component
// Handles role-based access control server-side before rendering anything
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import AdminLayoutClient from './AdminLayoutClient'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) redirect('/admin/login')

    // Fetch role + permissions using service role (bypasses RLS)
    const adminClient = createAdminClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    const { data: profile } = await adminClient
        .from('users')
        .select('role, email, full_name')
        .eq('id', user.id)
        .single()

    const role = profile?.role ?? 'customer'

    if (role !== 'admin' && role !== 'super_admin') {
        redirect('/admin/login?error=unauthorized')
    }

    // Fetch permissions (only needed for regular admins — super_admin has full access)
    let permissions = {
        can_manage_products: true,
        can_manage_orders: true,
        can_manage_users: true,
        can_manage_admins: false,
    }

    if (role === 'admin') {
        const { data: perms } = await adminClient
            .from('admin_permissions')
            .select('*')
            .eq('admin_id', user.id)
            .single()

        if (perms) {
            permissions = {
                can_manage_products: perms.can_manage_products,
                can_manage_orders: perms.can_manage_orders,
                can_manage_users: perms.can_manage_users,
                can_manage_admins: perms.can_manage_admins,
            }
        } else {
            // Admin has no permissions row yet — deny everything
            permissions = {
                can_manage_products: false,
                can_manage_orders: false,
                can_manage_users: false,
                can_manage_admins: false,
            }
        }
    }

    if (role === 'super_admin') {
        permissions.can_manage_admins = true
    }

    return (
        <AdminLayoutClient
            role={role as 'admin' | 'super_admin'}
            permissions={permissions}
            userEmail={profile?.email ?? user.email ?? ''}
            userName={profile?.full_name ?? 'Admin'}
        >
            {children}
        </AdminLayoutClient>
    )
}
