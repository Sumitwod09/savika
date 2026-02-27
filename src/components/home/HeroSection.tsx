'use client'

import Link from 'next/link'

const stats = [
    { value: '50+', label: 'Spice Varieties' },
    { value: '10k+', label: 'Happy Customers' },
    { value: '4.9', label: 'Avg. Rating' },
]

const floatingBadges = [
    { label: 'Kashmiri Mirch', sub: 'Single-origin · Whole', icon: 'fa-pepper-hot', pos: 'top-4 right-4' },
    { label: 'Pure Turmeric', sub: 'Cold-ground powder', icon: 'fa-mortar-pestle', pos: 'bottom-8 left-0' },
    { label: 'FSSAI Certified', sub: 'Lab tested & verified', icon: 'fa-circle-check', pos: 'top-1/2 -left-6' },
]

export default function HeroSection() {
    return (
        <section className="bg-white dark:bg-[#111] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* ─── LEFT ─── */}
                    <div className="order-2 lg:order-1">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 bg-[#FFF0DC] border border-[#C47F17]/30 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C47F17] animate-pulse" />
                            <span className="text-[11px] font-bold text-[#C47F17] tracking-widest uppercase">
                                India&apos;s #1 Premium Spice Brand
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-[#1a1a1a] dark:text-white mb-6">
                            Your Kitchen.{' '}
                            <span className="text-[#C47F17] italic relative inline-block">
                                Your Spice.
                                <svg className="absolute -bottom-2 left-0 w-full opacity-60" viewBox="0 0 220 8" fill="none">
                                    <path d="M2 6 Q55 1 110 5 Q165 9 218 3" stroke="#C47F17" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        {/* Sub */}
                        <p className="text-[#5a4a3a] dark:text-[#b8a89a] text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                            Glow-enhancing, skin-loving beauty for every Indian skin
                            tone. Hand-picked from India&apos;s finest spice gardens.
                            Freshly ground, artisan-blended. <strong className="text-[#2E2E2E] dark:text-white">Taste real purity.</strong>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-[#C47F17] hover:bg-[#a86c12] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#C47F17]/25"
                            >
                                <i className="fa-solid fa-cart-shopping text-sm" />
                                Explore Spice Range
                            </Link>
                            <Link
                                href="/category/gift-packs"
                                className="inline-flex items-center gap-2 border-2 border-[#8E562E] text-[#8E562E] dark:border-[#C47F17] dark:text-[#C47F17] font-semibold px-7 py-3 rounded-full hover:bg-[#8E562E] hover:text-white dark:hover:bg-[#C47F17] dark:hover:text-white transition-all duration-200"
                            >
                                <i className="fa-solid fa-gift text-sm" />
                                Gift Sets
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-6 border-t border-[#e8ddd0] dark:border-white/10">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-extrabold text-[#C47F17] font-[family-name:var(--font-playfair)]">{s.value}</p>
                                    <p className="text-xs text-[#8E562E] dark:text-[#c4a87e] font-medium mt-0.5">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ─── RIGHT ─── */}
                    <div className="order-1 lg:order-2 relative flex items-center justify-center py-8">
                        {/* Blob */}
                        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-[#FFF0DC] to-[#FFE0B0] dark:from-[#2a1800] dark:to-[#1a1000] flex items-center justify-center relative">
                            {/* Central icon */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#C47F17]/15 flex items-center justify-center">
                                    <i className="fa-solid fa-pepper-hot text-6xl sm:text-7xl text-[#C47F17]" />
                                </div>
                                <p className="mt-3 font-bold text-[#2E2E2E] dark:text-white text-sm">Kashmiri Mirch</p>
                                <p className="text-[11px] text-[#8E562E] dark:text-[#c4a87e]">Whole · Single Origin</p>
                            </div>

                            {/* Floating tags */}
                            {floatingBadges.map((b) => (
                                <div key={b.label} className={`absolute ${b.pos} bg-white dark:bg-[#1e1e1e] rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 min-w-[130px]`}>
                                    <div className="w-8 h-8 rounded-full bg-[#FFF0DC] dark:bg-[#2a1800] flex items-center justify-center shrink-0">
                                        <i className={`fa-solid ${b.icon} text-[#C47F17] text-sm`} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-[#2E2E2E] dark:text-white leading-tight">{b.label}</p>
                                        <p className="text-[9px] text-[#8E562E] dark:text-[#c4a87e] leading-tight">{b.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Label tag */}
                        <div className="absolute -bottom-2 right-4 sm:right-10 bg-[#C47F17] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                            <i className="fa-solid fa-leaf mr-1" />Natural Ingredients
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
