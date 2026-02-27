'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'
import CartDrawer from '@/components/layout/CartDrawer'

// Fallback catalog for client-side search
const searchCatalog = [
    { name: 'Kashmiri Mirch (Whole)', slug: 'kashmiri-mirch-whole', cat: 'Whole Spices' },
    { name: 'Premium Turmeric Powder', slug: 'premium-turmeric-powder', cat: 'Ground & Powdered' },
    { name: 'Garam Masala Artisan Blend', slug: 'garam-masala-artisan', cat: 'Blends & Masalas' },
    { name: 'Green Cardamom (Elaichi)', slug: 'green-cardamom', cat: 'Whole Spices' },
    { name: 'Coriander Powder (Dhaniya)', slug: 'coriander-powder', cat: 'Ground & Powdered' },
    { name: 'Chai Masala Classic', slug: 'chai-masala', cat: 'Blends & Masalas' },
]


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
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const { itemCount, toggleCart } = useCartStore()
    const count = itemCount()
    const pathname = usePathname()
    const router = useRouter()

    const filteredSearch = searchQuery.trim() === '' ? [] : searchCatalog.filter(
        item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.cat.toLowerCase().includes(searchQuery.toLowerCase())
    )

    useEffect(() => {
        setIsSearchOpen(false)
        setSearchQuery('')
        setMobileOpen(false)
    }, [pathname])

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

            <header
                className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
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
                        <Link href="/" className="flex items-center gap-2 shrink-0 group">
                            <Image src="/logo.png" alt="Savika Logo" width={64} height={64} className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform" priority />
                            <div className="flex flex-col justify-center">
                                <span className="text-xl sm:text-2xl font-extrabold text-[#C47F17] tracking-tight leading-none mb-0.5">SAVIKA</span>
                                <span className="block text-[8px] sm:text-[9px] text-[#8E562E] uppercase tracking-[0.2em] leading-none">Premium Spices</span>
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
                            <button
                                aria-label="Search"
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2.5 rounded-xl hover:bg-[#FFF0DC] text-[#2E2E2E] hover:text-[#C47F17] transition-all"
                            >
                                <i className="fa-solid fa-magnifying-glass text-base" />
                            </button>
                            <Link href="/account/wishlist" aria-label="Wishlist" className="hidden sm:flex p-2.5 rounded-xl hover:bg-[#FFF0DC] text-[#2E2E2E] hover:text-[#C47F17] transition-all">
                                <i className="fa-regular fa-heart text-base" />
                            </Link>
                            <Link href="/account" aria-label="Account" className="hidden sm:flex p-2.5 rounded-xl hover:bg-[#FFF0DC] text-[#2E2E2E] hover:text-[#C47F17] transition-all">
                                <i className="fa-regular fa-user text-base" />
                            </Link>

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

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex justify-center items-start pt-20 px-4 transition-opacity">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fadeUp">
                        <div className="flex items-center border-b border-[#F0E8DC] px-4 py-3">
                            <i className="fa-solid fa-magnifying-glass text-[#8E562E] mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search for spices, blends, or categories..."
                                className="flex-1 bg-transparent border-none outline-none text-[#2E2E2E] text-lg font-medium placeholder:text-[#ccc]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="ml-3 p-2 text-[#8E562E] hover:text-[#C47F17] hover:bg-[#FFF0DC] rounded-xl transition-colors"
                            >
                                <i className="fa-solid fa-xmark text-lg" />
                            </button>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-[60vh] overflow-y-auto w-full">
                            {searchQuery.trim() !== '' ? (
                                filteredSearch.length > 0 ? (
                                    <div className="p-2">
                                        <p className="px-3 py-2 text-xs font-bold text-[#8E562E] uppercase tracking-wider">Products</p>
                                        {filteredSearch.map((item) => (
                                            <button
                                                key={item.slug}
                                                onClick={() => router.push(`/product/${item.slug}`)}
                                                className="w-full text-left flex items-center justify-between px-3 py-3 hover:bg-[#FFF0DC] rounded-xl transition-colors group"
                                            >
                                                <div>
                                                    <p className="font-semibold text-[#2E2E2E] group-hover:text-[#C47F17] transition-colors">{item.name}</p>
                                                    <p className="text-xs text-[#8E562E] mt-0.5">{item.cat}</p>
                                                </div>
                                                <i className="fa-solid fa-chevron-right text-xs text-[#ccc] group-hover:text-[#C47F17] transition-colors" />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="px-6 py-12 text-center text-[#8E562E]">
                                        <i className="fa-solid fa-leaf text-3xl mb-3 opacity-30" />
                                        <p>No products found for "{searchQuery}"</p>
                                    </div>
                                )
                            ) : (
                                <div className="px-6 py-10 text-center text-[#8E562E]">
                                    <p className="text-sm font-medium">Start typing to search our premium catalog...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <CartDrawer />
        </>
    )
}
