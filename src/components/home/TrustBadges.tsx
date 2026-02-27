const badges = [
    {
        icon: 'fa-leaf',
        title: '100% Natural',
        sub: 'No artificial additives or preservatives',
        color: '#D4EDDA',
        darkColor: '#0d2b14',
        iconColor: '#28A745',
    },
    {
        icon: 'fa-award',
        title: 'FSSAI Certified',
        sub: 'Safe, quality-tested & compliant',
        color: '#FFF3CD',
        darkColor: '#2a2000',
        iconColor: '#C47F17',
    },
    {
        icon: 'fa-truck-fast',
        title: 'Pan-India Delivery',
        sub: 'Shipped in 3–7 business days',
        color: '#CCE5FF',
        darkColor: '#001a33',
        iconColor: '#007BFF',
    },
    {
        icon: 'fa-rotate-left',
        title: 'Easy Returns',
        sub: '7-day hassle-free return policy',
        color: '#F8D7DA',
        darkColor: '#2a0009',
        iconColor: '#DC3545',
    },
    {
        icon: 'fa-shield-halved',
        title: 'Secure Payments',
        sub: 'Razorpay & UPI protected checkout',
        color: '#E2D9F3',
        darkColor: '#1a0b2e',
        iconColor: '#6F42C1',
    },
]

export default function TrustBadges() {
    return (
        <section className="bg-[#FFF8F0] dark:bg-[#0F0F0F] py-10 px-4 border-y border-[#F0E8DC] dark:border-white/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-xl font-extrabold text-[#2E2E2E] dark:text-white mb-8">
                    <i className="fa-solid fa-circle-check text-[#C47F17] mr-2" />
                    Why Thousands Trust Savika
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {badges.map((b) => (
                        <div
                            key={b.title}
                            className="flex flex-col items-center text-center p-5 rounded-2xl border border-transparent hover:border-[#C47F17]/30 hover:shadow-lg transition-all duration-300 cursor-default group"
                            style={{ backgroundColor: b.color }}
                        >
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200"
                                style={{ backgroundColor: `${b.iconColor}20` }}
                            >
                                <i className={`fa-solid ${b.icon} text-xl`} style={{ color: b.iconColor }} />
                            </div>
                            <p className="text-sm font-bold text-[#2E2E2E] mb-1">{b.title}</p>
                            <p className="text-[11px] text-gray-500 leading-snug">{b.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
