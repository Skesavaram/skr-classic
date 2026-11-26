"use client"

import * as React from "react"
import {
  CheckCircle2,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react"

import { useCart } from "@/components/cart-context"
import { SKR_DISPLAY_PHONE, SKR_WHATSAPP_NUMBER } from "@/lib/products"

export function OrderDrawer() {
  const {
    items,
    isDrawerOpen,
    subtotal,
    closeDrawer,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart()

  const [customerName, setCustomerName] = React.useState("")
  const [customerPhone, setCustomerPhone] = React.useState("")
  const [customerCity, setCustomerCity] = React.useState("")
  const [orderSubmitted, setOrderSubmitted] = React.useState(false)

  if (!isDrawerOpen) return null

  const deliveryFee = subtotal >= 599 || subtotal === 0 ? 0 : 49
  const total = subtotal + deliveryFee

  const orderLines = items
    .map(
      (item) =>
        `• ${item.quantity}x ${item.name} (${item.weight}) - ₹${item.price * item.quantity}`
    )
    .join("\n")

  const whatsappHref = `https://wa.me/${SKR_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Vanakkam SKR Classic Chidambaram!\n\nOrder Summary:\n${orderLines}\n\nSubtotal: ₹${subtotal}\nCourier: ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}\nTotal: ₹${total}\n\nCustomer Name: ${customerName || "Customer"}\nMobile: ${customerPhone || "-"}\nDelivery City & Pincode: ${customerCity || "-"}`
  )}`

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    if (items.length === 0) return
    setOrderSubmitted(true)
    window.open(whatsappHref, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="SKR Classic Order Bag"
    >
      {/* Backdrop click */}
      <div className="flex-1" onClick={closeDrawer} aria-hidden="true" />

      <div className="flex h-full w-full max-w-md flex-col border-l border-[#dfc9ad] bg-[#fbf6ee] text-[#1c100b] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5d4be] bg-[#fffaf3] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-full bg-[#a6241b] text-white">
              <ShoppingBag className="size-4" />
            </div>
            <div>
              <h2 className="font-heading text-base font-extrabold">
                Your SKR Classic Order Bag
              </h2>
              <p className="text-[11px] text-[#6b4e3d]">
                Free shipping on orders ₹599+ · Packed fresh in Chidambaram
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close order bag"
            className="flex size-9 items-center justify-center rounded-full border border-[#dfc9ad] bg-white text-[#4c3326] hover:bg-[#f3e6d3] cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {orderSubmitted ? (
            <div className="my-8 rounded-3xl border border-[#2d5e36]/30 bg-[#ecfdf5] p-6 text-center">
              <CheckCircle2 className="mx-auto size-12 text-[#2d5e36]" />
              <h3 className="mt-3 font-heading text-xl font-extrabold text-[#14532d]">
                Order Request Received!
              </h3>
              <p className="mt-2 text-sm text-[#166534]">
                Thank you{customerName ? `, ${customerName}` : ""}! Your fresh
                Chidambaram batch order (₹{total}) has been prepared for{" "}
                <strong className="whitespace-nowrap">{SKR_DISPLAY_PHONE}</strong>.
                Send the WhatsApp message if it didn&apos;t open automatically.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#2d5e36] px-5 text-sm font-bold text-white hover:brightness-110"
                >
                  <MessageCircle className="size-4" />
                  Send Order to WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setOrderSubmitted(false)
                    clearCart()
                    closeDrawer()
                  }}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[#2d5e36]/30 bg-white px-4 text-xs font-semibold text-[#14532d] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="my-12 text-center">
              <Sparkles className="mx-auto size-10 text-[#cfa03b]" />
              <p className="mt-3 font-heading text-lg font-bold">
                Your pantry bag is empty
              </p>
              <p className="mt-1 text-sm text-[#6b4e3d]">
                Add our signature Veld Grape Chutney or traditional pickles to
                get started.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#e5d4be] bg-white p-3.5 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl text-[10px] font-extrabold text-white"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      SKR
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1c100b]">
                        {item.name}
                      </p>
                      <p className="font-tamil text-xs font-semibold text-[#a6241b]">
                        {item.tamilName} · {item.weight}
                      </p>
                      <p className="mt-0.5 text-xs font-bold text-[#2b1810]">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <div className="inline-flex items-center rounded-full border border-[#dfc9ad] bg-[#fbf6ee] px-1">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex size-6 items-center justify-center rounded-full hover:bg-white cursor-pointer"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex size-6 items-center justify-center rounded-full hover:bg-white cursor-pointer"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#6b4e3d] hover:text-[#a6241b] cursor-pointer"
                    >
                      <Trash2 className="size-3" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Quick Checkout Details */}
              <form
                id="quick-order-form"
                onSubmit={handleConfirm}
                className="mt-4 space-y-2.5 rounded-2xl border border-[#e5d4be] bg-[#fffaf3] p-4"
              >
                <p className="text-xs font-bold tracking-wider text-[#6b4e3d] uppercase">
                  Delivery Details
                </p>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Full Name"
                  className="h-10 w-full rounded-xl border border-[#dfc9ad] bg-white px-3 text-sm outline-none focus:border-[#a6241b]"
                />
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="WhatsApp / Mobile Number"
                  className="h-10 w-full rounded-xl border border-[#dfc9ad] bg-white px-3 text-sm outline-none focus:border-[#a6241b]"
                />
                <input
                  type="text"
                  required
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  placeholder="Delivery City & Pincode (e.g. Chennai 600001)"
                  className="h-10 w-full rounded-xl border border-[#dfc9ad] bg-white px-3 text-sm outline-none focus:border-[#a6241b]"
                />
              </form>
            </div>
          )}
        </div>

        {/* Footer Totals */}
        {!orderSubmitted && items.length > 0 && (
          <div className="border-t border-[#e5d4be] bg-[#fffaf3] p-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-[#5a3e2e]">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#5a3e2e]">
                <span>Courier Shipping</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="font-bold text-[#2d5e36]">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between border-t border-[#efe2d0] pt-2 text-base font-extrabold text-[#1c100b]">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                type="submit"
                form="quick-order-form"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a6241b] via-[#c43a1d] to-[#df671e] px-5 text-sm font-bold text-white shadow-lg shadow-[#a6241b]/25 transition-all hover:brightness-110 cursor-pointer"
              >
                <ShoppingBag className="size-4" />
                Place Order · ₹{total}
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-[#2d5e36]/30 bg-white px-4 text-xs font-bold text-[#2d5e36] hover:bg-[#ecfdf5]"
              >
                <MessageCircle className="size-4" />
                Order Directly via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
