import Link from 'next/link'

const banners = [
    {
        bg: 'from-[#8E562E] to-[#C47F17]',
        badge: '🔥 Limited Time',
        title: '50% OFF',
        sub: 'On all masala blends',
        desc: 'Use code SPICE50 at checkout',
        cta: { label: 'Grab the Deal', href: '/shop?sale=masala' },
        emoji: '🫙',
    },
    {
        bg: 'from-[#C47F17] to-[#E6A020]',
        badge: '🌟 Fan Favourite',
        title: '50% OFF',
        sub: 'Exotic & Rare spices',
        desc: 'Desi. Vegan. Powerful.',
        cta: { label: 'Buy Now', href: '/category/exotics-rare' },
        emoji: '✨',
    },
]

export default function SaleBanners() {
    return (
        <section className="bg-[#FFF8F0] py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {banners.map((b, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${b.bg} text-white p-8 flex items-center justify-between group`}
                        >
                            {/* Background decorative circle */}
                            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
                            <div className="absolute -right-5 -bottom-10 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />

                            <div className="relative z-10">
                                <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-bold mb-3">{b.badge}</span>
                                <h3 className="text-5xl font-extrabold leading-none mb-1">{b.title}</h3>
                                <p className="text-lg font-bold mb-1">{b.sub}</p>
                                <p className="text-sm text-white/80 mb-5">{b.desc}</p>
                                <Link
                                    href={b.cta.href}
                                    className="inline-flex items-center gap-2 bg-white text-[#8E562E] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#2C1A0E] hover:text-white transition-all duration-200 hover:scale-105"
                                >
                                    <i className="fa-solid fa-bolt" />
                                    {b.cta.label}
                                </Link>
                            </div>

                            <div className="relative z-10 text-8xl group-hover:scale-110 transition-transform duration-300">
                                {b.emoji}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
