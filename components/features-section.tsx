import { Award, ChefHat, Flame, ShieldCheck, UtensilsCrossed } from "lucide-react"

import { CORE_FEATURES } from "@/lib/products"

const PAIRINGS = [
  {
    dish: "Hot Steamed Rice + Nattu Ghee",
    tamil: "சுடச்சுட சாதம் + நெய்",
    note: "A teaspoon of Pirandai Thokku melted into warm ghee & rice.",
  },
  {
    dish: "Crispy Roast Dosa & Idli",
    tamil: "மொறுமொறு தோசை & இட்லி",
    note: "Tangy, spicy companion that elevates everyday tiffin.",
  },
  {
    dish: "Chilled Curd Rice",
    tamil: "தயிர் சாதம்",
    note: "Fiery contrast against creamy curd rice for lunchboxes.",
  },
  {
    dish: "Phulka, Chapathi & Adai",
    tamil: "சப்பாத்தி & அடை",
    note: "Spreads effortlessly as a savory spiced chutney layer.",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-t border-[#e5d4be] bg-[#f4eadb] bg-spice-grain py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cfa03b]/45 bg-[#fffaf3] px-3.5 py-1 text-xs font-bold tracking-wider text-[#8c5a12] uppercase">
            <Award className="size-3.5 text-[#cfa03b]" />
            Why Choose SKR Classic
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#1c100b] sm:text-4xl">
            Chidambaram Kitchen Honesty in Every Spoon
          </h2>
          <p className="mt-3 text-base text-[#5a3e2e]">
            No industrial boilers. No chemical stabilizers. Just traditional
            South Indian slow-cooking crafted to bring authentic homemade
            warmth to your dining table.
          </p>
        </div>

        {/* 3 Core Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CORE_FEATURES.map((feature, index) => {
            const icons = [ChefHat, Flame, ShieldCheck]
            const Icon = icons[index % icons.length]
            return (
              <article
                key={feature.number}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#dfc9ad] bg-[#fffaf3] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cfa03b] hover:shadow-xl hover:shadow-[#9f231b]/8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a6241b] to-[#df671e] text-white shadow-md shadow-[#a6241b]/20">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-[#e5d4be] transition-colors group-hover:text-[#cfa03b]">
                      {feature.number}
                    </span>
                  </div>

                  <span className="mt-5 inline-block rounded-full bg-[#2d5e36]/10 px-3 py-1 text-[11px] font-bold tracking-wide text-[#2d5e36] uppercase">
                    {feature.badge}
                  </span>

                  <h3 className="mt-3 font-heading text-xl font-extrabold text-[#1c100b]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 font-tamil text-sm font-semibold text-[#a6241b]">
                    {feature.tamilTag}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#5a3e2e]">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#a6241b] via-[#df671e] to-[#cfa03b] transition-all duration-300 group-hover:w-full" />
              </article>
            )
          })}
        </div>

        {/* Serving & Pairing Banner */}
        <div className="mt-12 rounded-3xl border border-[#cfa03b]/40 bg-gradient-to-br from-[#241009] via-[#1c0c07] to-[#120704] p-6 text-[#fbf6ee] shadow-xl sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#cfa03b]/20 text-[#f5d076]">
                <UtensilsCrossed className="size-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#fff9f0]">
                  How Chidambaram Families Serve Pirandai Thokku
                </h3>
                <p className="text-xs text-[#e9d8c0]/75">
                  One jar transforms breakfast, lunch, and travel meals in seconds
                </p>
              </div>
            </div>
            <span className="font-tamil text-sm font-semibold text-[#f5d076]">
              தினசரி உணவுக்கு சுவையும் ஆரோக்கியமும்
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PAIRINGS.map((pair) => (
              <div
                key={pair.dish}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <p className="text-sm font-bold text-[#fff9f0]">{pair.dish}</p>
                <p className="mt-0.5 font-tamil text-xs font-semibold text-[#f5d076]">
                  {pair.tamil}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#e9d8c0]/80">
                  {pair.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
