"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Về tôi" },
  { href: "#projects", label: "Dự án" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#1e293b]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-bold text-xl bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent"
        >
          Dr.NgoPi
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#94a3b8] hover:text-[#22d3ee] transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] rounded-lg text-sm hover:bg-[#0ea5e9]/20 transition-colors"
          >
            Liên hệ ngay
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#111827] border-b border-[#1e293b] px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#94a3b8] hover:text-[#22d3ee] transition-colors py-2 border-b border-[#1e293b] last:border-0"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
