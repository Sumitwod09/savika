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
        setTimeout(() => setAdding(false), 900)
    }

    const discountPercent = product.sale_price ? getDiscountPercent(product.price, product.sale_price) : 0

    return (
        <div className={`group bg-white dark:bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>

            {/* Image area */}
            <Link href={`/product/${product.slug}`} className="block relative">
                <div className="relative h-44 sm:h-52 bg-[#F9F4EE] dark:bg-[#2a2a2a] overflow-hidden">
                    {product.images?.[0] ? (
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className="fa-solid fa-pepper-hot text-5xl text-[#C47F17]/30" />
                        </div>
                    )}

                    {/* Discount badge */}
                    {discountPercent > 0 && (
                        <span className="absolute top-2.5 left-2.5 bg-[#C47F17] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                            -{discountPercent}%
                        </span>
                    )}
                    {product.is_featured && !discountPercent && (
                        <span className="absolute top-2.5 left-2.5 bg-[#8E562E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                            Best Seller
                        </span>
                    )}

                    {/* Wishlist */}
                    <button
                        onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted) }}
                        aria-label="Toggle Wishlist"
                        className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white dark:bg-[#2a2a2a] shadow-md flex items-center justify-center transition-transform hover:scale-110"
                    >
                        <i className={`fa-heart text-sm ${isWishlisted ? 'fa-solid text-red-500' : 'fa-regular text-gray-400'}`} />
                    </button>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4">
                    <p className="text-[10px] sm:text-xs text-[#8E562E] dark:text-[#c4a87e] font-semibold mb-1 uppercase tracking-wide">
                        {product.category?.name ?? 'Spice'}
                    </p>
                    <h3 className="text-sm font-semibold text-[#2E2E2E] dark:text-white leading-snug line-clamp-2 mb-2 group-hover:text-[#C47F17] transition-colors">
                        {product.name}
                    </h3>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star text-[9px] text-[#C47F17]" />
                        ))}
                        <span className="text-[10px] text-gray-400 ml-1">(4.8)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#C47F17] font-[family-name:var(--font-playfair)]">
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
            <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${product.stock === 0
                        ? 'bg-gray-100 dark:bg-[#333] text-gray-400 cursor-not-allowed'
                        : adding
                            ? 'bg-green-500 text-white scale-[0.98]'
                            : 'bg-[#FFF0DC] dark:bg-[#2a1800] text-[#C47F17] hover:bg-[#C47F17] hover:text-white hover:scale-[1.02]'
                        }`}
                >
                    <i className={`fa-solid ${adding ? 'fa-check' : 'fa-cart-shopping'} text-sm`} />
                    {product.stock === 0 ? 'Out of Stock' : adding ? 'Added!' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}
