'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type { Product } from '@/types/database'
import { formatCurrency, getDiscountPercent } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'

interface ProductCardProps {
    product: Product
    className?: string
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [adding, setAdding] = useState(false)
    const { addItem } = useCartStore()

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.preventDefault()
        setAdding(true)
        addItem(product)
        setTimeout(() => setAdding(false), 800)
    }

    const discountPercent = product.sale_price
        ? getDiscountPercent(product.price, product.sale_price)
        : 0

    return (
        <div className={`group relative bg-white dark:bg-[#262626] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
            {/* Wishlist */}
            <button
                onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted) }}
                aria-label="Toggle Wishlist"
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm shadow-sm transition-transform hover:scale-110"
            >
                <i className={`fa-heart text-sm transition-colors ${isWishlisted ? 'fa-solid text-red-500' : 'fa-regular text-gray-400'}`} />
            </button>

            {/* Badge */}
            {discountPercent > 0 && (
                <div className="absolute top-3 left-3 z-10 bg-[#C47F17] text-white text-[10px] font-bold font-[var(--font-poppins)] px-2 py-0.5 rounded-full">
                    -{discountPercent}%
                </div>
            )}
            {product.is_featured && !discountPercent && (
                <div className="absolute top-3 left-3 z-10 bg-[#8E562E] text-white text-[10px] font-bold font-[var(--font-poppins)] px-2 py-0.5 rounded-full">
                    Best Seller
                </div>
            )}

            <Link href={`/product/${product.slug}`}>
                {/* Image */}
                <div className="relative h-52 bg-[#F9F4EE] dark:bg-[#333] overflow-hidden">
                    {product.images?.[0] ? (
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className="fa-solid fa-pepper-hot text-5xl text-[#C47F17]/40" />
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4">
                    <p className="text-xs text-[#8E562E] font-[var(--font-poppins)] mb-1">
                        {product.category?.name ?? 'Spice'}
                    </p>
                    <h3 className="text-sm font-semibold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)] leading-snug line-clamp-2 mb-2">
                        {product.name}
                    </h3>

                    {/* Rating placeholder */}
                    <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star text-[10px] text-[#C47F17]" />
                        ))}
                        <span className="text-[11px] text-gray-400 ml-1">(4.8)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#C47F17] font-[var(--font-playfair)]">
                            {formatCurrency(product.sale_price ?? product.price)}
                        </span>
                        {product.sale_price && (
                            <span className="text-xs line-through text-gray-400">
                                {formatCurrency(product.price)}
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Add to Cart */}
            <div className="px-4 pb-4">
                <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold font-[var(--font-poppins)] transition-all duration-300 ${product.stock === 0
                        ? 'bg-gray-100 dark:bg-[#333] text-gray-400 cursor-not-allowed'
                        : adding
                            ? 'bg-green-500 text-white scale-[0.98]'
                            : 'bg-[#C47F17] text-white hover:bg-[#a86c12] hover:scale-[1.02]'
                        }`}
                >
                    <i className="fa-solid fa-cart-shopping text-sm" />
                    {product.stock === 0 ? 'Out of Stock' : adding ? 'Added!' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}
