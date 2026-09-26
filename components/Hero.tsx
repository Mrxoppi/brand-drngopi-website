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
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 75);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — horizontal scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/15 to-transparent origin-left"
        />
        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3,1] }}
          className="absolute left-[45%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0ea5e9]/10 to-transparent origin-top hidden lg:block"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-[1fr_auto] gap-16 items-center">
        {/* LEFT — main content */}
        <div className="max-w-3xl">
          {/* Mono label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#22d3ee]/60" />
            <span className="label-mono text-[#22d3ee]">Dr.NgoPi / Hồ sơ</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            <span className="text-[#e8f0fe]">Ngô</span>
            <br />
            <span className="gradient-text">Hoài Hận</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-2 mb-6 h-9"
          >
            <span className="text-xl md:text-2xl font-medium text-[#8ba3c4]">
              {displayed}
            </span>
            <span className="inline-block w-0.5 h-6 bg-[#d4ff3c] animate-pulse" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-[#8ba3c4] leading-relaxed mb-10 max-w-lg"
          >
            Dược sĩ với 10 năm kinh nghiệm lâm sàng, chuyển sang xây dựng{" "}
            <span className="text-[#22d3ee]">hệ thống AI thực tế</span> cho
            doanh nghiệp. Bài toán domain trước, code sau.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0ea5e9] text-[#080d1a] font-bold text-sm rounded-lg hover:bg-[#22d3ee] transition-all duration-200"
            >
              Xem Dự án
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#1a2840] text-[#8ba3c4] font-medium text-sm rounded-lg hover:border-[#22d3ee]/40 hover:text-[#22d3ee] transition-all duration-200"
            >
              <Mail size={15} /> Liên hệ
            </a>
          </motion.div>
        </div>

        {/* RIGHT — credential card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="relative corner-accent border border-[#1a2840] rounded-xl p-6 w-56 bg-[#0d1424] space-y-5">
            <div>
              <div className="label-mono mb-1.5">Chuyên môn</div>
              <div className="text-[#e8f0fe] font-semibold text-sm">Dược lâm sàng</div>
              <div className="text-[#8ba3c4] text-xs">10+ năm thực chiến</div>
            </div>
            <div className="h-px bg-[#1a2840]" />
            <div>
              <div className="label-mono mb-1.5">Hiện tại</div>
              <div className="text-[#22d3ee] font-semibold text-sm">AI Engineer</div>
              <div className="text-[#8ba3c4] text-xs">Full-stack AI solutions</div>
            </div>
            <div className="h-px bg-[#1a2840]" />
            <div className="space-y-2">
              <div className="label-mono mb-1.5">Tech Stack</div>
              {["Python", "Next.js", "LLM"].map((t) => (
                <div
                  key={t}
                  className="inline-block mr-1.5 px-2 py-0.5 text-[10px] font-medium text-[#0ea5e9] border border-[#0ea5e9]/20 rounded bg-[#0ea5e9]/5"
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="h-px bg-[#1a2840]" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4ff3c] animate-pulse" />
              <span className="text-[#8ba3c4] text-xs">Nhận dự án mới</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-12 flex items-center gap-3 text-[#475569]"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#22d3ee]/40 to-transparent"
        />
        <span className="label-mono text-[10px]">Cuộn xuống</span>
      </motion.div>
    </section>
  );
}
