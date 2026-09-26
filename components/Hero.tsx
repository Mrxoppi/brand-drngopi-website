"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const roles = [
  "Dược sĩ Lâm sàng",
  "AI Engineer",
  "Builder & Maker",
  "Healthcare × Tech",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-[#22d3ee] border border-[#22d3ee]/30 rounded-full bg-[#22d3ee]/5"
        >
          Xin chào! Tôi là
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-[#0ea5e9] via-[#22d3ee] to-[#0ea5e9] bg-clip-text text-transparent"
        >
          Ngô Hoài Hận
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-[#94a3b8] mb-2 h-10 flex items-center justify-center gap-2"
        >
          <span className="text-[#f8fafc]">{displayed}</span>
          <span className="w-0.5 h-8 bg-[#22d3ee] animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Dược sĩ × Kỹ sư AI — Xây cầu nối Y tế và Công nghệ
          <br />
          <span className="text-[#64748b] text-base">
            Biến dữ liệu y tế thành giải pháp AI thực tế
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0ea5e9] text-white font-semibold rounded-xl hover:bg-[#0284c7] transition-colors"
          >
            Xem Dự án <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-[#0ea5e9]/40 text-[#0ea5e9] font-semibold rounded-xl hover:bg-[#0ea5e9]/10 transition-colors"
          >
            <Mail size={18} /> Liên hệ
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] text-xs"
      >
        <span>Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-6 bg-gradient-to-b from-[#475569] to-transparent"
        />
      </motion.div>
    </section>
  );
}
