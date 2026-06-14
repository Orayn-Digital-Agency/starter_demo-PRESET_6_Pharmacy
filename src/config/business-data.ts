// ============================================================
// ORAYN DEMO TEMPLATE — STARTER
// PRESET: Electrical Service / Trade & Services
// Replace businessName, phone, whatsappNumber, address, city,
// email, and mapEmbedUrl with the client's real data.
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
  businessName: "Bright Spark Electrical",
  tagline:
    "Fast, reliable electrical solutions for homes and businesses across Lagos.",
  phone: "+234 802 341 7890",
  whatsappNumber: "2348023417890",
  email: "hello@brightspark.ng",
  address: "14 Coker Road, Ilupeju",
  city: "Lagos",
  category: "Electrical Services",
  industry: "Trade & Services",
  logoText: "BrightSpark",
  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",
  ctaLabel: "Get a Free Quote",

  about:
    "Bright Spark Electrical has served Lagos homes and businesses for over 11 years. We are COREN-registered electricians specialising in residential wiring, commercial installations, solar inverter setup, and emergency fault repairs. Every job is done right the first time — no shortcuts, no hidden charges.",

  services: [
    {
      name: "Residential Wiring",
      description:
        "Full house wiring for new builds and complete rewiring of existing properties. Neat, code-compliant work guaranteed.",
      icon: "Home",
    },
    {
      name: "Fault Detection & Repair",
      description:
        "We diagnose and fix electrical faults fast — tripping breakers, dead sockets, flickering lights, and power surges.",
      icon: "Zap",
    },
    {
      name: "Solar & Inverter Installation",
      description:
        "Off-grid and hybrid solar systems for 24-hour power. We supply, install, and maintain all major inverter brands.",
      icon: "Sun",
    },
    {
      name: "Industrial & Commercial",
      description:
        "Three-phase installations, factory wiring, distribution board upgrades, and generator change-over panels.",
      icon: "Factory",
    },
    {
      name: "CCTV & Security Lighting",
      description:
        "Security camera installations and motion-sensor flood lighting for homes, offices, and warehouses.",
      icon: "ShieldCheck",
    },
    {
      name: "Maintenance Contracts",
      description:
        "Monthly or quarterly electrical maintenance plans for businesses. Priority response and discounted labour rates.",
      icon: "ClipboardCheck",
    },
  ],

  whyUs: [
    "11 years serving Lagos — hundreds of satisfied customers",
    "COREN-registered and fully insured engineers",
    "Same-day emergency response available 24/7",
    "Transparent pricing — no hidden charges ever",
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=85&auto=format&fit=crop",
      alt: "Electrician installing a distribution board",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
      alt: "Solar panel installation on rooftop",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop",
      alt: "Neat wiring work inside a commercial building",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.3604!3d6.5743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d58f3c5d6a7%3A0x0!2sIlupeju%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000000",
};

export default businessData;
