import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import type { Product } from '@/types/database'

// Mock featured products — replace with Supabase fetch
const MOCK_PRODUCTS: Product[] = [
    {
        id: '1', slug: 'kashmiri-mirch-whole', name: 'Kashmiri Mirch — Whole', description: '', price: 299, sale_price: 199,
        stock: 50, category_id: 'cat1', images: [], is_featured: true, is_active: true,
        created_at: '', weight_options: ['50g', '100g', '250g'],
        category: { id: 'cat1', slug: 'whole-spices', name: 'Whole Spices', created_at: '' }
    },
    {
        id: '2', slug: 'premium-turmeric-powder', name: 'Premium Turmeric Powder', description: '', price: 249, sale_price: undefined,
        stock: 80, category_id: 'cat2', images: [], is_featured: true, is_active: true,
        created_at: '', weight_options: ['100g', '250g', '500g'],
        category: { id: 'cat2', slug: 'ground-powdered', name: 'Ground & Powdered', created_at: '' }
    },
    {
        id: '3', slug: 'garam-masala-artisan', name: 'Artisan Garam Masala', description: '', price: 399, sale_price: 299,
        stock: 35, category_id: 'cat3', images: [], is_featured: true, is_active: true,
        created_at: '', weight_options: ['100g', '250g'],
        category: { id: 'cat3', slug: 'blends-masalas', name: 'Blends & Masalas', created_at: '' }
    },
    {
        id: '4', slug: 'black-pepper-malabar', name: 'Malabar Black Pepper', description: '', price: 349, sale_price: undefined,
        stock: 60, category_id: 'cat1', images: [], is_featured: true, is_active: true,
        created_at: '', weight_options: ['50g', '100g', '250g', '500g'],
        category: { id: 'cat1', slug: 'whole-spices', name: 'Whole Spices', created_at: '' }
    },
]

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-[#F9F4EE] dark:bg-[#161616]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#8E562E] font-[var(--font-poppins)] mb-2">Handpicked Selection</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5]">
                            Shop Our{' '}
                            <span className="text-[#C47F17] italic">Spice Heroes</span>
                        </h2>
                    </div>
                    <Link href="/shop" className="hidden sm:inline-flex text-sm font-medium text-[#C47F17] hover:text-[#a86c12] font-[var(--font-poppins)] transition-colors">
                        View All →
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {MOCK_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-8 sm:hidden">
                    <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-[#C47F17] hover:text-[#a86c12] font-[var(--font-poppins)]">
                        View All Products →
                    </Link>
                </div>
            </div>
        </section>
    )
}
