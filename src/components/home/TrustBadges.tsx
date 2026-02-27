const badges = [
    {
        icon: 'fa-leaf',
        emoji: '🌱',
        title: '100% Natural',
        sub: 'No artificial additives or preservatives',
        color: '#D4EDDA',
        iconColor: '#28A745',
    },
    {
        icon: 'fa-award',
        emoji: '🏆',
        title: 'FSSAI Certified',
        sub: 'Safe, quality-tested & compliant',
        color: '#FFF3CD',
        iconColor: '#C47F17',
    },
    {
        icon: 'fa-truck-fast',
        emoji: '🚚',
        title: 'Pan-India Delivery',
        sub: 'Shipped in 3–7 business days',
        color: '#CCE5FF',
        iconColor: '#007BFF',
    },
    {
        icon: 'fa-rotate-left',
        emoji: '↩️',
        title: 'Easy Returns',
        sub: '7-day hassle-free return policy',
        color: '#F8D7DA',
        iconColor: '#DC3545',
    },
    {
        icon: 'fa-shield-halved',
        emoji: '🔒',
        title: 'Secure Payments',
        sub: 'Razorpay & UPI protected checkout',
        color: '#E2D9F3',
        iconColor: '#6F42C1',
    },
]

export default function TrustBadges() {
    return (
        <section className="bg-[#FFF8F0] py-10 px-4 border-y border-[#F0E8DC]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-xl font-extrabold text-[#2E2E2E] mb-8">
                    <i className="fa-solid fa-circle-check text-[#C47F17] mr-2" />
                    Why Thousands Trust Savika 🤝
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {badges.map((b) => (
                        <div
                            key={b.title}
                            className="flex flex-col items-center text-center p-5 rounded-2xl border border-transparent hover:border-[#C47F17]/30 hover:shadow-lg transition-all duration-300 cursor-default group"
                            style={{ backgroundColor: b.color }}
                        >
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-200"
                                style={{ backgroundColor: `${b.iconColor}20` }}
                            >
                                {b.emoji}
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
