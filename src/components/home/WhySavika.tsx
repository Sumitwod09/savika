import Link from 'next/link'

const reasons = [
    { icon: 'fa-seedling', title: 'Farm-to-Pack Freshness', desc: 'Direct from farmers across Rajasthan, Kerala & the Northeast — no middlemen.', color: '#D4EDDA', iconColor: '#28A745' },
    { icon: 'fa-flask', title: 'Lab-Tested Quality', desc: 'Every batch tested for purity & adulteration. 100% clean guarantee.', color: '#CCE5FF', iconColor: '#007BFF' },
    { icon: 'fa-boxes-stacked', title: 'Eco-Friendly Packaging', desc: 'Resealable, airtight, recyclable packs — freshness guaranteed longer.', color: '#FFF3CD', iconColor: '#C47F17' },
    { icon: 'fa-hand-holding-heart', title: 'Fair Trade Sourcing', desc: 'Fair prices to farmers, ethical conditions across our supply chain.', color: '#F8D7DA', iconColor: '#DC3545' },
]

export default function WhySavika() {
    return (
        <section className="bg-white dark:bg-[#141414]">
            {/* CTA Banner — matches Lumora "Beauty That Loves Your Skin Back" */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#C47F17] to-[#8E562E] py-14 px-4">
                <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -right-16 -bottom-16 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3">Our Promise</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                        Quality That <span className="italic text-[#FFE0A0]">Loves</span> Your Kitchen Back
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base mb-8 max-w-lg mx-auto">
                        We are redefining spice with clean, conscious quality — from source to your shelf.
                    </p>
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 bg-white text-[#C47F17] font-bold px-8 py-3.5 rounded-full hover:bg-[#2C1A0E] hover:text-white transition-all duration-200 hover:scale-105 shadow-xl"
                    >
                        <i className="fa-solid fa-store" />
                        View All Products
                    </Link>
                </div>
            </div>

            {/* Reason Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {reasons.map((r) => (
                        <div
                            key={r.title}
                            className="p-6 rounded-2xl border border-transparent hover:border-[#C47F17]/30 hover:shadow-xl transition-all duration-300 group cursor-default"
                            style={{ backgroundColor: r.color }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                                style={{ backgroundColor: `${r.iconColor}20` }}
                            >
                                <i className={`fa-solid ${r.icon} text-xl`} style={{ color: r.iconColor }} />
                            </div>
                            <h3 className="text-sm font-extrabold text-[#2E2E2E] mb-2">{r.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
