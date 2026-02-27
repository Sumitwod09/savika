'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useCartStore } from '@/store/cartStore'
import { formatCurrency } from '@/lib/utils'
import { useState } from 'react'

export default function CartPage() {
    const { items, removeItem, updateQuantity, total, clearCart } = useCartStore()
    const [coupon, setCoupon] = useState('')
    const cartTotal = total()
    const shipping = cartTotal >= 599 ? 0 : 60

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-[#F9F4EE] dark:bg-[#161616] flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="text-8xl mb-6">🛒</div>
                    <h2 className="text-3xl font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5] mb-3">Your cart is empty</h2>
                    <p className="text-gray-500 font-[var(--font-poppins)] mb-8">Discover India's finest spices and fill your kitchen with flavour.</p>
                    <Link href="/shop" className="inline-block bg-[#C47F17] hover:bg-[#a86c12] text-white px-8 py-4 rounded-full font-bold font-[var(--font-poppins)] transition-all hover:scale-105">
                        Shop All Spices
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#F9F4EE] dark:bg-[#161616]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5] mb-8">
                    Your Cart{' '}
                    <span className="text-[#C47F17] text-xl font-normal italic">({items.length} items)</span>
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => {
                            const price = item.product.sale_price ?? item.product.price
                            return (
                                <div key={`${item.product_id}-${item.weight}`} className="bg-white dark:bg-[#262626] rounded-2xl p-4 flex gap-4 shadow-sm">
                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#F9F4EE] dark:bg-[#333] shrink-0">
                                        {item.product.images?.[0] ? (
                                            <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-4xl">🌶️</div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/product/${item.product.slug}`} className="font-semibold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)] hover:text-[#C47F17] block truncate">
                                            {item.product.name}
                                        </Link>
                                        {item.weight && <p className="text-xs text-[#8E562E] mt-0.5 font-[var(--font-poppins)]">{item.weight}</p>}
                                        <p className="text-[#C47F17] font-bold font-[var(--font-playfair)] mt-1">{formatCurrency(price)}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <div className="flex items-center border border-[#e8ddd0] dark:border-[#444] rounded-lg overflow-hidden">
                                                <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)} className="px-3 py-1.5 text-[#C47F17] hover:bg-[#F9F4EE] dark:hover:bg-[#333] transition-colors">
                                                    <i className="fa-solid fa-minus text-[10px]" />
                                                </button>
                                                <span className="px-3 py-1.5 text-sm font-bold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)]">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)} className="px-3 py-1.5 text-[#C47F17] hover:bg-[#F9F4EE] dark:hover:bg-[#333] transition-colors">
                                                    <i className="fa-solid fa-plus text-[10px]" />
                                                </button>
                                            </div>
                                            <span className="font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5]">{formatCurrency(price * item.quantity)}</span>
                                            <button onClick={() => removeItem(item.product_id)} className="ml-auto text-red-400 hover:text-red-600 transition-colors p-1">
                                                <i className="fa-solid fa-trash text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-[#262626] rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold font-[var(--font-playfair)] text-[#2E2E2E] dark:text-[#F5F5F5] text-lg mb-6">Order Summary</h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm font-[var(--font-poppins)]">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-semibold text-[#2E2E2E] dark:text-[#F5F5F5]">{formatCurrency(cartTotal)}</span>
                                </div>
                                <div className="flex justify-between text-sm font-[var(--font-poppins)]">
                                    <span className="text-gray-500">Shipping</span>
                                    <span className={shipping === 0 ? 'text-green-500 font-semibold' : 'font-semibold text-[#2E2E2E] dark:text-[#F5F5F5]'}>
                                        {shipping === 0 ? 'FREE' : formatCurrency(shipping)}
                                    </span>
                                </div>
                                {shipping > 0 && (
                                    <p className="text-xs text-[#8E562E] font-[var(--font-poppins)]">Add {formatCurrency(599 - cartTotal)} more for free shipping!</p>
                                )}
                                <div className="border-t border-[#e8ddd0] dark:border-[#333] pt-3 flex justify-between">
                                    <span className="font-bold text-[#2E2E2E] dark:text-[#F5F5F5] font-[var(--font-poppins)]">Total</span>
                                    <span className="font-bold text-xl text-[#C47F17] font-[var(--font-playfair)]">{formatCurrency(cartTotal + shipping)}</span>
                                </div>
                            </div>

                            {/* Coupon */}
                            <div className="flex gap-2 mb-6">
                                <div className="relative flex-1">
                                    <i className="fa-solid fa-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)}
                                        placeholder="Coupon code"
                                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#e8ddd0] dark:border-[#333] bg-white dark:bg-[#1C1C1C] text-sm font-[var(--font-poppins)] focus:outline-none focus:border-[#C47F17]" />
                                </div>
                                <button className="px-4 py-2.5 rounded-xl border border-[#C47F17] text-[#C47F17] text-sm font-semibold font-[var(--font-poppins)] hover:bg-[#C47F17] hover:text-white transition-all">
                                    Apply
                                </button>
                            </div>

                            <Link href="/checkout"
                                className="block w-full text-center bg-[#C47F17] hover:bg-[#a86c12] text-white py-3.5 rounded-xl font-bold font-[var(--font-poppins)] transition-all hover:scale-[1.02]">
                                Proceed to Checkout →
                            </Link>
                            <Link href="/shop" className="block text-center text-sm text-[#C47F17] mt-3 font-[var(--font-poppins)] hover:underline">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
