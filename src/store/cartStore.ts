import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '@/types/database'

interface CartStore {
    items: CartItem[]
    isOpen: boolean
    addItem: (product: Product, quantity?: number, weight?: string) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    toggleCart: () => void
    openCart: () => void
    closeCart: () => void
    total: () => number
    itemCount: () => number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product, quantity = 1, weight) => {
                set((state) => {
                    const existing = state.items.find(
                        (i) => i.product_id === product.id && i.weight === weight
                    )
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.product_id === product.id && i.weight === weight
                                    ? { ...i, quantity: i.quantity + quantity }
                                    : i
                            ),
                            isOpen: true,
                        }
                    }
                    return {
                        items: [
                            ...state.items,
                            { product_id: product.id, product, quantity, weight },
                        ],
                        isOpen: true,
                    }
                })
            },

            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((i) => i.product_id !== productId),
                }))
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId)
                    return
                }
                set((state) => ({
                    items: state.items.map((i) =>
                        i.product_id === productId ? { ...i, quantity } : i
                    ),
                }))
            },

            clearCart: () => set({ items: [] }),
            toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),

            total: () => {
                return get().items.reduce((sum, item) => {
                    const price = item.product.sale_price ?? item.product.price
                    return sum + price * item.quantity
                }, 0)
            },

            itemCount: () => {
                return get().items.reduce((sum, item) => sum + item.quantity, 0)
            },
        }),
        {
            name: 'savika-cart',
        }
    )
)
