const INSTAGRAM_POSTS = [
    { id: 1, icon: 'fa-pepper-hot', caption: '#KashmiriMirch', bg: '#FFF0E8', iconColor: '#C47F17' },
    { id: 2, icon: 'fa-mortar-pestle', caption: '#PureTurmeric', bg: '#FFFBEA', iconColor: '#E6B800' },
    { id: 3, icon: 'fa-jar', caption: '#GaramMasala', bg: '#FFF3E0', iconColor: '#D4562E' },
    { id: 4, icon: 'fa-seedling', caption: '#WholeSpices', bg: '#F5F5DC', iconColor: '#28A745' },
    { id: 5, icon: 'fa-gift', caption: '#SpiceGifts', bg: '#FFF0F3', iconColor: '#E91E8C' },
    { id: 6, icon: 'fa-star', caption: '#ExoticSpices', bg: '#F5F0FF', iconColor: '#9B59B6' },
]

export default function InstagramGrid() {
    return (
        <section className="py-14 bg-white dark:bg-[#111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-xs uppercase tracking-widest text-[#8E562E] dark:text-[#c4a87e] font-semibold mb-2">
                        <i className="fa-brands fa-instagram mr-1 text-[#C47F17]" />Follow @savika.in
                    </p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-extrabold text-[#2E2E2E] dark:text-white">
                        The <span className="text-[#C47F17] italic">Spice Kitchen</span> Gallery
                    </h2>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Tag us with #SavikaSpices for a feature!</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-3">
                    {INSTAGRAM_POSTS.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com/savika.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center hover:scale-[1.04] transition-transform duration-300 shadow-sm hover:shadow-lg"
                            style={{ backgroundColor: post.bg }}
                        >
                            <i className={`fa-solid ${post.icon} text-5xl group-hover:scale-110 transition-transform duration-300`} style={{ color: post.iconColor }} />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex flex-col items-end justify-start p-2">
                                <i className="fa-brands fa-instagram text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm drop-shadow-lg" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent py-2 px-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                <p className="text-white text-[10px] font-bold">{post.caption}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Follow CTA */}
                <div className="text-center mt-6">
                    <a
                        href="https://instagram.com/savika.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#C47F17] hover:text-[#a86c12] border border-[#C47F17]/30 rounded-full px-6 py-2.5 hover:bg-[#FFF0DC] dark:hover:bg-[#2a1800] transition-all"
                    >
                        <i className="fa-brands fa-instagram" />
                        Follow us on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
