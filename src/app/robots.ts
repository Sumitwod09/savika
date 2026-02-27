import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://savika.in'
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/shop', '/product/', '/category/', '/about', '/contact'],
                disallow: [
                    '/admin/',
                    '/account/',
                    '/cart',
                    '/checkout/',
                    '/auth/',
                    '/api/',
                    '/login',
                ],
            },
        ],
        sitemap: `${base}/sitemap.xml`,
        host: base,
    }
}
