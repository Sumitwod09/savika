'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch — only render after mount
    useEffect(() => setMounted(true), [])
    if (!mounted) return <div className="w-9 h-9" />

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#FFF0DC] dark:hover:bg-white/10 text-[#2E2E2E] dark:text-gray-300 hover:text-[#C47F17] transition-all"
        >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-base`} />
        </button>
    )
}
