import Link from 'next/link'

const banners = [
    {
        bg: 'linear-gradient(135deg, #7a4824 0%, #C47F17 100%)',
        badge: 'Limited Time', badgeIcon: 'fa-fire',
        title: '50%', titleSub: 'OFF',
        sub: 'On all masala blends',
        desc: 'Use code SPICE50 at checkout',
        cta: { label: 'Buy Now', href: '/shop?sale=masala' },
        icon: 'fa-jar',
    },
    {
        bg: 'linear-gradient(135deg, #C47F17 0%, #E6A020 100%)',
        badge: 'Fan Favourite', badgeIcon: 'fa-star',
        title: '50%', titleSub: 'OFF',
        sub: 'Exotic & Rare spices',
        desc: 'Desi. Vegan. Powerful.',
        cta: { label: 'Buy Now', href: '/category/exotics-rare' },
        icon: 'fa-gem',
    },
]

export default function SaleBanners() {
    return (
        <section style={{ padding: '2.5rem 1rem', background: '#F9F4EE' }}>
            <div className="section-wrap">
                <div className="grid-2">
                    {banners.map((b, i) => (
                        <div
                            key={i}
                            style={{
                                background: b.bg,
                                borderRadius: '1.25rem',
                                padding: '2rem 2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '200px',
                            }}
                        >
                            {/* Decorative circles */}
                            <div style={{ position: 'absolute', right: '-2rem', top: '-2rem', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,.12)', pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', right: '-0.5rem', bottom: '-1.5rem', width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', pointerEvents: 'none' }} />

                            {/* Text side */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                    background: 'rgba(255,255,255,.25)', color: '#fff',
                                    fontSize: '11px', fontWeight: 700,
                                    padding: '0.25rem 0.75rem', borderRadius: '9999px',
                                    marginBottom: '0.75rem'
                                }}>
                                    <i className={`fa-solid ${b.badgeIcon}`} style={{ fontSize: '10px' }} />
                                    {b.badge}
                                </span>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px', marginBottom: '0.25rem' }}>
                                    <span style={{
                                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                        fontWeight: 800, lineHeight: 1, color: '#fff',
                                        fontFamily: 'var(--font-playfair, Georgia)'
                                    }}>{b.title}</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>{b.titleSub}</span>
                                </div>
                                <p style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,.95)', marginBottom: '0.25rem' }}>{b.sub}</p>
                                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,.7)', marginBottom: '1.25rem' }}>{b.desc}</p>
                                <Link
                                    href={b.cta.href}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                        background: '#fff', color: '#8E562E',
                                        fontWeight: 700, fontSize: '0.8125rem',
                                        padding: '0.6rem 1.25rem', borderRadius: '9999px',
                                        textDecoration: 'none', transition: 'background 200ms, color 200ms'
                                    }}
                                >
                                    <i className="fa-solid fa-bolt" style={{ fontSize: '10px' }} />
                                    {b.cta.label}
                                </Link>
                            </div>

                            {/* Icon side */}
                            <div style={{
                                width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0,
                                background: 'rgba(255,255,255,.15)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                position: 'relative', zIndex: 1
                            }}>
                                <i className={`fa-solid ${b.icon}`} style={{ fontSize: '2rem', color: '#fff' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
