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
        <section className="py-14 bg-[#FFF8F0] dark:bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-xs uppercase tracking-widest text-[#8E562E] dark:text-[#c4a87e] font-semibold mb-2">
                        <i className="fa-brands fa-instagram mr-1 text-[#C47F17]" />Follow @savika.in
                    </p>
                    <h2 className="text-2xl font-extrabold text-[#2E2E2E] dark:text-white">
                        From Our <span className="text-[#C47F17]">Spice Kitchen</span>
                        <i className="fa-solid fa-camera ml-2 text-[#C47F17]" />
                    </h2>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Tag us with #SavikaSpices for a feature!</p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-3">
                    {INSTAGRAM_POSTS.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com/savika.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center hover:scale-[1.04] transition-transform duration-300 shadow-sm hover:shadow-xl"
                            style={{ backgroundColor: post.bg }}
                        >
                            <i
                                className={`fa-solid ${post.icon} text-4xl group-hover:scale-110 transition-transform duration-300`}
                                style={{ color: post.iconColor }}
                            />
                            <div className="absolute inset-0 bg-[#C47F17]/0 group-hover:bg-[#C47F17]/15 transition-colors duration-300 flex items-end p-2">
                                <span className="text-[10px] font-bold text-[#8E562E] opacity-0 group-hover:opacity-100 transition-opacity">
                                    {post.caption}
                                </span>
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <i className="fa-brands fa-instagram text-[#C47F17] text-sm" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <a
                        href="https://instagram.com/savika.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#C47F17] hover:text-[#a86c12] transition-colors border border-[#C47F17]/30 rounded-full px-6 py-2.5 hover:bg-[#FFF0DC] dark:hover:bg-[#2a1800]"
                    >
                        <i className="fa-brands fa-instagram" />
                        Follow us on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
