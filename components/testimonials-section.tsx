import { Quote, Star } from "lucide-react"

import { TESTIMONIALS } from "@/lib/products"

export function TestimonialsSection() {
  return (
    <section className="border-t border-[#e5d4be] bg-[#f4eadb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#fffaf3] px-3.5 py-1 text-xs font-bold tracking-wider text-[#a6241b] uppercase ring-1 ring-[#e5d4be]">
            Verified Pantry Favorites
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#1c100b] sm:text-4xl">
            Trusted by Families Across Tamil Nadu & Beyond
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <blockquote
              key={review.author}
              className="flex flex-col justify-between rounded-3xl border border-[#dfc9ad] bg-[#fffaf3] p-6 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#d97706]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="size-5 text-[#cfa03b]/60" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#3d261a]">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-6 border-t border-[#efe2d0] pt-4">
                <p className="font-heading text-sm font-bold text-[#1c100b]">
                  {review.author}
                </p>
                <p className="text-xs text-[#6b4e3d]">
                  {review.location} ·{" "}
                  <span className="font-semibold text-[#2d5e36]">
                    {review.item}
                  </span>
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
