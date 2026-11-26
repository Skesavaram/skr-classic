"use client"

import * as React from "react"
import Image from "next/image"
import {
  Check,
  Flame,
  HeartPulse,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react"

import { useCart } from "@/components/cart-context"
import { FLAGSHIP_VARIANTS, SKR_WHATSAPP_NUMBER } from "@/lib/products"
import { cn } from "@/lib/utils"

export function ProductSpotlight() {
  const { addItem } = useCart()
  const [selectedVariantId, setSelectedVariantId] = React.useState(
    FLAGSHIP_VARIANTS[0].id
  )
  const [quantity, setQuantity] = React.useState(1)
  const [viewMode, setViewMode] = React.useState<"jar" | "ingredients">("jar")

  const selectedVariant =
    FLAGSHIP_VARIANTS.find((v) => v.id === selectedVariantId) ??
    FLAGSHIP_VARIANTS[0]

  const savings = selectedVariant.mrp - selectedVariant.price

  const handleAddFlagship = () => {
    addItem(
      {
        id: selectedVariant.id,
        name: "SKR Classic Veld Grape Chutney",
        tamilName: "பிரண்டை தொக்கு",
        weight: selectedVariant.weight,
        price: selectedVariant.price,
        accentColor: "#2d5e36",
      },
      quantity
    )
  }

  const whatsappUrl = `https://wa.me/${SKR_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Vanakkam SKR Classic! I would like to order ${quantity}x Veld Grape Chutney (பிரண்டை தொக்கு) - ${selectedVariant.weight} (₹${selectedVariant.price * quantity}).`
  )}`

  return (
    <section
      id="spotlight"
      className="relative overflow-hidden border-t border-[#e5d4be] bg-[#fbf6ee] py-16 sm:py-24"
    >
      {/* Subtle warm radial accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 size-[420px] rounded-full bg-[#df671e]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 size-[380px] rounded-full bg-[#2d5e36]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#dfc9ad] bg-[#120704] p-4 shadow-2xl shadow-[#241009]/15 sm:p-6">
              {/* Toggle between Finished Jar & Raw Ingredients */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2d5e36] px-3 py-1 text-xs font-semibold text-[#ecfdf5]">
                  <MapPin className="size-3.5 text-[#cfa03b]" />
                  Handcrafted in Chidambaram
                </span>

                <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("jar")}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer",
                      viewMode === "jar"
                        ? "bg-[#cfa03b] text-[#1c100b]"
                        : "text-[#e9d8c0]/80 hover:text-white"
                    )}
                  >
                    Final Jar
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("ingredients")}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer",
                      viewMode === "ingredients"
                        ? "bg-[#cfa03b] text-[#1c100b]"
                        : "text-[#e9d8c0]/80 hover:text-white"
                    )}
                  >
                    Raw Harvest
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#090402]">
                <Image
                  src="/skr%20classic/ezgif-frame-300.jpg"
                  alt="SKR Classic Veld Grape Chutney (பிரண்டை தொக்கு) glass jar"
                  width={640}
                  height={360}
                  priority
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                    viewMode === "jar"
                      ? "scale-100 opacity-100"
                      : "scale-[1.04] opacity-0 pointer-events-none"
                  )}
                />
                <Image
                  src="/skr%20classic/ezgif-frame-001.jpg"
                  alt="Fresh Pirandai stems, red chillies, tamarind, garlic, cumin and curry leaves"
                  width={640}
                  height={360}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                    viewMode === "ingredients"
                      ? "scale-100 opacity-100"
                      : "scale-[1.04] opacity-0 pointer-events-none"
                  )}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(9,4,2,0.78)_100%)]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090402]/90 via-[#090402]/35 to-transparent p-4">
                  <p className="text-xs font-medium text-[#f5d076]">
                    {viewMode === "jar"
                      ? "Airtight glass jar · Sealed fresh in pure Chekku gingelly oil"
                      : "100% handpicked Pirandai, red chillies, aged tamarind, garlic & cumin"}
                  </p>
                </div>
              </div>

              {/* Quick Trust Chips */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5">
                  <p className="text-xs font-bold text-[#f5d076]">100%</p>
                  <p className="text-[11px] text-[#e9d8c0]/75">Homemade</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5">
                  <p className="text-xs font-bold text-[#4ade80]">Zero</p>
                  <p className="text-[11px] text-[#e9d8c0]/75">Preservatives</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5">
                  <p className="text-xs font-bold text-[#fb923c]">Cold-Pressed</p>
                  <p className="text-[11px] text-[#e9d8c0]/75">Gingelly Oil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Conversion Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a6241b]/20 bg-[#a6241b]/8 px-3.5 py-1 text-xs font-bold tracking-wider text-[#a6241b] uppercase">
              <Sparkles className="size-3.5 text-[#df671e]" />
              Flagship Chidambaram Specialty
            </div>

            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#1c100b] sm:text-4xl">
              SKR Classic Veld Grape Chutney
            </h2>
            <p className="mt-1 font-tamil text-xl font-bold text-[#2d5e36]">
              பிரண்டை தொக்கு · Traditional Pirandai Thokku
            </p>

            {/* Rating strip */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-[#d97706]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#1c100b]">4.9 / 5</span>
              <span className="text-[#6b4e3d]">
                Loved across Tamil Nadu & South India
              </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-[#4c3326]">
              Crafted in small home batches in Chidambaram using tender young{" "}
              <strong className="text-[#1c100b]">Veld Grape (Pirandai)</strong>{" "}
              stems, pure cold-pressed gingelly oil, sun-dried spices, and aged
              country tamarind. Smooth, tangy, and aromatic—designed to nourish
              digestion and elevate every everyday meal.
            </p>

            {/* Key Benefit Pills */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-2">
              {[
                { icon: HeartPulse, text: "Good for Digestion & Gut" },
                { icon: Sparkles, text: "Rich in Natural Fiber" },
                { icon: ShieldCheck, text: "Zero Artificial Preservatives" },
                { icon: Flame, text: "Pure Chekku Gingelly Oil" },
              ].map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-2 rounded-xl border border-[#e5d4be] bg-white px-3 py-2 text-xs font-semibold text-[#2b1810] shadow-2xs"
                  >
                    <Icon className="size-4 shrink-0 text-[#a6241b]" />
                    <span>{benefit.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Pack Size Selector */}
            <div className="mt-6">
              <label className="text-xs font-bold tracking-wider text-[#6b4e3d] uppercase">
                Choose Jar Size
              </label>
              <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {FLAGSHIP_VARIANTS.map((variant) => {
                  const selected = variant.id === selectedVariant.id
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={cn(
                        "relative flex flex-col items-start rounded-2xl border p-3 text-left transition-all cursor-pointer",
                        selected
                          ? "border-[#a6241b] bg-[#fff5eb] ring-2 ring-[#a6241b]/20 shadow-sm"
                          : "border-[#e5d4be] bg-white hover:border-[#cfa03b]"
                      )}
                    >
                      {variant.badge && (
                        <span className="mb-1.5 inline-flex rounded-full bg-[#a6241b] px-2 py-0.5 text-[10px] font-bold text-white">
                          {variant.badge}
                        </span>
                      )}
                      <span className="text-sm font-extrabold text-[#1c100b]">
                        {variant.weight}
                      </span>
                      <span className="text-[11px] text-[#6b4e3d]">
                        {variant.label}
                      </span>
                      <div className="mt-1.5 flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold text-[#a6241b]">
                          ₹{variant.price}
                        </span>
                        <span className="text-xs text-[#6b4e3d]/70 line-through">
                          ₹{variant.mrp}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Price + Quantity + CTA */}
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#e5d4be] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-extrabold text-[#1c100b]">
                    ₹{selectedVariant.price * quantity}
                  </span>
                  <span className="text-sm text-[#6b4e3d] line-through">
                    ₹{selectedVariant.mrp * quantity}
                  </span>
                  <span className="rounded-full bg-[#2d5e36]/12 px-2 py-0.5 text-xs font-bold text-[#2d5e36]">
                    Save ₹{savings * quantity}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-[#6b4e3d]">
                  <Check className="size-3.5 text-[#2d5e36]" />
                  Fresh batch packed in glass · Ships across India
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Stepper */}
                <div className="inline-flex h-11 items-center rounded-full border border-[#dfc9ad] bg-[#fbf6ee] px-1">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex size-8 items-center justify-center rounded-full text-[#4c3326] hover:bg-white cursor-pointer"
                  >
                    <Minus className="size-3.5" />
                  </button>
                  <span className="w-7 text-center text-sm font-bold text-[#1c100b]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex size-8 items-center justify-center rounded-full text-[#4c3326] hover:bg-white cursor-pointer"
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddFlagship}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a6241b] via-[#c43a1d] to-[#df671e] px-6 text-sm font-bold text-white shadow-lg shadow-[#a6241b]/25 transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
                >
                  <ShoppingBag className="size-4" />
                  Add to Order
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#6b4e3d]">
              <span>
                Best enjoyed with: <strong>Hot Rice + Ghee, Idli, Dosa, Curd Rice</strong>
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#2d5e36] underline-offset-4 hover:underline"
              >
                <MessageCircle className="size-3.5" />
                Quick Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
