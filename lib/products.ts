export interface ProductVariant {
  id: string
  label: string
  weight: string
  price: number
  mrp: number
  badge?: string
}

export interface ProductItem {
  id: string
  name: string
  tamilName: string
  subtitle: string
  description: string
  spiceLevel: "Mild" | "Medium" | "Fiery"
  highlight: string
  pairing: string
  accentGradient: string
  lidColor: string
  labelBg: string
  price: number
  mrp: number
  weight: string
  image?: string
  isFlagship?: boolean
}

export interface IngredientDetail {
  id: string
  name: string
  tamilName: string
  botanicalOrOrigin: string
  role: string
  benefits: string[]
  accent: string
  iconName: "sprout" | "droplets" | "flame" | "sparkles" | "heart" | "leaf"
}

export const SKR_PHONE_RAW = "8608001747"
export const SKR_WHATSAPP_NUMBER = "918608001747"
export const SKR_DISPLAY_PHONE = "+91 86080 01747"

export const FLAGSHIP_VARIANTS: ProductVariant[] = [
  {
    id: "pirandai-200",
    label: "Starter Glass Jar",
    weight: "200g",
    price: 180,
    mrp: 220,
    badge: "Starter Favorite",
  },
  {
    id: "pirandai-400",
    label: "Family Heritage Jar",
    weight: "400g",
    price: 340,
    mrp: 400,
    badge: "Most Popular",
  },
  {
    id: "pirandai-duo",
    label: "Twin Value Pack (2 × 400g)",
    weight: "800g",
    price: 649,
    mrp: 800,
    badge: "Save ₹151",
  },
]

export const FLAGSHIP_PRODUCT: ProductItem = {
  id: "skr-pirandai-thokku",
  name: "SKR Classic Veld Grape Chutney",
  tamilName: "பிரண்டை தொக்கு",
  subtitle: "Flagship Chidambaram Heritage Recipe",
  description:
    "Slow-cooked tender Pirandai shoots infused in pure wood-pressed gingelly oil, sun-dried Guntur chillies, aged country tamarind, garlic, and roasted cumin. Zero artificial preservatives.",
  spiceLevel: "Medium",
  highlight: "Rich in Natural Fiber & Gut-Friendly",
  pairing: "Hot Steamed Rice + Ghee, Idli, Dosa, Curd Rice",
  accentGradient: "from-[#2d5e36] via-[#234b2b] to-[#17331d]",
  lidColor: "#1d4425",
  labelBg: "#3d7a3e",
  price: 180,
  mrp: 220,
  weight: "200g Glass Jar",
  image: "/skr%20classic/ezgif-frame-300.jpg",
  isFlagship: true,
}

