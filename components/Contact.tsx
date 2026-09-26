"use client";

import { motion } from "framer-motion";
import { Mail, Link2, X as XIcon, ExternalLink } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hoaihanvt@gmail.com",
    value: "hoaihanvt@gmail.com",
    color: "#0ea5e9",
  },
  {
    icon: ExternalLink,
    label: "Facebook",
    href: "https://facebook.com/DrNgoPi",
    value: "Dr.NgoPi",
    color: "#1877f2",
  },
  {
    icon: XIcon,
    label: "X (Twitter)",
    href: "https://twitter.com/ngohoaihan1984",
    value: "@ngohoaihan1984",
    color: "#1da1f2",
  },
  {
    icon: Link2,
    label: "GitHub",
    href: "https://github.com/Mrxoppi",
    value: "Mrxoppi",
    color: "#94a3b8",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#080d18]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0ea5e9] text-sm font-medium uppercase tracking-wider">
            Kết nối
          </span>
          <h2 className="text-4xl font-bold text-[#f8fafc] mt-2">
            Liên hệ{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
              với tôi
            </span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-lg mx-auto">
            Tôi mở cửa với các dự án hợp tác, tư vấn AI cho doanh nghiệp, hoặc
            đơn giản là trao đổi về technology & healthcare.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card flex items-center gap-4 p-5 bg-[#111827] rounded-2xl hover:scale-[1.02] transition-transform group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${s.color}15`,
                  border: `1px solid ${s.color}30`,
                }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <div>
                <div className="text-[#94a3b8] text-xs font-medium mb-0.5">
                  {s.label}
                </div>
                <div className="text-[#f8fafc] text-sm font-semibold group-hover:text-[#22d3ee] transition-colors">
                  {s.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
