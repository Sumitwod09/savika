// ─── Savika Database Types ────────────────────────────────────────────────────

export type UserRole = 'customer' | 'admin'

export interface DbUser {
    id: string
    full_name: string
    email: string
    role: UserRole
    avatar_url?: string
    phone?: string
    created_at: string
}

export interface Category {
    id: string
    slug: string
    name: string
    description?: string
    image_url?: string
    created_at: string
}

export interface Product {
    id: string
    slug: string
    name: string
    description: string
    price: number
    sale_price?: number
    stock: number
    category_id: string
    category?: Category
    images: string[]
    weight_options?: string[] // e.g. ["50g","100g","250g","500g"]
    meta_title?: string
    meta_description?: string
    tags?: string[]
    is_featured: boolean
    is_active: boolean
    created_at: string
}

export type OrderStatus = 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export interface ShippingAddress {
    full_name: string
    phone: string
    address_line1: string
    address_line2?: string
    city: string
    state: string
    pincode: string
}

export interface Order {
    id: string
    user_id: string
    total_amount: number
    discount_amount?: number
    coupon_code?: string
    status: OrderStatus
    payment_status: PaymentStatus
    rzp_order_id?: string
    rzp_payment_id?: string
    shipping_address: ShippingAddress
    tracking_number?: string
    notes?: string
    created_at: string
    order_items?: OrderItem[]
}

export interface OrderItem {
    id: string
    order_id: string
    product_id: string
    product?: Product
    quantity: number
    price: number
    weight?: string
}

export interface WishlistItem {
    id: string
    user_id: string
    product_id: string
    product?: Product
    created_at: string
}

export interface Address {
    id: string
    user_id: string
    full_name: string
    phone: string
    address_line1: string
    address_line2?: string
    city: string
    state: string
    pincode: string
    is_default: boolean
}

export interface Coupon {
    id: string
    code: string
    discount_type: 'percentage' | 'flat'
    discount_value: number
    min_order_value?: number
    max_uses?: number
    used_count: number
    expires_at?: string
    is_active: boolean
}

// ─── Cart (Client-side) ───────────────────────────────────────────────────────

export interface CartItem {
    product_id: string
    product: Product
    quantity: number
    weight?: string
}
