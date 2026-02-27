import Link from 'next/link'

const categories = [
    { emoji: '🌶️', label: 'Whole Spices', slug: 'whole-spices', color: '#FFF0DC', border: '#C47F17' },
    { emoji: '🟡', label: 'Ground & Powdered', slug: 'ground-powdered', color: '#FFFBEA', border: '#E6B800' },
    { emoji: '🫙', label: 'Blends & Masalas', slug: 'blends-masalas', color: '#FFF5F0', border: '#D4562E' },
    { emoji: '🎁', label: 'Gift Packs', slug: 'gift-packs', color: '#F0FFF4', border: '#2ECC71' },
    { emoji: '✨', label: 'Exotics & Rare', slug: 'exotics-rare', color: '#F8F0FF', border: '#9B59B6' },
]

export default function CategoryPills() {
    return (
        <section className="bg-white border-b border-[#F0E8DC] py-5 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
                    <span className="text-xs font-bold text-[#8E562E] uppercase tracking-widest whitespace-nowrap shrink-0">
                        <i className="fa-solid fa-filter mr-1" />Browse
                    </span>
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            className="flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-md shrink-0"
                            style={{ backgroundColor: cat.color, border: `1.5px solid ${cat.border}`, color: '#2E2E2E' }}
                        >
                            <span className="text-base">{cat.emoji}</span>
                            {cat.label}
                        </Link>
                    ))}
                    <Link
                        href="/shop"
                        className="flex items-center gap-1.5 whitespace-nowrap px-5 py-2.5 rounded-full bg-[#C47F17] text-white font-bold text-sm hover:bg-[#a86c12] transition-all hover:scale-105 shrink-0"
                    >
                        <i className="fa-solid fa-store text-xs" />
                        Shop All
                    </Link>
                </div>
            </div>
        </section>
    )
}
