"use client"

import { Flame, Plus, Sparkles } from "lucide-react"

import { useCart } from "@/components/cart-context"
import { OTHER_PRODUCTS, type ProductItem } from "@/lib/products"
import { cn } from "@/lib/utils"

function ArtisanJarIllustration({ product }: { product: ProductItem }) {
  return (
    <div
      className={cn(
        "relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br p-4",
        product.accentGradient
      )}
    >
      {/* Subtle decorative radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,244,214,0.22),transparent_65%)]"
      />

      {/* Handcrafted Glass Jar Visual */}
      <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:scale-105">
        {/* Lid */}
        <div
          className="h-4 w-24 rounded-t-md border-b-2 border-black/20 shadow-md"
          style={{ backgroundColor: product.lidColor }}
        >
          <div className="mx-auto mt-1 h-0.5 w-16 rounded-full bg-white/25" />
        </div>
        {/* Glass Neck */}
        <div className="h-2 w-20 bg-white/25 backdrop-blur-xs" />
        {/* Jar Body */}
        <div className="relative flex h-28 w-24 flex-col items-center justify-center overflow-hidden rounded-b-2xl rounded-t-lg border border-white/25 bg-black/35 shadow-xl">
          {/* Pickle texture inside top & bottom glass */}
          <div
            className="absolute inset-x-0 top-0 h-4 opacity-80"
            style={{ backgroundColor: product.lidColor }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-3 opacity-90"
            style={{ backgroundColor: product.lidColor }}
          />
          {/* Label */}
          <div
            className="relative z-10 flex w-full flex-col items-center px-2 py-2.5 text-center shadow-inner"
            style={{ backgroundColor: product.labelBg }}
          >
            <span className="text-[8px] font-extrabold tracking-widest text-white/95 uppercase">
              SKR CLASSIC
            </span>
            <span className="mt-0.5 font-tamil text-[11px] leading-tight font-bold text-[#fff9d6]">
              {product.tamilName.split("/")[0].trim()}
            </span>
            <span className="mt-0.5 text-[8px] font-semibold text-white/90">
              CHIDAMBARAM
            </span>
          </div>
        </div>
      </div>

      {/* Spice badge */}
      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold text-[#fde68a] backdrop-blur-sm">
        <Flame className="size-3 text-[#fb923c]" />
        {product.spiceLevel}
      </span>
    </div>
  )
}

export function OtherProductsSection() {
  const { addItem } = useCart()

  return (
    <section
      id="products"
      className="relative border-t border-[#e5d4be] bg-[#fbf6ee] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a6241b]/20 bg-[#a6241b]/8 px-3.5 py-1 text-xs font-bold tracking-wider text-[#a6241b] uppercase">
              <Sparkles className="size-3.5 text-[#df671e]" />
              More From Our Chidambaram Pantry
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#1c100b] sm:text-4xl">
              Traditional South Indian Pickles & Thokku
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#5a3e2e]">
            Pair your Veld Grape Chutney with our small-batch homemade Mango,
            Garlic, Lemon, and Chidambaram Tomato classics—all crafted with pure
            gingelly oil.
          </p>
        </div>

        {/* 4 Requested Products Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OTHER_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col justify-between rounded-3xl border border-[#e5d4be] bg-[#fffaf3] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cfa03b] hover:shadow-xl hover:shadow-[#241009]/10"
            >
              <div>
                <ArtisanJarIllustration product={product} />

                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#f3e6d3] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#6b4e3d] uppercase">
                    {product.highlight}
                  </span>

                  <h3 className="mt-2.5 font-heading text-lg font-extrabold leading-snug text-[#1c100b]">
                    {product.name}
                  </h3>

                  <p className="mt-0.5 font-tamil text-sm font-bold text-[#a6241b]">
                    {product.tamilName}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-[#5a3e2e]">
                    {product.description}
                  </p>

                  <p className="mt-2.5 text-[11px] font-medium text-[#6b4e3d]">
                    <span className="font-bold text-[#2b1810]">Pairs with:</span>{" "}
                    {product.pairing}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#efe2d0] pt-4">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-xl font-extrabold text-[#1c100b]">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-[#6b4e3d]/70 line-through">
                      ₹{product.mrp}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6b4e3d]">{product.weight}</p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      tamilName: product.tamilName,
                      weight: product.weight,
                      price: product.price,
                      accentColor: product.lidColor,
                    })
                  }
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#1c100b] px-4 text-xs font-bold text-[#fff9f0] transition-all hover:bg-[#a6241b] active:scale-[0.97] cursor-pointer"
                >
                  <Plus className="size-3.5" />
                  Add Jar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
