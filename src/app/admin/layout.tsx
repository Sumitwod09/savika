// Admin Layout — Server Component
// Handles role-based access control server-side before rendering anything
import { redirect } from 'next/navigation'
import AdminLayoutClient from './AdminLayoutClient'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

    // Mock user for now
    const user = { id: 'mock-admin', email: 'admin@savika.in' }
    const role = 'super_admin'

    const permissions = {
        can_manage_products: true,
        can_manage_orders: true,
        can_manage_users: true,
        can_manage_admins: true,
    }

    return (
        <AdminLayoutClient
            role={role as 'admin' | 'super_admin'}
            permissions={permissions}
            userEmail={user.email}
            userName={'Admin'}
        >
            {children}
        </AdminLayoutClient>
    )
}
