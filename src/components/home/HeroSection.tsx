'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
    {
        badge: '🌟 India\'s #1 Spice Brand',
        headline: 'Your Kitchen.\nYour Spice.',
        highlight: 'Your Spice.',
        sub: 'Hand-picked from India\'s finest spice gardens. Freshly ground, artisan-blended, delivered to your door.',
        cta: { label: '🛒 Shop All Spices', href: '/shop' },
        cta2: { label: '🎁 Gift Sets', href: '/category/gift-packs' },
        emoji: '🌶️',
        emojiLabel: 'Kashmiri Mirch',
        emojiSub: 'Single-origin · Whole',
        tag1: { icon: '🟡', name: 'Turmeric', sub: 'Pure Ground' },
        tag2: { icon: '🟤', name: 'Cinnamon', sub: 'Ceylon Grade' },
        badge2: '✅ FSSAI Certified',
    },
]

const stats = [
    { value: '50+', label: 'Spice Varieties', icon: 'fa-jar' },
    { value: '10k+', label: 'Happy Customers', icon: 'fa-face-smile' },
    { value: '4.9★', label: 'Avg. Rating', icon: 'fa-star' },
]

export default function HeroSection() {
    const [floatY, setFloatY] = useState(0)

    useEffect(() => {
        let frame: number
        let t = 0
        const animate = () => {
            t += 0.02
            setFloatY(Math.sin(t) * 10)
            frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFF0DC] to-[#FFE8C8]">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C47F17]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#8E562E]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#C47F17]/10 border border-[#C47F17]/20 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#C47F17] animate-pulse" />
                            <span className="text-xs font-semibold text-[#C47F17] tracking-wide">🌟 India&apos;s #1 Premium Spice Brand</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2E2E2E] leading-tight mb-6">
                            Your Kitchen.{' '}
                            <span className="text-[#C47F17] relative inline-block">
                                Your Spice.
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                                    <path d="M0 8 Q50 2 100 6 Q150 10 200 4" stroke="#C47F17" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-base text-[#5a4a3a] leading-relaxed mb-8 max-w-lg">
                            🌿 Hand-picked from India&apos;s finest spice gardens. Freshly ground, artisan-blended, and delivered straight to your door. Taste the difference of <strong>real purity</strong>.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-[#C47F17] hover:bg-[#a86c12] text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-[#C47F17]/30 hover:shadow-[#C47F17]/50 transition-all duration-300 hover:scale-105"
                            >
                                <i className="fa-solid fa-cart-shopping" />
                                Shop All Spices
                            </Link>
                            <Link
                                href="/category/gift-packs"
                                className="inline-flex items-center gap-2 border-2 border-[#8E562E] text-[#8E562E] px-7 py-3.5 rounded-full font-bold hover:bg-[#8E562E] hover:text-white transition-all duration-300"
                            >
                                🎁 Gift Sets
                            </Link>
                        </div>

                        <div className="flex gap-8 pt-8 border-t border-[#C47F17]/20">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <p className="text-2xl font-extrabold text-[#C47F17]">{s.value}</p>
                                    <p className="text-xs text-[#8E562E] font-medium mt-0.5">
                                        <i className={`fa-solid ${s.icon} mr-1`} />
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-[#C47F17]/20 to-[#8E562E]/10 flex items-center justify-center relative">
                            <div className="text-center" style={{ transform: `translateY(${floatY}px)`, transition: 'transform 0.1s ease-out' }}>
                                <div className="text-8xl lg:text-9xl">🌶️</div>
                                <p className="mt-3 text-[#C47F17] text-lg font-bold">Kashmiri Mirch</p>
                                <p className="text-xs text-[#8E562E]">Single-origin · Whole</p>
                            </div>

                            {/* Floating tags */}
                            <div className="absolute -top-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-2 text-center animate-float1">
                                <p className="text-xl">🟡</p>
                                <p className="text-xs font-bold text-[#2E2E2E]">Turmeric</p>
                                <p className="text-[10px] text-[#C47F17]">Pure Ground</p>
                            </div>

                            <div className="absolute bottom-0 -left-6 bg-white rounded-2xl shadow-lg px-4 py-2 text-center animate-float2">
                                <p className="text-xl">🟤</p>
                                <p className="text-xs font-bold text-[#2E2E2E]">Cinnamon</p>
                                <p className="text-[10px] text-[#C47F17]">Ceylon Grade</p>
                            </div>

                            <div className="absolute top-10 -left-8 bg-white rounded-2xl shadow-lg px-3 py-2">
                                <p className="text-xs font-bold text-green-600">
                                    <i className="fa-solid fa-circle-check mr-1" />FSSAI Certified
                                </p>
                                <p className="text-[10px] text-gray-400">Lab tested</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
