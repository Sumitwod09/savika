const INSTAGRAM_POSTS = [
    { id: 1, emoji: '🌶️', caption: '#KashmiriMirch', bg: '#FFF0E8' },
    { id: 2, emoji: '🟡', caption: '#PureTurmeric', bg: '#FFFBEA' },
    { id: 3, emoji: '🔶', caption: '#GaramMasala', bg: '#FFF3E0' },
    { id: 4, emoji: '🌾', caption: '#WholeSpices', bg: '#F5F5DC' },
    { id: 5, emoji: '🎁', caption: '#SpiceGifts', bg: '#FFF0F3' },
    { id: 6, emoji: '✨', caption: '#ExoticSpices', bg: '#F5F0FF' },
]

export default function InstagramGrid() {
    return (
        <section className="py-14 bg-[#FFF8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-xs uppercase tracking-widest text-[#8E562E] font-semibold mb-2">
                        <i className="fa-brands fa-instagram mr-1 text-[#C47F17]" />Follow @savika.in
                    </p>
                    <h2 className="text-2xl font-extrabold text-[#2E2E2E]">
                        From Our <span className="text-[#C47F17]">Spice Kitchen</span> 📸
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">Tag us with #SavikaSpices for a feature!</p>
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
                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
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
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#C47F17] hover:text-[#a86c12] transition-colors border border-[#C47F17]/30 rounded-full px-6 py-2.5 hover:bg-[#FFF0DC]"
                    >
                        <i className="fa-brands fa-instagram" />
                        Follow us on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
