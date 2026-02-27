import Link from 'next/link'

const categories = [
    { name: 'Whole Spices', icon: 'fa-pepper-hot', iconColor: '#C47F17', href: '/category/whole-spices', items: '24+ varieties', bg: '#FFF8EE' },
    { name: 'Ground & Powdered', icon: 'fa-mortar-pestle', iconColor: '#D4A017', href: '/category/ground-powdered', items: '18+ varieties', bg: '#FFFBEA' },
    { name: 'Blends & Masalas', icon: 'fa-jar', iconColor: '#D4562E', href: '/category/blends-masalas', items: '12+ blends', bg: '#FFF5F0' },
    { name: 'Exotic & Rare', icon: 'fa-gem', iconColor: '#9B59B6', href: '/category/exotics-rare', items: '8+ varieties', bg: '#F8F0FF' },
]

export default function CategoryShowcase() {
    return (
        <section style={{ padding: '3.5rem 1rem', background: '#F9F4EE' }}>
            <div className="section-wrap">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#8E562E', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Browse by Type</p>
                    <h2 style={{ fontFamily: 'var(--font-playfair, Georgia)', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#2E2E2E' }}>
                        Find Your <span style={{ color: '#C47F17', fontStyle: 'italic' }}>Perfect Spice</span>
                    </h2>
                </div>

                <div className="grid-cats">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="cat-card"
                            style={{ background: cat.bg }}
                        >
                            <div style={{
                                width: '70px', height: '70px', borderRadius: '50%',
                                background: '#fff', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', marginBottom: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,.08)'
                            }}>
                                <i className={`fa-solid ${cat.icon}`} style={{ fontSize: '1.75rem', color: cat.iconColor }} />
                            </div>
                            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2E2E2E', marginBottom: '4px' }}>{cat.name}</h3>
                            <p style={{ fontSize: '0.75rem', color: '#8E562E' }}>{cat.items}</p>
                            <p style={{ fontSize: '11px', fontWeight: 700, color: '#C47F17', marginTop: '0.75rem' }}>
                                Shop Now <i className="fa-solid fa-arrow-right" style={{ fontSize: '9px' }} />
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
