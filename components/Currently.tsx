"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "🔨",
    category: "Đang xây dựng",
    label: "drngopi.com",
    desc: "Website thương hiệu cá nhân — từ Dược sĩ đến AI Engineer",
    accent: "#22d3ee",
  },
  {
    icon: "📚",
    category: "Đang học",
    label: "Multi-agent Systems",
    desc: "Orchestration patterns, tool use, và memory architecture cho AI agents",
    accent: "#0ea5e9",
  },
  {
    icon: "🧪",
    category: "Đang khám phá",
    label: "AI trong Y tế Việt Nam",
    desc: "Ứng dụng LLM để phân tích dữ liệu dược lâm sàng và tư vấn thuốc",
    accent: "#d4ff3c",
  },
];

export default function Currently() {
  return (
    <section className="py-20 px-6 border-y border-[#1a2840]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          {/* Pulse dot */}
          <div className="relative flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22d3ee]" />
            <div className="absolute inset-0 rounded-full bg-[#22d3ee] animate-ping opacity-40" />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold text-[#e8f0fe]">
            Hiện tại
          </span>
          <div className="h-px flex-1 bg-[#1a2840]" />
          <span className="label-mono text-[#8ba3c4] text-[10px]">
            THÁNG 9, 2026
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 border border-[#1a2840] rounded-xl bg-[#0d1424] relative overflow-hidden group hover:border-opacity-60 transition-all"
              style={{ "--clr": item.accent } as React.CSSProperties}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                style={{ background: item.accent }}
              />

              <div className="text-2xl mb-3">{item.icon}</div>
              <div
                className="label-mono text-[10px] mb-1"
                style={{ color: item.accent }}
              >
                {item.category}
              </div>
              <div className="font-display font-semibold text-[#e8f0fe] text-sm mb-2">
                {item.label}
              </div>
              <p className="text-[#6b7f9a] text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
