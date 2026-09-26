"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2006–2011",
    title: "Dược sĩ Đại học",
    desc: "Tốt nghiệp Đại học Dược Hà Nội. Nền tảng khoa học chặt chẽ, tư duy phân tích từ dược lý.",
    accent: "#0ea5e9",
  },
  {
    year: "2011–2020",
    title: "Dược lâm sàng",
    desc: "Làm việc thực chiến tại cơ sở sản xuất — nhận ra dữ liệu đang bị lãng phí mỗi ngày.",
    accent: "#22d3ee",
  },
  {
    year: "2020–2023",
    title: "Khám phá AI",
    desc: "Tự học Python, ML, rồi LLM. Bắt đầu xây tool nhỏ giải quyết bài toán thực tế.",
    accent: "#22d3ee",
  },
  {
    year: "2024–nay",
    title: "AI Engineer",
    desc: "Build full-stack AI solutions: dashboard doanh nghiệp, automation pipeline, knowledge system.",
    accent: "#d4ff3c",
  },
];

const stats = [
  { value: "5+", label: "Dự án production" },
  { value: "10+", label: "Năm domain expertise" },
  { value: "3", label: "Lĩnh vực AI đã triển khai" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#22d3ee]/60" />
            <span className="label-mono text-[#22d3ee]">Về tôi</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e8f0fe] leading-tight">
            Từ Phòng Lab{" "}
            <span className="gradient-text-cool">đến AI Builder</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16">
          {/* Left: Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#8ba3c4] leading-relaxed mb-4 text-sm md:text-base">
              Tôi là{" "}
              <strong className="text-[#e8f0fe] font-semibold">
                Ngô Hoài Hận
              </strong>{" "}
              — Dược sĩ với hơn 10 năm kinh nghiệm, hiện đang chuyển sang xây
              dựng các hệ thống AI thực tế cho doanh nghiệp.
            </p>
            <p className="text-[#8ba3c4] leading-relaxed mb-4 text-sm md:text-base">
              Điều tôi mang lại không chỉ là code, mà là{" "}
              <span className="text-[#22d3ee]">sự hiểu biết sâu về domain</span>{" "}
              — từ quy trình sản xuất, CBAM/carbon reporting, đến quản lý kho
              hàng.
            </p>
            <p className="text-[#8ba3c4] leading-relaxed mb-10 text-sm md:text-base">
              Mỗi dự án xuất phát từ một bài toán thực tế, và kết thúc bằng một
              giải pháp có thể chạy sản xuất.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-[#1a2840] rounded-lg p-4 bg-[#0d1424] corner-accent relative"
                >
                  <div className="font-display text-2xl font-bold text-[#22d3ee]">
                    {s.value}
                  </div>
                  <div className="label-mono mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0ea5e9]/30 via-[#22d3ee]/20 to-[#d4ff3c]/20" />

            <div className="space-y-8">
              {journey.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  {/* Dot */}
                  <div
                    className="flex-shrink-0 w-[22px] h-[22px] rounded-full border-2 mt-0.5"
                    style={{
                      borderColor: item.accent,
                      backgroundColor: `${item.accent}18`,
                    }}
                  />
                  <div>
                    <span
                      className="label-mono text-[10px]"
                      style={{ color: item.accent }}
                    >
                      {item.year}
                    </span>
                    <div className="font-display font-semibold text-[#e8f0fe] mt-0.5 mb-1">
                      {item.title}
                    </div>
                    <div className="text-[#6b7f9a] text-sm leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
