"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  Home,
  Zap,
  Sun,
  Factory,
  ShieldCheck,
  ClipboardCheck,
  Scissors,
  Wrench,
  Hammer,
  Paintbrush,
  Truck,
  Briefcase,
  Heart,
  Star,
  Award,
  Leaf,
  Coffee,
  Utensils,
  BookOpen,
  Stethoscope,
  Scale,
  Cpu,
  Camera,
  Music,
  ShoppingBag,
  Package,
  Settings,
  Users,
  BarChart2,
  CheckCircle,
  TrendingUp,
  Quote,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import businessData from "@/config/business-data";

// ── Icon registry ─────────────────────────────────────────────────────────────
const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  Home,
  Zap,
  Sun,
  Factory,
  ShieldCheck,
  ClipboardCheck,
  Scissors,
  Wrench,
  Hammer,
  Paintbrush,
  Truck,
  Briefcase,
  Heart,
  Star,
  Award,
  Leaf,
  Coffee,
  Utensils,
  BookOpen,
  Stethoscope,
  Scale,
  Cpu,
  Camera,
  Music,
  ShoppingBag,
  Package,
  Settings,
  Users,
  BarChart2,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
};
function ServiceIcon({ name, size = 20 }: { name?: string; size?: number }) {
  const C = name ? ICON_MAP[name] : undefined;
  if (!C)
    return <CheckCircle size={size} style={{ color: "var(--color-accent)" }} />;
  return <C size={size} style={{ color: "var(--color-accent)" }} />;
}

// ── Easing ────────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// ── Static data ───────────────────────────────────────────────────────────────
const STATS = [
  { value: "11+", label: "Years in Business" },
  { value: "500+", label: "Clients Served" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "24/7", label: "Emergency Support" },
];

const TESTIMONIALS = [
  {
    quote:
      "Exceptional work from start to finish. They handled our entire office installation and finished two days ahead of schedule. Professional from first call to final handover.",
    author: "Adebayo O.",
    role: "Property Manager, Lagos",
  },
  {
    quote:
      "I have used their services three times now. The team is prompt, clean, and does not cut corners. Same-day response every time. Worth every kobo.",
    author: "Funmi A.",
    role: "Homeowner, Ilupeju",
  },
  {
    quote:
      "Fast response on an emergency fault. They arrived within two hours and had our office back up and running the same day. Will not use anyone else.",
    author: "Emeka C.",
    role: "Business Owner, Victoria Island",
  },
  {
    quote:
      "Our factory had a three-phase wiring problem that another contractor could not solve. These engineers found and fixed the fault within four hours. Outstanding.",
    author: "Chidi N.",
    role: "Factory Manager, Ikeja Industrial Estate",
  },
  {
    quote:
      "They installed our solar inverter system and it has been flawless for eight months. Honest pricing and they explained everything clearly. Highly recommended.",
    author: "Blessing T.",
    role: "Homeowner, Lekki",
  },
];

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  phone: string;
  message: string;
}

