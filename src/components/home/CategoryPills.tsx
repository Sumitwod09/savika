import Link from 'next/link'

const categories = [
    { icon: 'fa-pepper-hot', label: 'Whole Spices', sub: '24+ varieties', slug: 'whole-spices', bg: '#FFF0DC', iconColor: '#C47F17' },
    { icon: 'fa-mortar-pestle', label: 'Ground & Powdered', sub: '18+ products', slug: 'ground-powdered', bg: '#FFFBEA', iconColor: '#D4A017' },
    { icon: 'fa-jar', label: 'Blends & Masalas', sub: '12+ blends', slug: 'blends-masalas', bg: '#FFF5F0', iconColor: '#D4562E' },
    { icon: 'fa-gift', label: 'Gift Packs', sub: 'Premium sets', slug: 'gift-packs', bg: '#F0FFF4', iconColor: '#2ECC71' },
    { icon: 'fa-gem', label: 'Exotics & Rare', sub: '8 curated picks', slug: 'exotics-rare', bg: '#F8F0FF', iconColor: '#9B59B6' },
    { icon: 'fa-seedling', label: 'Organic Range', sub: 'Farm-certified', slug: 'whole-spices', bg: '#F0FFF8', iconColor: '#1ABC9C' },
]

export default function CategoryPills() {
    return (
        <section className="bg-white dark:bg-[#111] border-y border-[#F0E8DC] dark:border-white/10 py-6 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-start gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug + cat.label}
                            href={`/category/${cat.slug}`}
                            className="flex flex-col items-center gap-2 shrink-0 group"
                            style={{ minWidth: '80px' }}
                        >
                            {/* Circle */}
                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-[#C47F17] transition-all duration-200 group-hover:scale-105 shadow-sm"
                                style={{ backgroundColor: cat.bg }}
                            >
                                <i className={`fa-solid ${cat.icon} text-2xl sm:text-3xl`} style={{ color: cat.iconColor }} />
                            </div>
                            {/* Label */}
                            <div className="text-center">
                                <p className="text-[11px] sm:text-xs font-semibold text-[#2E2E2E] dark:text-white group-hover:text-[#C47F17] transition-colors leading-tight">{cat.label}</p>
                                <p className="text-[9px] sm:text-[10px] text-[#8E562E] dark:text-[#c4a87e] mt-0.5">{cat.sub}</p>
                            </div>
                        </Link>
                    ))}

                    {/* Shop All pill */}
                    <Link
                        href="/shop"
                        className="flex flex-col items-center gap-2 shrink-0 group"
                        style={{ minWidth: '80px' }}
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C47F17] flex items-center justify-center group-hover:bg-[#a86c12] transition-colors duration-200 group-hover:scale-105 shadow-lg shadow-[#C47F17]/25">
                            <i className="fa-solid fa-store text-2xl sm:text-3xl text-white" />
                        </div>
                        <div className="text-center">
                            <p className="text-[11px] sm:text-xs font-semibold text-[#C47F17] leading-tight">Shop All</p>
                            <p className="text-[9px] sm:text-[10px] text-[#8E562E] dark:text-[#c4a87e] mt-0.5">All products</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
