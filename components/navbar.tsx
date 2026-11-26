"use client"

import * as React from "react"
import Image from "next/image"
import { MapPin, Menu, ShoppingBag, Sparkles, X } from "lucide-react"

import { useCart } from "@/components/cart-context"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "The Craft", href: "#spotlight" },
  { label: "Why SKR", href: "#features" },
  { label: "Pirandai Benefits", href: "#ingredients" },
  { label: "More Pickles", href: "#products" },
]

export function Navbar() {
  const { totalCount, openDrawer } = useCart()
  const [overHero, setOverHero] = React.useState(true)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById("hero-sequence")
      if (!heroEl) {
        setOverHero(window.scrollY < 400)
        return
      }
      const rect = heroEl.getBoundingClientRect()
      // Remain in dark atmospheric mode while sticky hero occupies the viewport
      setOverHero(rect.bottom > 110)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overHero
          ? "border-b border-white/10 bg-[#0d0503]/72 text-[#fbf6ee] backdrop-blur-md"
          : "border-b border-[#e5d4be] bg-[#fbf6ee]/92 text-[#1c100b] shadow-sm backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Mark */}
        <a
          href="#hero-sequence"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <Image
            src="/skr-classic-logo.png"
            alt="SKR Classic Logo"
            width={44}
            height={44}
            priority
            className="size-11 shrink-0 rounded-full object-cover ring-2 ring-[#cfa03b]/80 shadow-md transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-2">
              <span className="font-heading text-base font-extrabold tracking-wide uppercase sm:text-lg">
                SKR Classic
              </span>
              <span
                className={cn(
                  "hidden rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase sm:inline-flex items-center gap-1",
                  overHero
                    ? "bg-[#cfa03b]/20 text-[#f5d076]"
                    : "bg-[#a6241b]/10 text-[#a6241b]"
                )}
              >
                <MapPin className="size-2.5" />
                Chidambaram
              </span>
            </div>
            <span
              className={cn(
                "text-[11px] font-medium",
                overHero ? "text-[#e9d8c0]/80" : "text-[#6b4e3d]"
              )}
            >
              பிரண்டை தொக்கு · Homemade Heritage
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                overHero
                  ? "text-[#f3e6d3]/85 hover:text-[#f5d076]"
                  : "text-[#4c3326] hover:text-[#a6241b]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={openDrawer}
            aria-label="Open order bag"
            className={cn(
              "relative inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-sm font-semibold transition-all cursor-pointer",
              overHero
                ? "border-white/20 bg-white/10 text-white hover:bg-white/18"
                : "border-[#dfc9ad] bg-white text-[#1c100b] hover:border-[#a6241b]/40 hover:bg-[#fff6ea]"
            )}
          >
            <ShoppingBag className="size-4" />
            <span className="hidden sm:inline">Bag</span>
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#df671e] text-[11px] font-bold text-white">
              {totalCount}
            </span>
          </button>

          <a
            href="#spotlight"
            className="hidden sm:inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#a6241b] via-[#c43a1d] to-[#df671e] px-5 text-sm font-semibold text-white shadow-md shadow-[#a6241b]/25 transition-all hover:brightness-110 active:scale-[0.98]"
          >
            <Sparkles className="size-3.5" />
            Order Now
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border md:hidden cursor-pointer",
              overHero
                ? "border-white/20 bg-white/10 text-white"
                : "border-[#dfc9ad] bg-white text-[#1c100b]"
            )}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className={cn(
            "border-t px-4 py-4 md:hidden",
            overHero
              ? "border-white/10 bg-[#140805]/95 text-[#fbf6ee]"
              : "border-[#e5d4be] bg-[#fbf6ee]/98 text-[#1c100b]"
          )}
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-1.5 text-sm font-semibold transition-colors hover:bg-[#a6241b]/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#spotlight"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a6241b] to-[#df671e] px-5 text-sm font-semibold text-white"
            >
              Order Fresh Jar Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
