import Link from 'next/link'

const reasons = [
    {
        icon: 'fa-seedling',
        emoji: '🌱',
        title: 'Farm-to-Pack Freshness',
        desc: 'We source directly from trusted farmers across Rajasthan, Kerala, and the Northeast – no middlemen, maximum freshness.',
        color: '#D4EDDA',
        iconColor: '#28A745',
    },
    {
        icon: 'fa-flask',
        emoji: '🔬',
        title: 'Lab-Tested Quality',
        desc: 'Every batch is tested for purity, moisture, and adulteration. What reaches you is 100% unadulterated.',
        color: '#CCE5FF',
        iconColor: '#007BFF',
    },
    {
        icon: 'fa-boxes-stacked',
        emoji: '📦',
        title: 'Eco-Friendly Packaging',
        desc: 'Our packaging is resealable, airtight, and made from recyclable materials – keeping spices fresh and earth happy.',
        color: '#FFF3CD',
        iconColor: '#C47F17',
    },
    {
        icon: 'fa-hand-holding-heart',
        emoji: '🤝',
        title: 'Fair Trade Sourcing',
        desc: 'We pay fair prices to farmers and ensure ethical working conditions throughout our supply chain.',
        color: '#F8D7DA',
        iconColor: '#DC3545',
    },
]

export default function WhySavika() {
    return (
        <section className="bg-white py-14 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#FFF0DC] text-[#C47F17] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                        <i className="fa-solid fa-award mr-1" />OUR PROMISE
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#2E2E2E] mb-3">
                        Beauty That <span className="text-[#C47F17]">Loves</span> Your Kitchen Back 🍽️
                    </h2>
                    <p className="text-gray-500 text-sm max-w-lg mx-auto">
                        We are redefining spice with clean, conscious quality — from source to your shelf.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {reasons.map((r) => (
                        <div
                            key={r.title}
                            className="p-6 rounded-2xl border border-transparent hover:border-[#C47F17]/30 hover:shadow-xl transition-all duration-300 group cursor-default"
                            style={{ backgroundColor: r.color }}
                        >
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200"
                                style={{ backgroundColor: `${r.iconColor}20` }}
                            >
                                {r.emoji}
                            </div>
                            <h3 className="text-base font-extrabold text-[#2E2E2E] mb-2">{r.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-[#C47F17] to-[#8E562E] rounded-3xl p-8 text-center text-white relative overflow-hidden">
                    <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                    <div className="relative z-10">
                        <p className="text-2xl font-extrabold mb-2">🌶️ Explore the Full Savika Range</p>
                        <p className="text-sm text-white/80 mb-5">50+ varieties of premium Indian spices, blends & gift sets.</p>
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 bg-white text-[#C47F17] font-bold px-8 py-3 rounded-full hover:bg-[#2C1A0E] hover:text-white transition-all duration-200 hover:scale-105"
                        >
                            <i className="fa-solid fa-store" />
                            View All Products
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
