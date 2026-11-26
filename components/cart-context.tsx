"use client"

import * as React from "react"

export interface CartItem {
  id: string
  name: string
  tamilName: string
  weight: string
  price: number
  quantity: number
  accentColor: string
}

interface CartContextValue {
  items: CartItem[]
  isDrawerOpen: boolean
  totalCount: number
  subtotal: number
  openDrawer: () => void
  closeDrawer: () => void
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CartContext = React.createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([
    {
      id: "pirandai-200",
      name: "SKR Classic Veld Grape Chutney",
      tamilName: "பிரண்டை தொக்கு",
      weight: "200g",
      price: 180,
      quantity: 1,
      accentColor: "#2d5e36",
    },
  ])
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const openDrawer = React.useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = React.useCallback(() => setIsDrawerOpen(false), [])

  const addItem = React.useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((entry) => entry.id === item.id)
        if (existing) {
          return prev.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry
          )
        }
        return [...prev, { ...item, quantity }]
      })
      setIsDrawerOpen(true)
    },
    []
  )

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((entry) => entry.id !== id)
      }
      return prev.map((entry) =>
        entry.id === id ? { ...entry, quantity } : entry
      )
    })
  }, [])

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => prev.filter((entry) => entry.id !== id))
  }, [])

  const clearCart = React.useCallback(() => {
    setItems([])
  }, [])

  const totalCount = React.useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const subtotal = React.useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isDrawerOpen,
        totalCount,
        subtotal,
        openDrawer,
        closeDrawer,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = React.useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}
