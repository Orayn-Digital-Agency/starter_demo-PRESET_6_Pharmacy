"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import businessData from "@/config/business-data";

const NAV_LINKS = [
  { label: "Services", href: "services" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
] as const;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLink(id: string) {
    setMenuOpen(false);
    // Small timeout so drawer closes before scroll fires on iOS
    setTimeout(() => scrollTo(id), 80);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.07)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="font-sora font-bold text-lg transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
          style={{ color: scrolled ? "var(--color-primary)" : "#ffffff" }}
          aria-label={`${businessData.businessName} — back to top`}
        >
          {businessData.logoText}
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="font-inter text-sm font-medium transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
              style={{
                color: scrolled
                  ? "var(--color-text-secondary)"
                  : "rgba(255,255,255,0.85)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = scrolled
                  ? "var(--color-primary)"
                  : "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = scrolled
                  ? "var(--color-text-secondary)"
                  : "rgba(255,255,255,0.85)";
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink("contact")}
            className="btn-accent py-2.5 px-5 text-sm"
          >
            {businessData.ctaLabel}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: scrolled ? "var(--color-primary)" : "#ffffff" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: "rgba(0,0,0,0.07)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="font-inter text-base font-medium py-3.5 px-3 rounded-xl text-left transition-colors duration-150 bg-transparent border-0 cursor-pointer w-full"
                  style={{ color: "var(--color-text-primary)" }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "var(--color-surface)";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div
                className="pt-3 mt-1"
                style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
              >
                <button
                  onClick={() => handleLink("contact")}
                  className="btn-accent w-full justify-center text-sm py-3.5"
                >
                  {businessData.ctaLabel}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