export const OTHER_PRODUCTS: ProductItem[] = [
  {
    id: "skr-mango-pickle",
    name: "SKR Classic Mango Pickle",
    tamilName: "மாங்காய் தொக்கு / ஊறுகாய்",
    subtitle: "Sun-Cured Tangy Raw Mango",
    description:
      "Crisp hand-cut heirloom raw mangoes cured in rock salt and tempered with roasted fenugreek, cold-pressed gingelly oil, and fiery red chilli.",
    spiceLevel: "Fiery",
    highlight: "Sun-Cured · Pure Gingelly Oil",
    pairing: "Curd Rice, Pongal, Parotta & Dal Rice",
    accentGradient: "from-[#b45309] via-[#92400e] to-[#78350f]",
    lidColor: "#9a3412",
    labelBg: "#d97706",
    price: 249,
    mrp: 290,
    weight: "300g Glass Jar",
  },
  {
    id: "skr-garlic-pickle",
    name: "SKR Classic Garlic Pickle",
    tamilName: "பூண்டு தொக்கு",
    subtitle: "Whole Country Garlic in Spiced Gravy",
    description:
      "Plump, aromatic country garlic cloves slow-simmered in rich tamarind reduction, roasted spices, and generous pure sesame oil until melt-in-mouth tender.",
    spiceLevel: "Medium",
    highlight: "Heart-Healthy · Rich Aroma",
    pairing: "Idli, Dosa, Chapathi & Steamed Rice",
    accentGradient: "from-[#9f231b] via-[#7f1d1d] to-[#5b1111]",
    lidColor: "#7f1d1d",
    labelBg: "#b91c1c",
    price: 269,
    mrp: 310,
    weight: "300g Glass Jar",
  },
  {
    id: "skr-lemon-pickle",
    name: "SKR Classic Lemon Pickle",
    tamilName: "எலுமிச்சை ஊறுகாய்",
    subtitle: "Traditional Sun-Matured Citron",
    description:
      "Juicy thin-skinned country lemons naturally aged in earthen jars with turmeric and sea salt, then finished with aromatic South Indian tempering.",
    spiceLevel: "Mild",
    highlight: "Digestive Zest · Aged 21 Days",
    pairing: "Curd Rice, Khichdi, Upma & Travel Meals",
    accentGradient: "from-[#ca8a04] via-[#a16207] to-[#713f12]",
    lidColor: "#854d0e",
    labelBg: "#eab308",
    price: 229,
    mrp: 270,
    weight: "300g Glass Jar",
  },
  {
    id: "skr-tomato-thokku",
    name: "SKR Classic Tomato Chidambaram Thokku",
    tamilName: "தக்காளி தொக்கு",
    subtitle: "Chidambaram Signature Slow-Reduced",
    description:
      "Vine-ripened country tomatoes slowly reduced in wide cast-iron pans with mustard, asafoetida, red chillies, and pure gingelly oil.",
    spiceLevel: "Medium",
    highlight: "Chidambaram Kitchen Classic",
    pairing: "Crisp Dosa, Adai, Chapathi & Rice",
    accentGradient: "from-[#c2410c] via-[#9a3412] to-[#7c2d12]",
    lidColor: "#9a3412",
    labelBg: "#ea580c",
    price: 239,
    mrp: 280,
    weight: "300g Glass Jar",
  },
]

export const CORE_FEATURES = [
  {
    number: "01",
    title: "100% Homemade in Chidambaram",
    tamilTag: "பாரம்பரிய கைப்பக்குவம்",
    description:
      "Every batch is lovingly hand-trimmed, cleaned, and slow-cooked in small home-kitchen batches in Chidambaram—never mass-extruded in automated factories.",
    badge: "Small-Batch Craft",
  },
  {
    number: "02",
    title: "Traditional Ancestral Recipe",
    tamilTag: "தலைமுறை சுவை",
    description:
      "Guided by time-honored Tamil culinary proportions that balance the earthy vitality of Pirandai with aged tamarind so there is zero throat irritation.",
    badge: "Authentic Heritage",
  },
  {
    number: "03",
    title: "Pure Handpicked Ingredients",
    tamilTag: "சுத்தமான நல்லெண்ணெய்",
    description:
      "Only young, tender green Veld Grape shoots, pure cold-pressed Chekku gingelly oil, unbleached rock salt, and sun-dried whole spices enter our jars.",
    badge: "Zero Preservatives",
  },
]

export const PIRANDAI_HEALTH_PILLARS = [
  {
    title: "Good for Digestion",
    tamil: "செரிமான ஆரோக்கியம்",
    summary:
      "Naturally stimulates digestive enzymes, relieves bloating, and supports healthy appetite and gut comfort after rich meals.",
    metric: "Gut Wellness",
  },
  {
    title: "Rich in Dietary Fiber",
    tamil: "நார்ச்சத்து நிறைந்தது",
    summary:
      "Young Pirandai stems pack natural soluble and insoluble fiber that promotes smooth bowel regularity and lasting satiety.",
    metric: "High Fiber",
  },
  {
    title: "Traditional Bone & Joint Vitality",
    tamil: "எலும்பு மற்றும் மூட்டு வலிமை",
    summary:
      "Revered in Siddha & Ayurveda as 'Asthisamharaka' (bone-strengthener), prized across South Indian homes for active joints.",
    metric: "Siddha Superfood",
  },
  {
    title: "Zero Artificial Preservatives",
    tamil: "செயற்கை ரசாயனங்கள் இல்லை",
    summary:
      "Naturally preserved for months using generous pure gingelly oil, aged tamarind acidity, and slow moisture evaporation.",
    metric: "100% Clean Label",
  },
]

