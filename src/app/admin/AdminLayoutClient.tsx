'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'


interface Permissions {
    can_manage_products: boolean
    can_manage_orders: boolean
    can_manage_users: boolean
    can_manage_admins: boolean
}

interface Props {
    children: React.ReactNode
    role: 'admin' | 'super_admin'
    permissions: Permissions
    userEmail: string
    userName: string
}

export default function AdminLayoutClient({ children, role, permissions, userEmail, userName }: Props) {
    const pathname = usePathname()
    const router = useRouter()

    const handleSignOut = async () => {
        // Mock sign out
        router.push('/admin/login')
    }

    // Build nav items based on role/permissions
    const navItems = [
        { label: 'Dashboard', href: '/admin/dashboard', icon: 'fa-gauge-high', always: true },
        { label: 'Orders', href: '/admin/orders', icon: 'fa-bag-shopping', show: permissions.can_manage_orders },
        { label: 'Products', href: '/admin/products', icon: 'fa-boxes-stacked', show: permissions.can_manage_products },
        { label: 'Categories', href: '/admin/categories', icon: 'fa-tags', show: permissions.can_manage_products },
        { label: 'Customers', href: '/admin/customers', icon: 'fa-users', show: permissions.can_manage_users },
        { label: 'Coupons', href: '/admin/coupons', icon: 'fa-percent', show: permissions.can_manage_orders },
        { label: 'Analytics', href: '/admin/analytics', icon: 'fa-chart-line', always: true },
        { label: 'Admin Management', href: '/admin/admins', icon: 'fa-user-shield', show: permissions.can_manage_admins },
        { label: 'Settings', href: '/admin/settings', icon: 'fa-gear', always: true },
    ].filter((item) => item.always || item.show)

    return (
        <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1A1A1A] border-r border-white/10 flex flex-col shrink-0">
                <div className="h-16 flex items-center px-6 border-b border-white/10 gap-2">
                    <Link href="/" className="text-xl font-extrabold text-[#C47F17]">Savika</Link>
                    <span className="ml-1 text-[10px] text-gray-500 uppercase tracking-widest">Admin</span>
                    {role === 'super_admin' && (
                        <span className="ml-auto text-[9px] bg-[#C47F17]/20 text-[#C47F17] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Super
                        </span>
                    )}
                </div>

                <nav className="flex-1 py-4 space-y-1 px-3 overflow-y-auto">
                    {navItems.map((item) => {
                        const active = pathname.startsWith(item.href)
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                                    active
                                        ? 'bg-[#C47F17] text-white'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                )}
                            >
                                <i className={`fa-solid ${item.icon} w-4 text-sm`} />
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* User Info + Sign Out */}
                <div className="p-4 border-t border-white/10 space-y-3">
                    <div className="px-3">
                        <p className="text-xs font-semibold text-white truncate">{userName}</p>
                        <p className="text-[11px] text-gray-500 truncate">{userEmail}</p>
                        <span className="inline-block mt-1 text-[9px] bg-white/10 text-gray-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {role === 'super_admin' ? 'Super Admin' : 'Admin'}
                        </span>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:bg-red-900/20 hover:text-red-400 transition-all w-full"
                    >
                        <i className="fa-solid fa-right-from-bracket w-4 text-sm" />
                        Sign Out
                    </button>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto bg-[#121212]">
                {children}
            </main>
        </div>
    )
}
