'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import CartDrawer from '@/components/layout/CartDrawer'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
    { label: 'Shop All', href: '/shop' },
    {
        label: 'Categories', href: '#',
        children: [
            { label: 'Whole Spices', href: '/category/whole-spices' },
            { label: 'Ground & Powdered', href: '/category/ground-powdered' },
            { label: 'Blends & Masalas', href: '/category/blends-masalas' },
            { label: 'Gift Packs', href: '/category/gift-packs' },
            { label: 'Exotics & Rare', href: '/category/exotics-rare' },
        ],
    },
    { label: 'Our Story', href: '/about' },
    { label: 'Why Savika', href: '/about#why' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const { itemCount, toggleCart } = useCartStore()
    const count = itemCount()

    useEffect(() => {
        const handler = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <>
            {/* Promo Bar */}
            <div className="bg-[#C47F17] text-white text-center text-xs py-2 px-4 tracking-wide font-medium">
                Free shipping on orders above ₹599 &nbsp;|&nbsp; 100% Pure &amp; Natural &nbsp;|&nbsp; Pan-India Delivery
            </div>

            {/* Header */}
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-[#FFF8F0]'
                    }`}
            >
                {/* Top social bar */}
                <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 py-1.5 border-b border-[#e8ddd0] text-xs text-[#8E562E]">
                    <span>India's Finest Spice Brand Since 2020</span>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-[#C47F17] transition-colors">
                            <i className="fa-brands fa-instagram mr-1" />Instagram
                        </a>
                        <a href="#" className="hover:text-[#C47F17] transition-colors">
                            <i className="fa-brands fa-facebook mr-1" />Facebook
                        </a>
                        <a href="#" className="hover:text-[#C47F17] transition-colors">
                            <i className="fa-brands fa-youtube mr-1" />YouTube
                        </a>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between gap-4">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 shrink-0">
                            <div>
                                <span className="text-xl font-extrabold text-[#C47F17] tracking-tight">Savika</span>
                                <span className="block text-[9px] text-[#8E562E] uppercase tracking-widest leading-tight">Premium Spices</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#2E2E2E] hover:text-[#C47F17] rounded-lg hover:bg-[#FFF0DC] transition-all duration-200"
                                    >
                                        {link.label}
                                        {link.children && <i className="fa-solid fa-chevron-down text-[10px] ml-0.5" />}
                                    </Link>
                                    {link.children && openDropdown === link.label && (
                                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-2xl border border-[#F0E8DC] py-2 z-50 animate-fadeIn">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm text-[#2E2E2E] hover:bg-[#FFF0DC] hover:text-[#C47F17] transition-colors font-medium"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Action Icons */}
                        <div className="flex items-center gap-1">
                            <button aria-label="Search" className="p-2.5 rounded-xl hover:bg-[#FFF0DC] dark:hover:bg-white/10 text-[#2E2E2E] dark:text-gray-300 hover:text-[#C47F17] transition-all">
                                <i className="fa-solid fa-magnifying-glass text-base" />
                            </button>
                            <Link href="/account/wishlist" aria-label="Wishlist" className="hidden sm:flex p-2.5 rounded-xl hover:bg-[#FFF0DC] dark:hover:bg-white/10 text-[#2E2E2E] dark:text-gray-300 hover:text-[#C47F17] transition-all">
                                <i className="fa-regular fa-heart text-base" />
                            </Link>
                            <Link href="/account" aria-label="Account" className="hidden sm:flex p-2.5 rounded-xl hover:bg-[#FFF0DC] dark:hover:bg-white/10 text-[#2E2E2E] dark:text-gray-300 hover:text-[#C47F17] transition-all">
                                <i className="fa-regular fa-user text-base" />
                            </Link>
                            <ThemeToggle />
                            <button
                                onClick={toggleCart}
                                aria-label="Open Cart"
                                className="relative p-2.5 rounded-xl hover:bg-[#FFF0DC] text-[#2E2E2E] hover:text-[#C47F17] transition-all"
                            >
                                <i className="fa-solid fa-bag-shopping text-base" />
                                {count > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 bg-[#C47F17] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                        {count}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                                className="lg:hidden p-2.5 rounded-xl hover:bg-[#FFF0DC] text-[#2E2E2E] transition-all"
                            >
                                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-base`} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileOpen && (
                        <div className="lg:hidden pb-4 border-t border-[#e8ddd0] mt-1 bg-[#FFF8F0]">
                            <div className="pt-3 space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-[#2E2E2E] hover:bg-[#FFF0DC] hover:text-[#C47F17] rounded-lg transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                        {link.children && (
                                            <div className="pl-8 space-y-0.5 mt-0.5">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block px-3 py-2 text-xs text-[#8E562E] hover:text-[#C47F17] transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-3 border-t border-[#e8ddd0] flex gap-4 px-3">
                                    <Link href="/account/wishlist" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5 text-sm text-[#2E2E2E] hover:text-[#C47F17]">
                                        <i className="fa-regular fa-heart" /> Wishlist
                                    </Link>
                                    <Link href="/account" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5 text-sm text-[#2E2E2E] hover:text-[#C47F17]">
                                        <i className="fa-regular fa-user" /> Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <CartDrawer />
        </>
    )
}
