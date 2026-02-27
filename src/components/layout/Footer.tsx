'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
    shop: [
        { icon: 'fa-solid fa-pepper-hot', label: 'Whole Spices', href: '/category/whole-spices' },
        { icon: 'fa-solid fa-mortar-pestle', label: 'Ground & Powdered', href: '/category/ground-powdered' },
        { icon: 'fa-solid fa-jar', label: 'Blends & Masalas', href: '/category/blends-masalas' },
        { icon: 'fa-solid fa-gift', label: 'Gift Packs', href: '/category/gift-packs' },
        { icon: 'fa-solid fa-star', label: 'Exotics & Rare', href: '/category/exotics-rare' },
    ],
    help: [
        { icon: 'fa-solid fa-box', label: 'Track Your Order', href: '/track-order' },
        { icon: 'fa-solid fa-rotate-left', label: 'Return & Refund', href: '/returns' },
        { icon: 'fa-solid fa-truck', label: 'Shipping Policy', href: '/shipping' },
        { icon: 'fa-solid fa-circle-question', label: 'FAQ', href: '/faq' },
        { icon: 'fa-solid fa-phone', label: 'Contact Us', href: '/contact' },
    ],
    company: [
        { icon: 'fa-solid fa-leaf', label: 'Our Story', href: '/about' },
        { icon: 'fa-solid fa-trophy', label: 'Why Savika?', href: '/about#why' },
        { icon: 'fa-solid fa-handshake', label: 'Sourcing Promise', href: '/about#sourcing' },
        { icon: 'fa-solid fa-pen-nib', label: 'Blog', href: '/blog' },
        { icon: 'fa-solid fa-briefcase', label: 'Careers', href: '/careers' },
    ],
}

const trustBadges = [
    { icon: 'fa-solid fa-seedling', label: '100% Natural', sub: 'No artificial additives' },
    { icon: 'fa-solid fa-trophy', label: 'FSSAI Certified', sub: 'Safe & quality-tested' },
    { icon: 'fa-solid fa-truck', label: 'Pan-India Delivery', sub: '3–7 business days' },
    { icon: 'fa-solid fa-rotate-left', label: 'Easy Returns', sub: '7-day hassle-free' },
]

export default function Footer() {
    return (
        <footer className="bg-[#2C1A0E] text-white">
            {/* Newsletter Strip */}
            <div className="bg-[#C47F17] py-10 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-2xl font-extrabold text-white mb-1">
                        <i className="fa-solid fa-pepper-hot mr-2" />
                        Join the Spice Family!
                    </p>
                    <p className="text-sm text-white/80 mb-6">Get exclusive recipes, first access to new arrivals &amp; member-only deals.</p>
                    <form
                        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Your email address..."
                            className="flex-1 px-5 py-3 rounded-full text-[#2E2E2E] text-sm font-medium outline-none focus:ring-2 focus:ring-white"
                        />
                        <button
                            type="submit"
                            className="bg-[#2C1A0E] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-black transition-colors whitespace-nowrap"
                        >
                            <i className="fa-solid fa-paper-plane mr-2" />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center mb-5 bg-white rounded-[2rem] p-2 shadow-sm hover:scale-105 transition-transform">
                            <Image src="/logo.png" alt="Savika Logo" width={160} height={64} className="h-16 w-auto object-contain" />
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
                            Bringing the soul of India's spice heritage to your kitchen. Every gram, pure. Every blend, authentic.
                        </p>

                        {/* Contact */}
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <i className="fa-solid fa-location-dot text-[#C47F17] w-4" />
                                <span>Savika Foods Pvt. Ltd., Mumbai, MH 400001</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <i className="fa-solid fa-phone text-[#C47F17] w-4" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <i className="fa-solid fa-envelope text-[#C47F17] w-4" />
                                <span>hello@savika.in</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3">
                            {[
                                { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
                                { icon: 'fa-brands fa-facebook-f', href: '#', label: 'Facebook' },
                                { icon: 'fa-brands fa-youtube', href: '#', label: 'YouTube' },
                                { icon: 'fa-brands fa-x-twitter', href: '#', label: 'Twitter' },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C47F17] flex items-center justify-center transition-all duration-200 hover:scale-110"
                                >
                                    <i className={`${s.icon} text-sm`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                            <i className="fa-solid fa-store text-[#C47F17] mr-2" />Shop
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.shop.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C47F17] transition-colors">
                                        <i className={`${l.icon} w-4 text-[#C47F17]/70`} />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                            <i className="fa-solid fa-circle-info text-[#C47F17] mr-2" />Help
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.help.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C47F17] transition-colors">
                                        <i className={`${l.icon} w-4 text-[#C47F17]/70`} />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                            <i className="fa-solid fa-building text-[#C47F17] mr-2" />Company
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C47F17] transition-colors">
                                        <i className={`${l.icon} w-4 text-[#C47F17]/70`} />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {trustBadges.map((badge) => (
                            <div key={badge.label} className="flex flex-col items-center gap-1.5 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#C47F17]/20 flex items-center justify-center transition-colors duration-200">
                                    <i className={`${badge.icon} text-2xl text-[#C47F17]`} />
                                </div>
                                <span className="text-xs font-bold text-white">{badge.label}</span>
                                <span className="text-[11px] text-gray-500">{badge.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-gray-500">
                <p>
                    &copy; {new Date().getFullYear()} Savika Foods Pvt. Ltd. All rights reserved. &nbsp;|&nbsp;
                    <Link href="/privacy" className="hover:text-[#C47F17]">Privacy Policy</Link> &nbsp;|&nbsp;
                    <Link href="/terms" className="hover:text-[#C47F17]">Terms of Service</Link>
                </p>
            </div>
        </footer>
    )
}
