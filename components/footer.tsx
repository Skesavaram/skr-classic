"use client"

import Image from "next/image"
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
} from "lucide-react"

import { useCart } from "@/components/cart-context"
import {
  SKR_DISPLAY_PHONE,
  SKR_PHONE_RAW,
  SKR_WHATSAPP_NUMBER,
} from "@/lib/products"

export function Footer() {
  const { addItem, openDrawer } = useCart()

  return (
    <footer className="relative overflow-hidden border-t border-[#cfa03b]/30 bg-[#120704] text-[#fbf6ee]">
      {/* Top Conversion CTA Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#7f1d1d] via-[#a6241b] to-[#c2410c]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1 text-xs font-bold tracking-wider text-[#fde68a] uppercase">
              <Sparkles className="size-3.5" />
              Fresh Chidambaram Batch Ready
            </span>
            <h2 className="mt-2.5 font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Bring Home Authentic SKR Classic{" "}
              <span className="font-tamil text-[#fde68a]">பிரண்டை தொக்கு</span>
            </h2>
            <p className="mt-1 text-sm text-white/85">
              Pure cold-pressed gingelly oil · Zero artificial preservatives ·
              Crafted fresh in Chidambaram
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() =>
                addItem({
                  id: "pirandai-200",
                  name: "SKR Classic Veld Grape Chutney",
                  tamilName: "பிரண்டை தொக்கு",
                  weight: "200g",
                  price: 180,
                  accentColor: "#2d5e36",
                })
              }
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#fff9f0] px-6 text-sm font-extrabold text-[#1c100b] shadow-xl transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <ShoppingBag className="size-4 text-[#a6241b]" />
              Order Now · ₹180
            </button>
            <button
              type="button"
              onClick={openDrawer}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-black/20 px-5 text-sm font-bold text-white backdrop-blur-xs transition-colors hover:bg-black/35 cursor-pointer"
            >
              View Order Bag
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/skr-classic-logo.png"
                alt="SKR Classic Logo"
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-full object-cover ring-2 ring-[#cfa03b]/80 shadow-md"
              />
              <div>
                <p className="font-heading text-xl font-extrabold tracking-wide text-white uppercase">
                  SKR Classic
                </p>
                <p className="font-tamil text-xs font-semibold text-[#f5d076]">
                  பிரண்டை தொக்கு · பாரம்பரிய சிதம்பரம் சுவை
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#e9d8c0]/80">
              Handcrafted homemade chutneys and pickles from the temple town of
              Chidambaram. Prepared with tender Veld Grape stems, pure Chekku
              gingelly oil, and heirloom Tamil spices—zero artificial
              preservatives, ever.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SKR Classic on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f5d076] transition-colors hover:border-[#cfa03b] hover:bg-[#cfa03b] hover:text-[#1c100b]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SKR Classic on YouTube"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f5d076] transition-colors hover:border-[#cfa03b] hover:bg-[#cfa03b] hover:text-[#1c100b]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${SKR_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with SKR Classic on WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#4ade80] transition-colors hover:border-[#4ade80] hover:bg-[#2d5e36] hover:text-white"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Pantry Links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold tracking-wider text-[#f5d076] uppercase">
              Our Kitchen Pantry
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#e9d8c0]/80">
              <li>
                <a href="#spotlight" className="hover:text-white">
                  Veld Grape Chutney (பிரண்டை தொக்கு)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Mango Pickle (மாங்காய் தொக்கு)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Garlic Pickle (பூண்டு தொக்கு)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Lemon Pickle (எலுமிச்சை ஊறுகாய்)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Tomato Chidambaram Thokku (தக்காளி தொக்கு)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h3 className="font-heading text-sm font-bold tracking-wider text-[#f5d076] uppercase">
              Chidambaram Kitchen & Orders
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e9d8c0]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#df671e]" />
                <span>
                  SKR Classic Homemade Foods, Near East Car Street,
                  Chidambaram, Cuddalore District, Tamil Nadu – 608001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-[#df671e]" />
                <a href={`tel:+91${SKR_PHONE_RAW}`} className="hover:text-white">
                  {SKR_DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-[#df671e]" />
                <a
                  href="mailto:orders@skrclassic.in"
                  className="hover:text-white"
                >
                  orders@skrclassic.in
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={openDrawer}
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-[#a6241b] to-[#df671e] px-5 text-xs font-bold text-white shadow-md transition-all hover:brightness-110 cursor-pointer"
            >
              <ShoppingBag className="size-3.5" />
              Order Fresh Pickles Now
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#e9d8c0]/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SKR Classic · Chidambaram, Tamil Nadu.
            All rights reserved.
          </p>
          <p>100% Homemade · Pure Gingelly Oil · Zero Artificial Preservatives</p>
        </div>
      </div>
    </footer>
  )
}
