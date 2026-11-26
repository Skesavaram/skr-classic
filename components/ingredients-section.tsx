"use client"

import * as React from "react"
import Image from "next/image"
import {
  CheckCircle2,
  Droplets,
  Flame,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react"

import {
  HERO_INGREDIENTS,
  PIRANDAI_HEALTH_PILLARS,
  type IngredientDetail,
} from "@/lib/products"
import { cn } from "@/lib/utils"

function IngredientIcon({
  iconName,
  className,
}: {
  iconName: IngredientDetail["iconName"]
  className?: string
}) {
  switch (iconName) {
    case "sprout":
      return <Sprout className={className} />
    case "droplets":
      return <Droplets className={className} />
    case "flame":
      return <Flame className={className} />
    case "sparkles":
      return <Sparkles className={className} />
    case "heart":
      return <Heart className={className} />
    case "leaf":
      return <Leaf className={className} />
  }
}

export function IngredientsSection() {
  const [activeId, setActiveId] = React.useState(HERO_INGREDIENTS[0].id)
  const activeIngredient =
    HERO_INGREDIENTS.find((item) => item.id === activeId) ??
    HERO_INGREDIENTS[0]

  return (
    <section
      id="ingredients"
      className="relative overflow-hidden border-t border-[#e5d4be] bg-[#160a06] py-16 text-[#fbf6ee] sm:py-24"
    >
      {/* Ambient spice & Pirandai glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2d5e36]/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 size-[380px] rounded-full bg-[#a6241b]/18 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#2d5e36]/40 px-3.5 py-1 text-xs font-bold tracking-wider text-[#bbf7d0] uppercase">
              <Sprout className="size-3.5 text-[#4ade80]" />
              Veld Grape (பிரண்டை) · Traditional Wellness
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#fff9f0] sm:text-4xl">
              Why Veld Grape (<span className="font-tamil text-[#f5d076]">பிரண்டை</span>) Is Tamil Nadu&apos;s Forgotten Superfood
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#e9d8c0]/85 sm:text-base lg:col-span-5">
            For centuries, Siddha kitchens in Chidambaram turned tender{" "}
            <em>Cissus quadrangularis</em> stems into tangy thokku—making daily
            digestive fiber, natural calcium, and joint support delicious.
          </p>
        </div>

        {/* 4 Core Health Benefits Strip */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PIRANDAI_HEALTH_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-xs transition-colors hover:border-[#cfa03b]/45 hover:bg-white/[0.07]"
            >
              <span className="inline-flex rounded-full bg-[#cfa03b]/20 px-2.5 py-0.5 text-[11px] font-bold text-[#f5d076]">
                {pillar.metric}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-[#fff9f0]">
                {pillar.title}
              </h3>
              <p className="mt-0.5 font-tamil text-xs font-semibold text-[#86efac]">
                {pillar.tamil}
              </p>
              <p className="mt-2.5 text-xs leading-relaxed text-[#e9d8c0]/80 sm:text-sm">
                {pillar.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Ingredient Breakdown */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Ingredient Selector Grid */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-bold tracking-wider text-[#f5d076] uppercase">
                Click Any Ingredient From Our Plate to Inspect
              </p>
              <span className="text-xs text-[#e9d8c0]/60">6 Pure Whole Foods</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {HERO_INGREDIENTS.map((item) => {
                const isSelected = item.id === activeIngredient.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      "flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all cursor-pointer",
                      isSelected
                        ? "border-[#cfa03b] bg-[#2a140c] shadow-lg shadow-black/30"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    )}
                  >
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                      style={{ backgroundColor: item.accent }}
                    >
                      <IngredientIcon iconName={item.iconName} className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-bold text-[#fff9f0]">
                        {item.name}
                      </p>
                      <p className="font-tamil text-xs font-semibold text-[#f5d076]">
                        {item.tamilName}
                      </p>
                      <p className="mt-1 text-[11px] text-[#e9d8c0]/70">
                        {item.role}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Active Ingredient Detail Card + Raw Plate Photo */}
          <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#cfa03b]/35 bg-[#23100a] p-6 shadow-2xl lg:col-span-5">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/skr%20classic/ezgif-frame-001.jpg"
                  alt="Raw Veld Grape stems, dried red chillies, tamarind, garlic, cumin and curry leaves"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(22,10,6,0.75)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#160a06]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-[#160a06]/85 px-3 py-1 text-xs font-semibold text-[#f5d076] backdrop-blur-sm">
                  <ShieldCheck className="size-3.5 text-[#4ade80]" />
                  100% Recognizable Kitchen Ingredients
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div
                  className="flex size-11 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: activeIngredient.accent }}
                >
                  <IngredientIcon
                    iconName={activeIngredient.iconName}
                    className="size-5"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-[#fff9f0]">
                    {activeIngredient.name}
                  </h3>
                  <p className="text-xs font-medium text-[#f5d076]">
                    <span className="font-tamil">{activeIngredient.tamilName}</span> ·{" "}
                    {activeIngredient.botanicalOrOrigin}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {activeIngredient.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-[#f3e6d3]/90"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#4ade80]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-xs text-[#e9d8c0]/80">
              <strong className="text-[#f5d076]">Clean Label Promise:</strong>{" "}
              Zero citric acid, zero synthetic vinegar, zero artificial colors,
              and zero Class II preservatives.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
