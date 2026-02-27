import Link from 'next/link'

const banners = [
    {
        bg: 'linear-gradient(135deg, #8E562E 0%, #C47F17 100%)',
        badge: 'Limited Time',
        badgeIcon: 'fa-fire',
        title: '50%',
        titleSub: 'OFF',
        sub: 'On all masala blends',
        desc: 'Use code SPICE50 at checkout',
        cta: { label: 'Buy Now', href: '/shop?sale=masala' },
        icon: 'fa-jar',
        accentBg: 'rgba(255,255,255,0.12)',
    },
    {
        bg: 'linear-gradient(135deg, #C47F17 0%, #E6A020 100%)',
        badge: 'Fan Favourite',
        badgeIcon: 'fa-star',
        title: '50%',
        titleSub: 'OFF',
        sub: 'Exotic & Rare spices',
        desc: 'Desi. Vegan. Powerful.',
        cta: { label: 'Buy Now', href: '/category/exotics-rare' },
        icon: 'fa-gem',
        accentBg: 'rgba(255,255,255,0.1)',
    },
]

export default function SaleBanners() {
    return (
        <section className="py-10 px-4 bg-[#F9F4EE] dark:bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {banners.map((b, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-2xl text-white flex items-center justify-between p-7 sm:p-10 group"
                            style={{ background: b.bg, minHeight: '200px' }}
                        >
                            {/* Decorative circles */}
                            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full pointer-events-none" style={{ background: b.accentBg }} />
                            <div className="absolute -right-4 bottom-0 w-24 h-24 rounded-full pointer-events-none" style={{ background: b.accentBg }} />

                            {/* Text */}
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-1.5 bg-white/25 text-white text-[11px] font-bold px-3 py-1 rounded-full mb-4">
                                    <i className={`fa-solid ${b.badgeIcon} text-[10px]`} />
                                    {b.badge}
                                </span>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-6xl sm:text-7xl font-extrabold leading-none font-[family-name:var(--font-playfair)]">{b.title}</span>
                                    <span className="text-3xl font-extrabold">{b.titleSub}</span>
                                </div>
                                <p className="text-base font-bold mb-1 text-white/95">{b.sub}</p>
                                <p className="text-sm text-white/70 mb-5">{b.desc}</p>
                                <Link
                                    href={b.cta.href}
                                    className="inline-flex items-center gap-2 bg-white text-[#8E562E] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#2C1A0E] hover:text-white transition-all duration-200 hover:scale-105"
                                >
                                    <i className="fa-solid fa-bolt text-xs" />
                                    {b.cta.label}
                                </Link>
                            </div>

                            {/* Icon */}
                            <div className="relative z-10 shrink-0 ml-4">
                                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: b.accentBg }}>
                                    <i className={`fa-solid ${b.icon} text-4xl sm:text-5xl text-white`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
