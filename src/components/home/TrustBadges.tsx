'use client'

const badges = [
    { icon: 'fa-leaf', text: '100% Natural', iconColor: '#28A745' },
    { icon: 'fa-award', text: 'FSSAI Certified', iconColor: '#C47F17' },
    { icon: 'fa-truck-fast', text: 'Pan-India Delivery', iconColor: '#007BFF' },
    { icon: 'fa-rotate-left', text: '7-Day Easy Returns', iconColor: '#DC3545' },
    { icon: 'fa-shield-halved', text: 'Secure Payments', iconColor: '#6F42C1' },
    { icon: 'fa-seedling', text: 'Vegan Friendly', iconColor: '#20C997' },
    { icon: 'fa-flask', text: 'Lab-Tested Quality', iconColor: '#0DCAF0' },
    { icon: 'fa-hand-holding-heart', text: 'Fair Trade Sourced', iconColor: '#E91E8C' },
]

// Duplicate for seamless loop
const all = [...badges, ...badges]

export default function TrustBadges() {
    return (
        <div className="bg-[#C47F17] overflow-hidden py-2.5">
            <div
                className="flex items-center whitespace-nowrap"
                style={{
                    animation: 'marquee 28s linear infinite',
                    width: 'max-content',
                }}
            >
                {all.map((b, i) => (
                    <span key={i} className="inline-flex items-center gap-2 text-white text-xs font-semibold px-6">
                        <i className={`fa-solid ${b.icon}`} style={{ color: 'rgba(255,255,255,0.8)' }} />
                        {b.text}
                        <span className="mx-2 opacity-40">|</span>
                    </span>
                ))}
            </div>
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}
