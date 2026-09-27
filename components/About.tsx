"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "~2007–2010",
    title: "Đại học Vật Lý",
    desc: "Tốt nghiệp cử nhân Vật Lý — tư duy phân tích, mô hình hóa từ nền khoa học cơ bản.",
    accent: "#0ea5e9",
  },
  {
    year: "2008",
    title: "Chứng chỉ IT — iSPACE",
    desc: "Computer Doctor (chuyên khoa PC) tại iSPACE IT Training Center & iCARE International IT Hospital.",
    accent: "#0ea5e9",
  },
  {
    year: "2013–2020",
    title: "Nhân viên Thiết bị — THCS Đức Lập",
    desc: "7 năm quản lý thiết bị giáo dục tại Đức Hòa, Long An. Nhận ra khoảng trống lớn giữa công nghệ và thực tiễn.",
    accent: "#22d3ee",
  },
  {
    year: "2020–nay",
    title: "Dược Văn Bằng 2 (Lớp K17)",
    desc: "Theo học ngành Dược — kết hợp nền tảng khoa học + kinh nghiệm thực chiến để hiểu sâu domain Y tế.",
    accent: "#22d3ee",
  },
  {
    year: "2024–nay",
    title: "AI Builder — Dr.NgoPi",
    desc: "Build full-stack AI: dashboard doanh nghiệp (CBAM, sản xuất thép), automation pipeline, knowledge system.",
    accent: "#d4ff3c",
  },
];

const stats = [
  { value: "5+", label: "Dự án production" },
  { value: "42", label: "Tuổi đời, 20+ năm tự học" },
  { value: "3", label: "Lĩnh vực: Vật lý · Dược · AI" },
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
              — sinh năm 1984 tại Đức Hòa, Long An. Cử nhân Vật Lý, đang học
              Dược Văn Bằng 2, và là người tự xây dựng các hệ thống AI thực tế.
            </p>
            <p className="text-[#8ba3c4] leading-relaxed mb-4 text-sm md:text-base">
              Hành trình của tôi là: Vật Lý → Thiết bị trường học → Dược học →
              AI Builder.{" "}
              <span className="text-[#22d3ee]">
                Không thẳng, nhưng mỗi bước đều để lại domain knowledge thực
                chất
              </span>{" "}
              — từ cơ sở hạ tầng giáo dục, quản lý dữ liệu sản xuất thép, đến
              CBAM carbon reporting.
            </p>
            <p className="text-[#8ba3c4] leading-relaxed mb-10 text-sm md:text-base">
              Mỗi dự án xuất phát từ một bài toán thực tế — dashboard, pipeline
              AI, knowledge system — và kết thúc bằng giải pháp đang chạy
              production.
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