// ── Hero slideshow images — uses gallery or falls back to solid background ────
function HeroSlideshow({ images }: { images: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      5000,
    );
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[active].src}
            alt={images[active].alt}
            fill
            className="object-cover"
            priority={active === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      {/* Dark overlay so text is always readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(15,27,45,0.88) 0%, rgba(15,27,45,0.65) 55%, rgba(15,27,45,0.45) 100%)",
        }}
      />
      {/* Subtle gold tint at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background:
            "linear-gradient(to top, rgba(27,42,74,0.55), transparent)",
        }}
      />
      {/* Slide dots */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 24 : 7,
                height: 7,
                backgroundColor:
                  i === active
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Auto-scroll testimonials carousel ────────────────────────────────────────
function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), 4500);
    return () => clearInterval(id);
  }, [paused, count]);

  function prev() {
    setActive((i) => (i - 1 + count) % count);
  }
  function next() {
    setActive((i) => (i + 1) % count);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards — show 1 on mobile, 3 on desktop */}
      <div className="overflow-hidden">
        {/* Mobile: single card */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="p-7 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <TestimonialCard t={TESTIMONIALS[active]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: 3 visible, active is centred */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {[-1, 0, 1].map((offset) => {
            const idx = (active + offset + count) % count;
            const isCenter = offset === 0;
            return (
              <motion.div
                key={`${active}-${offset}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: Math.abs(offset) * 0.06,
                }}
                className="p-7 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: isCenter
                    ? "rgba(255,255,255,0.09)"
                    : "rgba(255,255,255,0.04)",
                  border: isCenter
                    ? "1px solid rgba(196,154,40,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
                  transform: isCenter ? "scale(1)" : "scale(0.97)",
                  opacity: isCenter ? 1 : 0.6,
                }}
              >
                <TestimonialCard t={TESTIMONIALS[idx]} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255,255,255,0.15)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255,255,255,0.08)")
          }
        >
          <ChevronLeft size={16} className="text-white" />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 7,
                height: 7,
                backgroundColor:
                  i === active
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255,255,255,0.15)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255,255,255,0.08)")
          }
        >
          <ChevronRight size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <>
      <Quote
        size={22}
        style={{ color: "var(--color-accent)", opacity: 0.8, marginBottom: 16 }}
        aria-hidden="true"
      />
      <p
        className="font-inter text-sm leading-[1.85]"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        {t.quote}
      </p>
      <div
        className="flex items-center gap-3 mt-6 pt-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-sora font-bold text-xs flex-shrink-0"
          style={{ backgroundColor: "var(--color-accent)", color: "#0F1B2D" }}
        >
          {t.author.charAt(0)}
        </div>
        <div>
          <p className="font-inter font-semibold text-sm text-white">
            {t.author}
          </p>
          <p
            className="font-inter text-xs mt-0.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {t.role}
          </p>
        </div>
      </div>
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function StarterPage() {
  const {
    businessName,
    tagline,
    phone,
    whatsappNumber,
    email,
    address,
    city,
    category,
    ctaLabel,
    about,
    services,
    whyUs,
    mapEmbedUrl,
    openingHours,
    gallery,
  } = businessData;

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const heroImages = gallery && gallery.length > 0 ? gallery : [];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSending(true);
    const msg = encodeURIComponent(
      `Hello, I found you through your website.\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`,
    );
    window.open(
      `https://wa.me/${whatsappNumber}?text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    );
    setTimeout(() => setSending(false), 1500);
  }

  return (
    <>
      <Nav />
      <main>
        {/* ── 1. HERO ────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ backgroundColor: "var(--color-primary)" }}
          aria-label="Hero"
        >
          {/* Background slideshow */}
          <HeroSlideshow images={heroImages} />

          {/* Fallback texture when no images */}
          {heroImages.length === 0 && (
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(196,154,40,0.16) 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44 w-full">
            <div className="max-w-2xl">
              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-[0.12em] border mb-7"
                  style={{
                    borderColor: "rgba(196,154,40,0.4)",
                    backgroundColor: "rgba(196,154,40,0.1)",
                    color: "var(--color-accent)",
                  }}
                >
                  <MapPin size={10} />
                  {category} &middot; {city}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
                className="font-sora font-bold text-white leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
              >
                {businessName}
              </motion.h1>

              {/* Gold underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.38 }}
                className="mt-3 h-[3px] w-16 origin-left rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                aria-hidden="true"
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                className="mt-6 font-inter text-lg md:text-xl leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {tagline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a href="#contact" className="btn-accent">
                  {ctaLabel}
                  <ArrowRight size={15} />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageSquare size={15} />
                  WhatsApp
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.52 }}
                className="mt-7 flex items-center gap-2"
              >
                <Phone size={13} style={{ color: "rgba(255,255,255,0.35)" }} />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="font-inter text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.9)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.45)")
                  }
                >
                  {phone}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 2. STATS BAND ──────────────────────────────────────────────── */}
        <section
          style={{ backgroundColor: "var(--color-accent)" }}
          aria-label="Key statistics"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={staggerItem}
                  className={`flex flex-col items-center justify-center py-9 px-4 text-center${i < 3 ? " stats-divider" : ""}`}
                >
                  <span
                    className="font-sora font-bold text-3xl md:text-[2.6rem] leading-none"
                    style={{ color: "#0F1B2D" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="mt-2 font-inter text-[11px] uppercase tracking-[0.12em] font-semibold"
                    style={{ color: "rgba(15,27,45,0.55)" }}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 3. WHY CHOOSE US ───────────────────────────────────────────── */}
        <section
          id="why-us"
          className="py-20 md:py-28"
          style={{ backgroundColor: "var(--color-surface)" }}
          aria-label="Why choose us"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <h2 className="section-heading">The difference you can feel</h2>
              <p className="overline mt-3">Why Choose Us</p>
              <p
                className="mt-5 font-inter text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                We have been doing this long enough to know what clients need —
                and what they should never have to deal with.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {whyUs.map((reason, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="group relative p-7 rounded-2xl bg-white"
                  style={{
                    boxShadow:
                      "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 12px 36px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className="absolute top-0 left-7 right-7 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "rgba(196,154,40,0.09)",
                      border: "1px solid rgba(196,154,40,0.16)",
                    }}
                  >
                    <span
                      className="font-sora font-bold text-xs"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p
                    className="font-inter text-sm leading-relaxed font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {reason}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 4. SERVICES ────────────────────────────────────────────────── */}
        <section
          id="services"
          className="py-20 md:py-28 bg-white"
          aria-label="Services"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="max-w-xl"
              >
                <h2 className="section-heading">Our services</h2>
                <p className="overline mt-3">What We Offer</p>
                <p
                  className="mt-5 font-inter text-lg leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Dependable {category.toLowerCase()} in {city}. Every job
                  handled with care, regardless of size.
                </p>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href="#contact" className="btn-accent flex-shrink-0">
                  {ctaLabel}
                  <ChevronRight size={15} />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`grid gap-4 ${services.length <= 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.name}
                  variants={staggerItem}
                  className="group relative p-7 rounded-2xl border bg-white transition-all duration-250 cursor-default"
                  style={{
                    borderColor: "rgba(0,0,0,0.06)",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.03)",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 44px rgba(0,0,0,0.09)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className="absolute left-0 top-7 bottom-7 w-[3px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                    style={{ backgroundColor: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(196,154,40,0.08)",
                        border: "1px solid rgba(196,154,40,0.14)",
                      }}
                    >
                      <ServiceIcon name={service.icon} size={19} />
                    </div>
                    <span
                      className="font-sora font-bold text-4xl leading-none"
                      style={{ color: "var(--color-primary)", opacity: 0.05 }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="font-sora font-semibold text-lg leading-snug"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="mt-2 font-inter text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {service.description}
                  </p>
                  <div
                    className="mt-5 flex items-center gap-1 font-inter text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <a href="#contact" className="hover:underline">
                      Enquire now
                    </a>
                    <ChevronRight size={12} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 5. ABOUT ───────────────────────────────────────────────────── */}
        <section
          id="about"
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-surface)" }}
          aria-label="About us"
        >
          {/* Decorative line */}
          <div
            className="absolute right-0 top-0 bottom-0 w-px pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(196,154,40,0.1), transparent)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mb-12"
            >
              <h2 className="section-heading">About {businessName}</h2>
              <p className="overline mt-3">About Us</p>
            </motion.div>

            {/* Two-column: text left, map + contact right */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Left: about text + contact cards (3/5) */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-3"
              >
                <p
                  className="font-inter text-lg leading-[1.85]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {about}
                </p>

                {/* Contact detail grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Address */}
                  <div
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white"
                    style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
                    >
                      <MapPin
                        size={16}
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-inter text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Address
                      </p>
                      <p
                        className="font-inter text-sm font-medium"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {address}, {city}, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white transition-shadow duration-200 hover:shadow-md"
                    style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
                    >
                      <Phone
                        size={16}
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-inter text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Phone
                      </p>
                      <p
                        className="font-inter text-sm font-medium"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {phone}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white transition-shadow duration-200 hover:shadow-md"
                      style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
                      >
                        <Mail
                          size={16}
                          style={{ color: "var(--color-accent)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="font-inter text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          Email
                        </p>
                        <p
                          className="font-inter text-sm font-medium"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {email}
                        </p>
                      </div>
                    </a>
                  )}

                  {/* Hours */}
                  {openingHours && openingHours.length > 0 && (
                    <div
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white"
                      style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
                      >
                        <Clock
                          size={16}
                          style={{ color: "var(--color-accent)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="font-inter text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          Opening Hours
                        </p>
                        {openingHours.map((h) => (
                          <p
                            key={h.day}
                            className="font-inter text-sm"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--color-text-primary)" }}
                            >
                              {h.day}:
                            </span>{" "}
                            {h.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Right: map (2/5) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 28 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.65, ease: EASE },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="lg:col-span-2 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div className="aspect-[3/4] lg:aspect-auto lg:h-full min-h-[400px] relative">
                  <iframe
                    src={mapEmbedUrl}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${businessName} location`}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 6. GALLERY ─────────────────────────────────────────────────── */}
        {gallery && gallery.length > 0 && (
          <section className="py-20 md:py-28 bg-white" aria-label="Gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="mb-12"
              >
                <h2 className="section-heading">A glimpse of what we do</h2>
                <p className="overline mt-3">Our Work</p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid gap-4"
                style={{
                  gridTemplateColumns:
                    gallery.length === 1
                      ? "1fr"
                      : gallery.length === 2
                        ? "1fr 1fr"
                        : "repeat(3, 1fr)",
                }}
              >
                {gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className={`group relative rounded-2xl overflow-hidden ${
                      gallery.length >= 3 && i === 0
                        ? "row-span-2 col-span-1"
                        : ""
                    }`}
                    style={{
                      aspectRatio:
                        gallery.length >= 3 && i === 0 ? "auto" : "4/3",
                      minHeight:
                        gallery.length >= 3 && i === 0 ? "520px" : "280px",
                      boxShadow: "0 4px 28px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,27,45,0.6), transparent 60%)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-inter text-sm text-white font-medium">
                        {img.alt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── 7. TESTIMONIALS ────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-primary)" }}
          aria-label="Testimonials"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(196,154,40,0.12) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background: `radial-gradient(circle, rgba(196,154,40,0.06) 0%, transparent 65%)`,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mb-12"
            >
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-white leading-tight">
                What our clients say
              </h2>
              <p
                className="overline mt-3"
                style={{ color: "var(--color-accent)" }}
              >
                Testimonials
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <TestimonialsCarousel />
            </motion.div>
          </div>
        </section>

        {/* ── 8. CONTACT ─────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-white"
          aria-label="Contact"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <h2 className="section-heading">Ready to get started?</h2>
                <p className="overline mt-3">Get in Touch</p>
                <p
                  className="mt-5 font-inter text-lg leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Send us a message and we will respond within the hour. No
                  commitment required.
                </p>

                <div className="flex flex-col gap-4 mt-8 mb-8">
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <Phone
                        size={16}
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <span
                      className="font-inter text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {phone}
                    </span>
                  </a>
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-surface)" }}
                      >
                        <Mail
                          size={16}
                          style={{ color: "var(--color-accent)" }}
                        />
                      </div>
                      <span
                        className="font-inter text-sm font-medium group-hover:underline"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {email}
                      </span>
                    </a>
                  )}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <MapPin
                        size={16}
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <span
                      className="font-inter text-sm font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {address}, {city}, Nigeria
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Right — form */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: EASE, delay: 0.1 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl p-7 md:p-9"
                style={{
                  backgroundColor: "var(--color-surface)",
                  boxShadow: "0 2px 32px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  className="font-sora font-semibold text-xl mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  Send a message
                </h3>
                <p
                  className="font-inter text-sm mb-6"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  We will reply via WhatsApp within the hour.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="c-name"
                      className="block font-inter text-xs font-semibold mb-1.5"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Your Name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      autoComplete="name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-phone"
                      className="block font-inter text-xs font-semibold mb-1.5"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      required
                      autoComplete="tel"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-msg"
                      className="block font-inter text-xs font-semibold mb-1.5"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="c-msg"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="input-field resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-whatsapp w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <MessageSquare size={16} />
                    {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA STRIP ─────────────────────────────────────────── */}
        <section
          className="py-14 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-accent)" }}
          aria-label="Call to action"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.4) 1px, transparent 1px)`,
              backgroundSize: "22px 22px",
            }}
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3
                className="font-sora font-bold text-2xl md:text-3xl"
                style={{ color: "#0F1B2D" }}
              >
                Ready to work with {businessName}?
              </h3>
              <p
                className="mt-1 font-inter text-sm"
                style={{ color: "rgba(15,27,45,0.6)" }}
              >
                Call us or send a WhatsApp message — we respond fast.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-inter font-semibold text-sm transition-all duration-200"
                style={{ backgroundColor: "#0F1B2D", color: "#ffffff" }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLAnchorElement
                  ).style.backgroundColor = "#1B2A4A")
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLAnchorElement
                  ).style.backgroundColor = "#0F1B2D")
                }
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare size={15} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
