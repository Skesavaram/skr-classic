import { CartProvider } from "@/components/cart-context"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { HeroScrollSequence } from "@/components/hero-scroll-sequence"
import { IngredientsSection } from "@/components/ingredients-section"
import { Navbar } from "@/components/navbar"
import { OrderDrawer } from "@/components/order-drawer"
import { OtherProductsSection } from "@/components/other-products-section"
import { ProductSpotlight } from "@/components/product-spotlight"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#fbf6ee] text-[#1c100b]">
        <Navbar />
        <main>
          <HeroScrollSequence />
          <ProductSpotlight />
          <FeaturesSection />
          <IngredientsSection />
          <OtherProductsSection />
          <TestimonialsSection />
        </main>
        <Footer />
        <OrderDrawer />
      </div>
    </CartProvider>
  )
}
