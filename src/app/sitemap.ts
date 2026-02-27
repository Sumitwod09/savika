import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://savika.in'

// Fallback slugs used if DB is unavailable (dev mode / build time)
const FALLBACK_PRODUCTS = [
    'kashmiri-mirch-whole', 'premium-turmeric-powder', 'garam-masala-artisan',
    'malabar-black-pepper', 'star-anise-whole', 'coriander-powder',
    'biryani-masala', 'kashmiri-saffron',
]
const FALLBACK_CATEGORIES = [
    'whole-spices', 'ground-powdered', 'blends-masalas', 'gift-packs', 'exotics-rare',
]

async function getProductSlugs(): Promise<string[]> {
    return FALLBACK_PRODUCTS
}

async function getCategorySlugs(): Promise<string[]> {
    return FALLBACK_CATEGORIES
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [productSlugs, categorySlugs] = await Promise.all([
        getProductSlugs(),
        getCategorySlugs(),
    ])

    const now = new Date()

    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
        { url: `${BASE_URL}/shop`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
        { url: `${BASE_URL}/track-order`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
        { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ]

    const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
        url: `${BASE_URL}/category/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
        url: `${BASE_URL}/product/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    return [...staticPages, ...categoryPages, ...productPages]
}
