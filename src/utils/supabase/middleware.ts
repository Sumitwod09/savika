import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request })

    // --- Build Supabase SSR client (session refresh) ---
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() { return request.cookies.getAll() },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // Refresh the session — MUST call before any routing logic
    const { data: { user } } = await supabase.auth.getUser()

    const pathname = request.nextUrl.pathname

    // ─────────────────────────────────────────────────────────
    // ADMIN ROUTE PROTECTION
    // /admin/login is public — anyone can visit it
    // All other /admin/* routes require role = admin | super_admin
    // ─────────────────────────────────────────────────────────
    if (pathname.startsWith('/admin')) {
        // Always allow /admin/login
        if (pathname === '/admin/login') {
            // If already logged in as admin, skip login page
            if (user) {
                const role = await getUserRole(user.id)
                if (role === 'admin' || role === 'super_admin') {
                    const url = request.nextUrl.clone()
                    url.pathname = '/admin/dashboard'
                    return NextResponse.redirect(url)
                }
            }
            return supabaseResponse
        }

        // Not logged in at all → send to admin login
        if (!user) {
            const url = request.nextUrl.clone()
            url.pathname = '/admin/login'
            return NextResponse.redirect(url)
        }

        // Logged in — check role
        const role = await getUserRole(user.id)
        if (role !== 'admin' && role !== 'super_admin') {
            // Regular customer tried to access admin → deny
            const url = request.nextUrl.clone()
            url.pathname = '/admin/login'
            url.searchParams.set('error', 'unauthorized')
            return NextResponse.redirect(url)
        }

        return supabaseResponse
    }

    // ─────────────────────────────────────────────────────────
    // CUSTOMER ACCOUNT ROUTE PROTECTION
    // ─────────────────────────────────────────────────────────
    if (pathname.startsWith('/account')) {
        if (!user) {
            const url = request.nextUrl.clone()
            url.pathname = '/auth/login'
            return NextResponse.redirect(url)
        }
        return supabaseResponse
    }

    return supabaseResponse
}

// ─── Helper: fetch role using service-role key (server-side only) ─────────────
async function getUserRole(userId: string): Promise<string> {
    try {
        const adminClient = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            { auth: { persistSession: false } }
        )
        const { data } = await adminClient
            .from('users')
            .select('role')
            .eq('id', userId)
            .single()
        return data?.role ?? 'customer'
    } catch {
        return 'customer'
    }
}