export const HERO_INGREDIENTS: IngredientDetail[] = [
  {
    id: "veld-grape",
    name: "Tender Veld Grape Stems",
    tamilName: "இளம் பிரண்டை",
    botanicalOrOrigin: "Cissus quadrangularis · Handpicked",
    role: "The Hero Superfood Base",
    benefits: [
      "Rich in plant fiber, calcium & vitamin C",
      "Supports healthy digestion & metabolism",
      "Traditional South Indian bone & joint tonic",
    ],
    accent: "#2d5e36",
    iconName: "sprout",
  },
  {
    id: "gingelly-oil",
    name: "Pure Chekku Gingelly Oil",
    tamilName: "சுத்தமான நல்லெண்ணெய்",
    botanicalOrOrigin: "Cold Wood-Pressed Sesame",
    role: "Natural Preservative & Aroma",
    benefits: [
      "Seals freshness naturally without chemicals",
      "Rich in heart-friendly sesamol antioxidants",
      "Deepens roasted spice aroma & shelf life",
    ],
    accent: "#c68b2c",
    iconName: "droplets",
  },
  {
    id: "red-chilli",
    name: "Sun-Dried Red Chillies",
    tamilName: "வத்தல் மிளகாய்",
    botanicalOrOrigin: "Whole Sun-Cured Pods",
    role: "Warmth & Crimson Color",
    benefits: [
      "Zero synthetic food dyes or chilli extracts",
      "Natural capsaicin boosts digestive warmth",
      "Balanced spice heat suitable for daily meals",
    ],
    accent: "#a6241b",
    iconName: "flame",
  },
  {
    id: "tamarind",
    name: "Aged Country Tamarind",
    tamilName: "பழைய புளி",
    botanicalOrOrigin: "Desi Tamarind Pulp",
    role: "Tangy Balance & Gut Aid",
    benefits: [
      "Neutralizes Pirandai's natural oxalates cleanly",
      "Provides crisp tang & natural preservation",
      "Rich in tartaric antioxidants & minerals",
    ],
    accent: "#7c3f18",
    iconName: "sparkles",
  },
  {
    id: "garlic-cumin",
    name: "Country Garlic & Cumin",
    tamilName: "பூண்டு & சீரகம்",
    botanicalOrOrigin: "Aromatic Tempering Core",
    role: "Carminative Flavor Depth",
    benefits: [
      "Cumin (Jeera) soothes acidity & gas",
      "Garlic adds natural prebiotic nourishment",
      "Creates unmistakable homestyle fragrance",
    ],
    accent: "#b45309",
    iconName: "heart",
  },
  {
    id: "curry-leaves",
    name: "Fresh Curry Leaves",
    tamilName: "கறிவேப்பிலை",
    botanicalOrOrigin: "Farm-Fresh Tempering",
    role: "Finishing Herbal Lift",
    benefits: [
      "Packed with natural iron & phytonutrients",
      "Adds crisp herbal finish in hot gingelly oil",
      "Complements steamed rice & ghee effortlessly",
    ],
    accent: "#3f6212",
    iconName: "leaf",
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "Tastes just like my grandmother's Pirandai Thokku from Chidambaram—no harsh throat scratch at all, only rich gingelly oil and tangy roasted spice.",
    author: "Meenakshi Sundaram",
    location: "Chennai",
    item: "Veld Grape Chutney · 400g",
  },
  {
    quote:
      "My parents take a spoonful with hot rice and ghee every afternoon for digestion. Knowing there are zero preservatives makes it a staple in our pantry.",
    author: "Karthik Raja",
    location: "Bengaluru",
    item: "Twin Value Pack + Garlic Pickle",
  },
  {
    quote:
      "Ordered the Pirandai Thokku along with Chidambaram Tomato Thokku and Mango Pickle. The aroma the moment you twist open the glass lid is unreal.",
    author: "Divya Natarajan",
    location: "Coimbatore",
    item: "Chidambaram Pantry Bundle",
  },
]
