import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Why Savika? | Savika Store',
    description: 'Learn why Savika is your trusted source for premium, pure Indian spices. No adulteration, zero preservatives, sourced ethically.',
}

export default function WhySavikaPage() {
    return (
        <div className="min-h-screen bg-[#F9F4EE]">
            {/* ──Hero Section── */}
            <div className="bg-[#2C1A0E] text-white py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-[#C47F17] font-bold tracking-[0.2em] text-sm uppercase">Our Philosophy</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[var(--font-poppins)] leading-tight">
                        Why Choose Savika?
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        In a market flooded with blended, adulterated, and mass-produced powders, Savika stands for purity, transparency, and tradition.
                    </p>
                </div>
            </div>

            {/* ──Core Pillars── */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    {/* Pillar 1 */}
                    <div className="bg-white p-8 rounded-3xl border border-[#e8ddd0] hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#F9F4EE] rounded-2xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-seedling text-2xl text-[#C47F17]"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">100% Pure & Unadulterated</h3>
                        <p className="text-gray-600 leading-relaxed font-[var(--font-poppins)]">
                            We never blend our spices with cheaper fillers or artificial colorants. What you see is exactly what is harvested. Every batch undergoes rigorous quality testing to ensure you receive spices in their most authentic form.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-white p-8 rounded-3xl border border-[#e8ddd0] hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#F9F4EE] rounded-2xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-mortar-pestle text-2xl text-[#C47F17]"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Stone-Ground Fresh</h3>
                        <p className="text-gray-600 leading-relaxed font-[var(--font-poppins)]">
                            Commercial grinding processes generate intense heat that burns away the delicate essential oils of spices. We use traditional cold-grinding methods to preserve the aromatic compounds, delivering an aroma you can instantly smell.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-white p-8 rounded-3xl border border-[#e8ddd0] hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#F9F4EE] rounded-2xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-handshake text-2xl text-[#C47F17]"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Direct & Ethical Sourcing</h3>
                        <p className="text-gray-600 leading-relaxed font-[var(--font-poppins)]">
                            We skip the middlemen and work directly with verified farmers across India's prime spice-growing regions. This ensures fair pricing for the creators and unparalleled traceability for your kitchen.
                        </p>
                    </div>

                    {/* Pillar 4 */}
                    <div className="bg-white p-8 rounded-3xl border border-[#e8ddd0] hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#F9F4EE] rounded-2xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-shield-halved text-2xl text-[#C47F17]"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">FSSAI Certified Safety</h3>
                        <p className="text-gray-600 leading-relaxed font-[var(--font-poppins)]">
                            Your family's health is our top priority. Every Savika product is FSSAI certified and tested stringently for pesticide residues and heavy metals, so you can cook with complete peace of mind.
                        </p>
                    </div>

                    {/* Pillar 5 */}
                    <div className="bg-white p-8 rounded-3xl border border-[#e8ddd0] hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-[#F9F4EE] rounded-2xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-truck-fast text-2xl text-[#C47F17]"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Delivered Fresh</h3>
                        <p className="text-gray-600 leading-relaxed font-[var(--font-poppins)]">
                            Stored in temperature-controlled environments and securely packaged to lock in freshness, our pan-India delivery ensures that the vibrant colors and rich aromas of India reach your doorstep intact.
                        </p>
                    </div>

                    {/* Pillar 6 */}
                    <div className="bg-[#C47F17] p-8 rounded-3xl border border-[#C47F17] hover:shadow-xl transition-shadow text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                            <i className="fa-regular fa-heart text-2xl text-white"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Crafted With Love</h3>
                        <p className="text-white/90 leading-relaxed font-[var(--font-poppins)]">
                            Spices are the soul of Indian cuisine. Our mission is to honor this heritage by providing you with the exact quality of spices that would have graced royal kitchens centuries ago.
                        </p>
                    </div>

                </div>
            </div>

            {/* ── Call To Action ── */}
            <div className="py-20 bg-white text-center px-4 border-t border-[#e8ddd0]">
                <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6 font-[var(--font-poppins)]">Ready to experience the Savika difference?</h2>
                <a href="/shop" className="inline-block bg-[#2C1A0E] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#C47F17] transition-all transform hover:scale-105">
                    Explore Our Collection
                </a>
            </div>
        </div>
    )
}
