import Link from 'next/link'

const categories = [
    { name: 'Whole Spices', icon: 'fa-pepper-hot', iconColor: '#C47F17', href: '/category/whole-spices', items: '24+ varieties', bg: 'bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/20' },
    { name: 'Ground & Powdered', icon: 'fa-mortar-pestle', iconColor: '#D4A017', href: '/category/ground-powdered', items: '18+ varieties', bg: 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/20' },
    { name: 'Blends & Masalas', icon: 'fa-jar', iconColor: '#D4562E', href: '/category/blends-masalas', items: '12+ blends', bg: 'bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900/20' },
    { name: 'Exotic & Rare', icon: 'fa-gem', iconColor: '#9B59B6', href: '/category/exotics-rare', items: '8+ varieties', bg: 'bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/20' },
]

export default function CategoryShowcase() {
    return (
        <section className="py-14 bg-[#F9F4EE] dark:bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-widest text-[#8E562E] dark:text-[#c4a87e] font-semibold mb-2">Browse by Type</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2E2E2E] dark:text-white">
                        Find Your <span className="text-[#C47F17] italic">Perfect Spice</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className={`group flex flex-col items-center p-6 sm:p-8 rounded-2xl border ${cat.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center`}
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-[#2a2a2a] flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                                <i className={`fa-solid ${cat.icon} text-2xl sm:text-3xl`} style={{ color: cat.iconColor }} />
                            </div>
                            <h3 className="font-bold text-[#2E2E2E] dark:text-white text-sm group-hover:text-[#C47F17] transition-colors">{cat.name}</h3>
                            <p className="text-xs text-gray-400 mt-1">{cat.items}</p>
                            <span className="mt-3 text-[11px] font-bold text-[#C47F17] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                Shop Now <i className="fa-solid fa-arrow-right text-[9px]" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
