"use client"

import * as React from "react"
import { ArrowDown, CheckCircle2, Flame, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react"

import { useCart } from "@/components/cart-context"
import { cn } from "@/lib/utils"

const TOTAL_FRAMES = 300

function getFramePath(index: number) {
  const clamped = Math.max(1, Math.min(TOTAL_FRAMES, index))
  const padded = String(clamped).padStart(3, "0")
  return `/skr%20classic/ezgif-frame-${padded}.jpg`
}

interface StoryBeat {
  id: string
  label: string
  range: [number, number]
  targetProgress: number
  eyebrow: string
  title: string
  tamil: string
  description: string
}

const STORY_BEATS: StoryBeat[] = [
  {
    id: "harvest",
    label: "01 · Harvest",
    range: [0, 0.24],
    targetProgress: 0.04,
    eyebrow: "CHIDAMBARAM HERITAGE · 100% HOMEMADE",
    title: "Handpicked Tender Veld Grape & Sun-Dried Spices",
    tamil: "இளம் பிரண்டை & பாரம்பரிய மசாலா",
    description:
      "Fresh green Pirandai shoots, whole Guntur red chillies, aged country tamarind, garlic, cumin & curry leaves—cleaned and prepped by hand.",
  },
  {
    id: "roast",
    label: "02 · Slow Roast",
    range: [0.24, 0.54],
    targetProgress: 0.36,
    eyebrow: "PURE CHEKKU GINGELLY OIL · COLD-PRESSED",
    title: "Slow-Cooked in Fiery Spices & Gingelly Oil",
    tamil: "சுத்தமான நல்லெண்ணெயில் வதக்கிய சுவை",
    description:
      "Infused in wooden-pressed sesame oil so every fibrous shoot softens cleanly, sealing bold aroma without throat irritation.",
  },
  {
    id: "pour",
    label: "03 · Jarred Hot",
    range: [0.54, 0.8],
    targetProgress: 0.62,
    eyebrow: "ZERO ARTIFICIAL PRESERVATIVES · RICH IN FIBER",
    title: "Rich, Velvety Thokku Poured Into Sterilized Glass",
    tamil: "ரசாயனங்கள் இல்லாத தூய வீட்டுத் தயாரிப்பு",
    description:
      "Slow-simmered to concentrate natural tang and gut-friendly fiber, bottled fresh in small batches right in Chidambaram.",
  },
  {
    id: "final",
    label: "04 · SKR Jar",
    range: [0.8, 1.01],
    targetProgress: 0.98,
    eyebrow: "SKR CLASSIC · SIGNATURE CHIDAMBARAM CHUTNEY",
    title: "Veld Grape Chutney — Ready for Your Table",
    tamil: "SKR கிளாசிக் பிரண்டை தொக்கு",
    description:
      "Good for digestion, rich in natural fiber, and unforgettable with steaming hot rice & ghee, crispy dosa, or curd rice.",
  },
]

export function HeroScrollSequence() {
  const { addItem } = useCart()
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const imagesRef = React.useRef<(HTMLImageElement | null)[]>(
    Array(TOTAL_FRAMES).fill(null)
  )
  const loadedMaskRef = React.useRef<boolean[]>(Array(TOTAL_FRAMES).fill(false))
  const targetFrameRef = React.useRef(0)
  const renderedFrameRef = React.useRef(0)
  const rafRef = React.useRef<number | null>(null)

  const [progress, setProgress] = React.useState(0)
  const [currentFrameDisplay, setCurrentFrameDisplay] = React.useState(1)
  const [loadedCount, setLoadedCount] = React.useState(0)

  const findClosestLoadedImage = React.useCallback((targetIdx: number) => {
    if (loadedMaskRef.current[targetIdx] && imagesRef.current[targetIdx]) {
      return imagesRef.current[targetIdx]
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const back = targetIdx - offset
      if (back >= 0 && loadedMaskRef.current[back] && imagesRef.current[back]) {
        return imagesRef.current[back]
      }
      const fwd = targetIdx + offset
      if (fwd < TOTAL_FRAMES && loadedMaskRef.current[fwd] && imagesRef.current[fwd]) {
        return imagesRef.current[fwd]
      }
    }
    return null
  }, [])

  const drawFrame = React.useCallback(
    (frameZeroIdx: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const clampedFloat = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameZeroIdx))
      const floorIdx = Math.floor(clampedFloat)
      const ceilIdx = Math.min(TOTAL_FRAMES - 1, floorIdx + 1)
      const rawFrac = clampedFloat - floorIdx
      // Smoothstep easing between adjacent frames for ultra-smooth visual flow
      const blendAlpha = rawFrac * rawFrac * (3 - 2 * rawFrac)

      const baseImg = findClosestLoadedImage(floorIdx)
      if (!baseImg) return
      const nextImg =
        blendAlpha > 0.015 && ceilIdx !== floorIdx
          ? imagesRef.current[ceilIdx]
          : null

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (width === 0 || height === 0) return

      const targetW = Math.floor(width * dpr)
      const targetH = Math.floor(height * dpr)
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
      }

      ctx.save()
      ctx.scale(dpr, dpr)

      // Deep roasted espresso backdrop
      ctx.fillStyle = "#090402"
      ctx.fillRect(0, 0, width, height)

      // Warm spice ambient glow behind the product stage
      const glow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.48,
        20,
        width * 0.5,
        height * 0.48,
        Math.max(width, height) * 0.58
      )
      glow.addColorStop(0, "rgba(217, 107, 31, 0.16)")
      glow.addColorStop(0.45, "rgba(166, 36, 27, 0.08)")
      glow.addColorStop(1, "rgba(9, 4, 2, 0)")
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      // Compute crisp, uncropped stage fit for 16:9 frames (640x360)
      const imgRatio = baseImg.naturalWidth / baseImg.naturalHeight || 16 / 9
      const viewportRatio = width / height

      let drawW: number
      let drawH: number

      if (viewportRatio > imgRatio) {
        drawH = Math.min(height * 0.86, 760)
        drawW = drawH * imgRatio
        if (drawW > width * 0.92) {
          drawW = width * 0.92
          drawH = drawW / imgRatio
        }
      } else {
        drawW = width * 0.96
        drawH = drawW / imgRatio
      }

      const offsetX = (width - drawW) / 2
      const offsetY = (height - drawH) / 2 - (width >= 768 ? 10 : 28)

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"

      // Draw base frame + smooth fractional optical cross-dissolve to next frame
      ctx.globalAlpha = 1
      ctx.drawImage(baseImg, offsetX, offsetY, drawW, drawH)

      if (nextImg && loadedMaskRef.current[ceilIdx]) {
        ctx.globalAlpha = blendAlpha
        ctx.drawImage(nextImg, offsetX, offsetY, drawW, drawH)
        ctx.globalAlpha = 1
      }

      // Soft feathered edge vignette so studio & wood edges melt seamlessly into #090402
      const edgeFadeLeft = ctx.createLinearGradient(offsetX, 0, offsetX + drawW * 0.16, 0)
      edgeFadeLeft.addColorStop(0, "rgba(9,4,2,0.98)")
      edgeFadeLeft.addColorStop(1, "rgba(9,4,2,0)")
      ctx.fillStyle = edgeFadeLeft
      ctx.fillRect(offsetX - 2, offsetY - 2, drawW * 0.17, drawH + 4)

      const edgeFadeRight = ctx.createLinearGradient(
        offsetX + drawW * 0.84,
        0,
        offsetX + drawW,
        0
      )
      edgeFadeRight.addColorStop(0, "rgba(9,4,2,0)")
      edgeFadeRight.addColorStop(1, "rgba(9,4,2,0.98)")
      ctx.fillStyle = edgeFadeRight
      ctx.fillRect(offsetX + drawW * 0.83, offsetY - 2, drawW * 0.18, drawH + 4)

      const edgeFadeTop = ctx.createLinearGradient(0, offsetY, 0, offsetY + drawH * 0.16)
      edgeFadeTop.addColorStop(0, "rgba(9,4,2,0.92)")
      edgeFadeTop.addColorStop(1, "rgba(9,4,2,0)")
      ctx.fillStyle = edgeFadeTop
      ctx.fillRect(offsetX - 2, offsetY - 2, drawW + 4, drawH * 0.17)

      const edgeFadeBottom = ctx.createLinearGradient(
        0,
        offsetY + drawH * 0.78,
        0,
        offsetY + drawH
      )
      edgeFadeBottom.addColorStop(0, "rgba(9,4,2,0)")
      edgeFadeBottom.addColorStop(1, "rgba(9,4,2,0.98)")
      ctx.fillStyle = edgeFadeBottom
      ctx.fillRect(offsetX - 2, offsetY + drawH * 0.78, drawW + 4, drawH * 0.24)

      ctx.restore()
    },
    [findClosestLoadedImage]
  )

  // Progressive frame preloader: Frame 1 instant -> milestone frames -> full 300 sequence
  React.useEffect(() => {
    let cancelled = false

    const loadSingleFrame = (zeroIndex: number) =>
      new Promise<void>((resolve) => {
        if (loadedMaskRef.current[zeroIndex]) {
          resolve()
          return
        }
        const img = new window.Image()
        img.decoding = "async"
        img.src = getFramePath(zeroIndex + 1)
        img.onload = () => {
          if (cancelled) return
          imagesRef.current[zeroIndex] = img
          loadedMaskRef.current[zeroIndex] = true
          setLoadedCount((c) => c + 1)
          if (zeroIndex === 0 || Math.abs(renderedFrameRef.current - zeroIndex) <= 2) {
            drawFrame(renderedFrameRef.current)
          }
          resolve()
        }
        img.onerror = () => resolve()
      })

    async function preloadAll() {
      // Wave 1: Frame 1 + every 10th frame + final frame 300
      await loadSingleFrame(0)
      const milestones: number[] = []
      for (let i = 9; i < TOTAL_FRAMES; i += 10) {
        milestones.push(i)
      }
      if (!milestones.includes(TOTAL_FRAMES - 1)) {
        milestones.push(TOTAL_FRAMES - 1)
      }
      await Promise.all(milestones.map(loadSingleFrame))

      // Wave 2: Stream remaining frames in smooth batches of 15
      const remaining: number[] = []
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (!loadedMaskRef.current[i]) remaining.push(i)
      }
      const batchSize = 15
      for (let i = 0; i < remaining.length; i += batchSize) {
        if (cancelled) return
        const batch = remaining.slice(i, i + batchSize)
        await Promise.all(batch.map(loadSingleFrame))
      }
    }

    preloadAll()

    return () => {
      cancelled = true
    }
  }, [drawFrame])

  // Smooth scroll listener + lerp animation loop
  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const computeScrollProgress = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight)
      const scrolled = Math.min(scrollableDistance, Math.max(0, -rect.top))
      const p = scrolled / scrollableDistance

      setProgress(p)
      targetFrameRef.current = p * (TOTAL_FRAMES - 1)
    }

    const tick = () => {
      const target = targetFrameRef.current
      const current = renderedFrameRef.current
      const diff = target - current

      if (prefersReducedMotion) {
        renderedFrameRef.current = target
        drawFrame(target)
        setCurrentFrameDisplay(Math.round(target) + 1)
      } else if (Math.abs(diff) > 0.015) {
        const next = current + diff * 0.11
        renderedFrameRef.current = next
        drawFrame(next)
        setCurrentFrameDisplay(Math.round(next) + 1)
      }

      rafRef.current = window.requestAnimationFrame(tick)
    }

    const handleResize = () => {
      computeScrollProgress()
      drawFrame(renderedFrameRef.current)
    }

    computeScrollProgress()
    drawFrame(0)
    rafRef.current = window.requestAnimationFrame(tick)

    window.addEventListener("scroll", computeScrollProgress, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", computeScrollProgress)
      window.removeEventListener("resize", handleResize)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [drawFrame])

  const scrollToProgress = (targetProgress: number) => {
    const section = sectionRef.current
    if (!section) return
    const scrollableDistance = section.offsetHeight - window.innerHeight
    const targetTop = section.offsetTop + scrollableDistance * targetProgress
    window.scrollTo({ top: targetTop, behavior: "smooth" })
  }

  const activeBeat =
    STORY_BEATS.find(
      (beat) => progress >= beat.range[0] && progress < beat.range[1]
    ) ?? STORY_BEATS[STORY_BEATS.length - 1]

  const isComplete = progress >= 0.88

  return (
    <section
      id="hero-sequence"
      ref={sectionRef}
      aria-label="SKR Classic Veld Grape Chutney transformation animation"
      className="relative h-[430vh] w-full bg-[#090402]"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 flex h-[100svh] w-full flex-col justify-between overflow-hidden pt-16">
        {/* Full-bleed Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* Ambient top & bottom contrast scrims for crisp typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#090402]/90 via-[#090402]/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#090402] via-[#090402]/75 to-transparent"
        />

        {/* Top Heritage Pill & Frame Telemetry */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-start justify-between px-4 pt-5 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#cfa03b]/35 bg-[#1a0b06]/80 px-3.5 py-1.5 text-xs font-medium text-[#f5d076] backdrop-blur-md">
            <span className="inline-block size-2 animate-pulse rounded-full bg-[#4ade80]" />
            <span>Chidambaram Kitchen Craft</span>
            <span className="text-white/30">·</span>
            <span className="font-tamil text-[#f9e7b2]">பிரண்டை தொக்கு</span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-[#1a0b06]/75 px-3.5 py-1.5 text-[11px] font-medium text-[#e9d8c0]/80 backdrop-blur-md sm:flex">
            <span>Frame</span>
            <span className="font-mono font-bold text-[#f5d076]">
              {String(currentFrameDisplay).padStart(3, "0")}
            </span>
            <span className="text-white/30">/</span>
            <span className="font-mono text-white/60">300</span>
            {loadedCount < TOTAL_FRAMES && (
              <span className="ml-1 text-[10px] text-[#df671e]">
                ({Math.round((loadedCount / TOTAL_FRAMES) * 100)}%)
              </span>
            )}
          </div>
        </div>

        {/* Bottom Narrative Overlay + Interactive Chapter Scrubber */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-8">
          <div className="grid items-end gap-6 lg:grid-cols-12">
            {/* Story Copy Block */}
            <div key={activeBeat.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#a6241b]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#fff6ea] uppercase shadow-lg shadow-[#a6241b]/30">
                <Flame className="size-3.5 text-[#fcd34d]" />
                {activeBeat.eyebrow}
              </div>

              <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#fff9f0] drop-shadow-md sm:text-4xl lg:text-5xl">
                {activeBeat.title}
              </h1>

              <p className="mt-1.5 font-tamil text-base font-semibold text-[#f5d076] sm:text-lg">
                {activeBeat.tamil}
              </p>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#e9d8c0]/90 sm:text-base">
                {activeBeat.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
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
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#a6241b] via-[#c63b1c] to-[#df671e] px-6 text-sm font-bold text-white shadow-lg shadow-[#a6241b]/35 transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
                >
                  <ShoppingBag className="size-4" />
                  Order 200g Jar · ₹180
                </button>

                <a
                  href="#spotlight"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 text-sm font-semibold text-[#fff9f0] backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  {isComplete ? (
                    <>
                      <CheckCircle2 className="size-4 text-[#4ade80]" />
                      Explore Sizes & Benefits
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4 text-[#f5d076]" />
                      Skip to Shop
                    </>
                  )}
                </a>
              </div>
            </div>

            {/* Right Chapter Progress & Scroll Cue */}
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#140805]/80 p-3.5 backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#f5d076]">
                    {isComplete
                      ? "Transformation Complete — Ready to Serve"
                      : "Scroll to Transform Ingredients"}
                  </span>
                  <span className="font-mono text-[#e9d8c0]/75">
                    {Math.round(progress * 100)}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2d5e36] via-[#cfa03b] to-[#df671e] transition-all duration-100"
                    style={{ width: `${Math.max(4, progress * 100)}%` }}
                  />
                </div>

                {/* Clickable Chapter Pills */}
                <div className="mt-3 grid grid-cols-4 gap-1.5">
                  {STORY_BEATS.map((beat) => {
                    const isActive = activeBeat.id === beat.id
                    return (
                      <button
                        key={beat.id}
                        type="button"
                        onClick={() => scrollToProgress(beat.targetProgress)}
                        className={cn(
                          "rounded-lg px-2 py-1.5 text-[11px] font-semibold transition-all cursor-pointer",
                          isActive
                            ? "bg-[#cfa03b] text-[#1c100b] shadow-sm"
                            : "bg-white/5 text-[#e9d8c0]/75 hover:bg-white/12 hover:text-white"
                        )}
                      >
                        {beat.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 text-xs text-[#e9d8c0]/75">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-[#4ade80]" />
                  Zero Artificial Preservatives · Pure Gingelly Oil
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#f5d076]">
                  <ArrowDown className="size-3.5 animate-bounce" />
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
