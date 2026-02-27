'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'


const revenueData = [
    { month: 'Sep', revenue: 42000 },
    { month: 'Oct', revenue: 58000 },
    { month: 'Nov', revenue: 75000 },
    { month: 'Dec', revenue: 120000 },
    { month: 'Jan', revenue: 89000 },
    { month: 'Feb', revenue: 95000 },
]

const topProducts = [
    { name: 'Kashmiri Mirch', sales: 234 },
    { name: 'Turmeric Powder', sales: 198 },
    { name: 'Garam Masala', sales: 176 },
    { name: 'Biryani Masala', sales: 145 },
    { name: 'Kashmiri Saffron', sales: 89 },
]

const recentOrders = [
    { id: 'ORD-0891', customer: 'Priya Sharma', amount: 599, status: 'Shipped', date: '26 Feb' },
    { id: 'ORD-0890', customer: 'Rahul Kumar', amount: 1299, status: 'Paid', date: '25 Feb' },
    { id: 'ORD-0889', customer: 'Anjali Mehta', amount: 449, status: 'Delivered', date: '24 Feb' },
    { id: 'ORD-0888', customer: 'Vikram Singh', amount: 799, status: 'Processing', date: '24 Feb' },
]

const statusColors: Record<string, string> = {
    'Shipped': 'text-blue-400 bg-blue-400/10',
    'Paid': 'text-yellow-400 bg-yellow-400/10',
    'Delivered': 'text-green-400 bg-green-400/10',
    'Processing': 'text-purple-400 bg-purple-400/10',
    'Cancelled': 'text-red-400 bg-red-400/10',
}

const stats = [
    { label: 'Total Revenue', value: '₹4,79,000', change: '+18%', icon: 'fa-trending-up', color: 'text-[#C47F17]' },
    { label: 'Total Orders', value: '891', change: '+12%', icon: 'fa-bag-shopping', color: 'text-blue-400' },
    { label: 'Total Customers', value: '634', change: '+8%', icon: 'fa-users', color: 'text-purple-400' },
    { label: 'Active Products', value: '52', change: '+4', icon: 'fa-boxes-stacked', color: 'text-green-400' },
]

export default function AdminDashboard() {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold font-[var(--font-playfair)] text-white">Dashboard</h1>
                <p className="text-sm text-gray-400 font-[var(--font-poppins)] mt-1">Thursday, 26 February 2026</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => {
                    return (
                        <div key={stat.label} className="bg-[#1E1E1E] rounded-2xl p-5 border border-white/5">
                            <div className="flex items-center justify-between mb-3">
                                <i className={`fa-solid ${stat.icon} text-lg ${stat.color}`} />
                                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-[var(--font-poppins)]">{stat.change}</span>
                            </div>
                            <p className="text-2xl font-bold font-[var(--font-playfair)] text-white mt-1">{stat.value}</p>
                            <p className="text-xs text-gray-500 font-[var(--font-poppins)] mt-1">{stat.label}</p>
                        </div>
                    )
                })}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-3 gap-4">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-[#1E1E1E] rounded-2xl p-5 border border-white/5">
                    <h2 className="text-sm font-bold font-[var(--font-poppins)] text-white mb-6">Monthly Revenue (₹)</h2>
                    <ResponsiveContainer width="100%" height={220}>
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                            <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                            <Tooltip formatter={(v: number | undefined) => [`₹${(v ?? 0).toLocaleString('en-IN')}`, 'Revenue']} contentStyle={{ background: '#262626', border: 'none', borderRadius: '12px', color: '#fff' }} />
                            <Line type="monotone" dataKey="revenue" stroke="#C47F17" strokeWidth={2.5} dot={{ fill: '#C47F17', strokeWidth: 0, r: 4 }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Top Products */}
                <div className="bg-[#1E1E1E] rounded-2xl p-5 border border-white/5">
                    <h2 className="text-sm font-bold font-[var(--font-poppins)] text-white mb-6">Top Products</h2>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={topProducts} layout="vertical">
                            <XAxis type="number" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                            <YAxis type="category" dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 10 }} width={80} />
                            <Tooltip contentStyle={{ background: '#262626', border: 'none', borderRadius: '12px', color: '#fff' }} />
                            <Bar dataKey="sales" fill="#C47F17" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-[#1E1E1E] rounded-2xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-sm font-bold font-[var(--font-poppins)] text-white">Recent Orders</h2>
                    <a href="/admin/orders" className="text-xs text-[#C47F17] font-[var(--font-poppins)] hover:underline">View All →</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs text-gray-500 font-[var(--font-poppins)] border-b border-white/5">
                                <th className="text-left pb-3">Order ID</th>
                                <th className="text-left pb-3">Customer</th>
                                <th className="text-left pb-3">Amount</th>
                                <th className="text-left pb-3">Status</th>
                                <th className="text-left pb-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="space-y-2">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="border-b border-white/5 last:border-0">
                                    <td className="py-3 text-sm text-[#C47F17] font-[var(--font-poppins)] font-medium">{order.id}</td>
                                    <td className="py-3 text-sm text-white font-[var(--font-poppins)]">{order.customer}</td>
                                    <td className="py-3 text-sm text-white font-[var(--font-poppins)] font-semibold">₹{order.amount}</td>
                                    <td className="py-3">
                                        <span className={`text-xs font-semibold font-[var(--font-poppins)] px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
                                    </td>
                                    <td className="py-3 text-sm text-gray-400 font-[var(--font-poppins)]">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
