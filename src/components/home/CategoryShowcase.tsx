import Link from 'next/link'

const categories = [
    {
        name: 'Whole Spices',
        icon: 'fa-pepper-hot',
        iconColor: '#C47F17',
        href: '/category/whole-spices',
        items: '24+ varieties',
        bg: 'bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/20',
    },
    {
        name: 'Ground & Powdered',
        icon: 'fa-mortar-pestle',
        iconColor: '#E6B800',
        href: '/category/ground-powdered',
        items: '18+ varieties',
        bg: 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/20',
    },
    {
        name: 'Blends & Masalas',
        icon: 'fa-jar',
        iconColor: '#D4562E',
        href: '/category/blends-masalas',
        items: '12+ blends',
        bg: 'bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900/20',
    },
    {
        name: 'Exotic & Rare',
        icon: 'fa-gem',
        iconColor: '#9B59B6',
        href: '/category/exotics-rare',
        items: '8+ varieties',
        bg: 'bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/20',
    },
]

export default function CategoryShowcase() {
    return (
        <section className="py-16 bg-white dark:bg-[#1C1C1C]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-widest text-[#8E562E] dark:text-[#c4a87e] font-[var(--font-poppins)] mb-2">Browse by Type</p>
                    <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5]">
                        Find Your <span className="text-[#C47F17] italic">Perfect Spice</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                        <Link key={cat.name} href={cat.href} className={`group flex flex-col items-center p-6 rounded-2xl border ${cat.bg} hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center`}>
                            <div className="w-20 h-20 rounded-full bg-white dark:bg-[#262626] flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                                <i className={`fa-solid ${cat.icon} text-3xl`} style={{ color: cat.iconColor }} />
                            </div>
                            <h3 className="font-bold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)] text-sm group-hover:text-[#C47F17] transition-colors">{cat.name}</h3>
                            <p className="text-xs text-gray-400 mt-1 font-[var(--font-poppins)]">{cat.items}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
