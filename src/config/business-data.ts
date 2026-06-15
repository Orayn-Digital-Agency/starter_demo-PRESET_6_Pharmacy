// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Salon / Beauty & Wellness
// ============================================================

export type Service = {
  name: string;
  description: string;
  icon?: string;
};

export type BusinessData = {
  businessName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string | null;
  address: string;
  city: string;
  category: string;
  industry: string;
  logoText: string;
  primaryColor?: string;
  accentColor?: string;
  ctaLabel: string;
  about: string;
  services: Service[];
  whyUs: string[];
  mapEmbedUrl: string;
  openingHours?: { day: string; hours: string }[];
  gallery?: { src: string; alt: string }[];
};

const businessData: BusinessData = {
  businessName: "Lumiere Beauty Studio",
  tagline:
    "Premium hair, skin, and nail services in a relaxed, professional environment. Where you leave looking and feeling your best.",
  phone: "+234 805 678 9012",
  whatsappNumber: "2348056789012",
  email: "bookings@lumierebeauty.ng",
  address: "5 Admiralty Way, Lekki Phase 1",
  city: "Lagos",
  category: "Salon",
  industry: "Beauty & Wellness",
  logoText: "Lumiere",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Book an Appointment",

  about:
    "Lumiere Beauty Studio has been Lagos's trusted name in premium beauty care for over 7 years. Our team of certified stylists and beauty professionals specialise in natural hair, protective styles, skin treatments, and nail art. We use only high-grade products and maintain strict hygiene standards so every visit feels like a treat, not just a routine.",

  services: [
    {
      name: "Hair Relaxing & Texturising",
      description:
        "Professional relaxer treatments, texturisers, and keratin straightening using premium salon-grade products for lasting results.",
      icon: "Sparkles",
    },
    {
      name: "Protective Styles",
      description:
        "Braids, twists, weaves, and crochet styles done with care. All hair types and lengths welcome.",
      icon: "Star",
    },
    {
      name: "Natural Hair Care",
      description:
        "Deep conditioning, steam treatments, wash-and-go sets, and twist-outs tailored to your curl pattern.",
      icon: "Leaf",
    },
    {
      name: "Facials & Skin Treatments",
      description:
        "Deep cleansing facials, brightening treatments, and hydration therapies for all skin tones and types.",
      icon: "Heart",
    },
    {
      name: "Manicure & Pedicure",
      description:
        "Classic and gel manicures, spa pedicures, nail art, and extensions. Impeccably clean tools, every time.",
      icon: "Gem",
    },
    {
      name: "Makeup & Bridal Beauty",
      description:
        "Professional makeup for events, photoshoots, and weddings. Airbrush and HD makeup available.",
      icon: "Camera",
    },
  ],

  whyUs: [
    "7 years of excellence in Lagos beauty care",
    "Certified stylists trained locally and internationally",
    "Strict hygiene protocols and premium product lines",
    "Relaxed, welcoming atmosphere — walk-ins accepted",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=85&auto=format&fit=crop",
      alt: "Professional hair styling at Lumiere Beauty Studio",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85&auto=format&fit=crop",
      alt: "Facial treatment in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85&auto=format&fit=crop",
      alt: "Nail art and manicure services",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4739!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53c7d4b0001%3A0x0!2sLekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000002",
};

export default businessData;
