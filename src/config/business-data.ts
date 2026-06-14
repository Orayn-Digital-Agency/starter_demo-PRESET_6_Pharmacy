// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Artisan / Trade & Services
// (Covers: welders, carpenters, tilers, painters, AC technicians,
//  generator repairers, and general skilled tradespeople)
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
  businessName: "CraftPro Services",
  tagline:
    "Skilled trades done right. Welding, carpentry, tiling, and general construction works across Lagos.",
  phone: "+234 811 234 5678",
  whatsappNumber: "2348112345678",
  email: "craftproservices@gmail.com",
  address: "45 Oshodi-Apapa Expressway, Oshodi",
  city: "Lagos",
  category: "Artisan Services",
  industry: "Trade & Services",
  logoText: "CraftPro",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Get a Free Quote",

  about:
    "CraftPro Services is a Lagos-based skilled trades company with a team of experienced artisans covering welding, carpentry, tiling, painting, and building works. We have executed residential and commercial projects across Lagos for over 10 years. Our team does not cut corners — every job is inspected before we leave to ensure it meets our standard. Whether you need one task or a full renovation, we bring the same level of care and professionalism.",

  services: [
    {
      name: "Welding & Fabrication",
      description:
        "Steel gates, security doors, railings, window burglar-proofing, and custom metal fabrication. MIG, TIG, and arc welding available.",
      icon: "Flame",
    },
    {
      name: "Carpentry & Furniture",
      description:
        "Built-in wardrobes, kitchen cabinets, TV consoles, office furniture, and door installations. Quality wood and board work.",
      icon: "Hammer",
    },
    {
      name: "Tiling & Flooring",
      description:
        "Floor and wall tiling for bathrooms, kitchens, and living areas. Accurate laying, clean grouting, and professional finish.",
      icon: "Grid",
    },
    {
      name: "Painting & Plastering",
      description:
        "Interior and exterior painting, texture finishes, skim plastering, and wall crack repairs. Clean and careful workmanship.",
      icon: "Paintbrush",
    },
    {
      name: "AC Installation & Service",
      description:
        "Split unit and window AC installation, gas recharge, cleaning, and fault diagnosis for all major brands.",
      icon: "Wind",
    },
    {
      name: "General Building Works",
      description:
        "Renovation, extension, roofing repairs, concrete works, and general construction management for residential properties.",
      icon: "Building",
    },
  ],

  whyUs: [
    "10 years serving Lagos homes and businesses with quality trade work",
    "Vetted, experienced artisans — not casual day labourers",
    "All work inspected and signed off before project close",
    "Competitive pricing with clear quotes — no surprise charges",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "By appointment for urgent jobs" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85&auto=format&fit=crop",
      alt: "Artisan doing precise carpentry work",
    },
    {
      src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=85&auto=format&fit=crop",
      alt: "Professional tiling work on a bathroom floor",
    },
    {
      src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&q=85&auto=format&fit=crop",
      alt: "Welding fabrication work on steel gate",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9!2d3.3210!3d6.5536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f8000000001%3A0x0!2sOshodi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000007",
};

export default businessData;
