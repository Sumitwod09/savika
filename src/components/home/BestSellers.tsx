import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import type { Product } from '@/types/database'

const BESTSELLERS: Product[] = [
    {
        id: 'bs1', slug: 'star-anise-whole', name: 'Star Anise — Premium Whole', description: '', price: 399, sale_price: 299,
        stock: 40, category_id: 'cat1', images: [], is_featured: true, is_active: true, created_at: '',
        category: { id: 'cat1', slug: 'whole-spices', name: 'Whole Spices', created_at: '' }
    },
    {
        id: 'bs2', slug: 'coriander-powder', name: 'Coriander Powder — Freshly Ground', description: '', price: 189, sale_price: undefined,
        stock: 90, category_id: 'cat2', images: [], is_featured: true, is_active: true, created_at: '',
        category: { id: 'cat2', slug: 'ground-powdered', name: 'Ground & Powdered', created_at: '' }
    },
    {
        id: 'bs3', slug: 'biryani-masala', name: 'Royal Biryani Masala', description: '', price: 449, sale_price: 349,
        stock: 25, category_id: 'cat3', images: [], is_featured: true, is_active: true, created_at: '',
        category: { id: 'cat3', slug: 'blends-masalas', name: 'Blends & Masalas', created_at: '' }
    },
    {
        id: 'bs4', slug: 'saffron-premium', name: 'Kashmiri Saffron — Grade A', description: '', price: 1299, sale_price: undefined,
        stock: 15, category_id: 'cat5', images: [], is_featured: true, is_active: true, created_at: '',
        category: { id: 'cat5', slug: 'exotics-rare', name: 'Exotics & Rare', created_at: '' }
    },
]

export default function BestSellers() {
    return (
        <section className="py-16 bg-[#F9F4EE] dark:bg-[#161616]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#8E562E] font-[var(--font-poppins)] mb-2">Customer Favourites</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5]">
                            The{' '}
                            <span className="text-[#C47F17] italic">Spice Edit</span>
                        </h2>
                    </div>
                    <Link href="/shop" className="hidden sm:inline-flex text-sm font-medium text-[#C47F17] hover:text-[#a86c12] font-[var(--font-poppins)] transition-colors">
                        View All →
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {BESTSELLERS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
