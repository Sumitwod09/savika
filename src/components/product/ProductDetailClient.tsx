'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/database'
import { formatCurrency, getDiscountPercent } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'

interface ProductDetailClientProps {
    product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const [selectedWeight, setSelectedWeight] = useState(product.weight_options?.[0] ?? '100g')
    const [selectedImage, setSelectedImage] = useState(0)
    const [qty, setQty] = useState(1)
    const [adding, setAdding] = useState(false)
    const { addItem } = useCartStore()

    const price = product.sale_price ?? product.price
    const discount = product.sale_price ? getDiscountPercent(product.price, product.sale_price) : 0

    const handleAddToCart = () => {
        setAdding(true)
        addItem(product, qty, selectedWeight)
        setTimeout(() => setAdding(false), 1000)
    }

    return (
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Image Gallery */}
            <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F9F4EE] dark:bg-[#262626]">
                    {product.images?.[selectedImage] ? (
                        <Image src={product.images[selectedImage]} alt={product.name} fill className="object-contain p-8" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-9xl">🌶️</div>
                    )}
                    {discount > 0 && (
                        <div className="absolute top-4 left-4 bg-[#C47F17] text-white text-xs font-bold font-[var(--font-poppins)] px-3 py-1 rounded-full">
                            -{discount}% OFF
                        </div>
                    )}
                </div>
                {product.images?.length > 1 && (
                    <div className="flex gap-3">
                        {product.images.map((img, i) => (
                            <button key={i} onClick={() => setSelectedImage(i)}
                                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-[#C47F17]' : 'border-transparent'}`}>
                                <Image src={img} alt="" fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
                <div>
                    <p className="text-xs text-[#8E562E] font-[var(--font-poppins)] uppercase tracking-widest mb-2">{product.category?.name}</p>
                    <h1 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5] leading-tight">{product.name}</h1>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-sm text-[#C47F17]" />)}</div>
                        <span className="text-sm text-gray-500 font-[var(--font-poppins)]">4.8 · 124 reviews</span>
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold font-[var(--font-playfair)] text-[#C47F17]">{formatCurrency(price)}</span>
                    {product.sale_price && (
                        <span className="text-xl line-through text-gray-400 font-[var(--font-poppins)]">{formatCurrency(product.price)}</span>
                    )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#5a4a3a] dark:text-[#D0C8BF] font-[var(--font-poppins)] leading-relaxed">{product.description}</p>

                {/* Weight Selection */}
                {product.weight_options && product.weight_options.length > 0 && (
                    <div>
                        <p className="text-sm font-semibold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)] mb-3">Select Weight</p>
                        <div className="flex flex-wrap gap-2">
                            {product.weight_options.map((w) => (
                                <button key={w} onClick={() => setSelectedWeight(w)}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold font-[var(--font-poppins)] border-2 transition-all duration-200 ${selectedWeight === w
                                        ? 'border-[#C47F17] bg-[#C47F17] text-white'
                                        : 'border-[#e8ddd0] dark:border-[#333] text-[#2E2E2E] dark:text-[#F5F5F5] hover:border-[#C47F17]'
                                        }`}>
                                    {w}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quantity + Cart */}
                <div className="flex gap-3 items-center">
                    <div className="flex items-center border-2 border-[#e8ddd0] dark:border-[#333] rounded-xl overflow-hidden">
                        <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-[#C47F17] font-bold hover:bg-[#F9F4EE] dark:hover:bg-[#262626] transition-colors">−</button>
                        <span className="px-4 py-3 text-sm font-bold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)] min-w-[3rem] text-center">{qty}</span>
                        <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-[#C47F17] font-bold hover:bg-[#F9F4EE] dark:hover:bg-[#262626] transition-colors">+</button>
                    </div>
                    <button onClick={handleAddToCart} disabled={product.stock === 0}
                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold font-[var(--font-poppins)] transition-all duration-300 ${adding ? 'bg-green-500 text-white' : 'bg-[#C47F17] hover:bg-[#a86c12] text-white hover:scale-[1.02]'
                            }`}>
                        <i className="fa-solid fa-cart-shopping" />
                        {adding ? '✓ Added to Cart!' : 'Add to Cart'}
                    </button>
                    <button className="p-3.5 rounded-xl border-2 border-[#e8ddd0] dark:border-[#333] hover:border-red-300 hover:text-red-500 transition-all">
                        <i className="fa-regular fa-heart text-lg" />
                    </button>
                </div>

                {/* Delivery info */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#e8ddd0] dark:border-[#333]">
                    {[
                        { icon: <i className="fa-solid fa-box text-lg" />, text: 'Premium Packaging' },
                        { icon: <i className="fa-solid fa-truck-fast text-lg" />, text: 'Free above ₹599' },
                        { icon: <i className="fa-solid fa-shield-halved text-lg" />, text: 'FSSAI Certified' },
                    ].map((item) => (
                        <div key={item.text} className="flex flex-col items-center gap-1 text-center text-[#C47F17]">
                            {item.icon}
                            <span className="text-[11px] text-gray-500 font-[var(--font-poppins)]">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
