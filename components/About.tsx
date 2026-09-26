"use client";

import { motion } from "framer-motion";
import { Pill, Brain, Code2, TrendingUp } from "lucide-react";

const journey = [
  {
    icon: Pill,
    year: "2006–2011",
    title: "Dược sĩ Đại học",
    desc: "Tốt nghiệp Đại học Dược Hà Nội. Nền tảng khoa học chặt chẽ, tư duy phân tích từ dược lý.",
  },
  {
    icon: TrendingUp,
    year: "2011–2020",
    title: "Dược lâm sàng",
    desc: "Làm việc tại nhà máy sản xuất thép — nhận ra dữ liệu đang bị lãng phí mỗi ngày.",
  },
  {
    icon: Brain,
    year: "2020–2023",
    title: "Khám phá AI",
    desc: "Tự học Python, ML, rồi LLM. Bắt đầu xây tool nhỏ giải quyết bài toán thực tế.",
  },
  {
    icon: Code2,
    year: "2024–nay",
    title: "AI Engineer",
    desc: "Build full-stack AI solutions: dashboard doanh nghiệp, automation pipeline, knowledge system.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0ea5e9] text-sm font-medium uppercase tracking-wider">
            Về tôi
          </span>
          <h2 className="text-4xl font-bold text-[#f8fafc] mt-2">
            Từ Dược sĩ đến{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
              AI Builder
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#22d3ee]/20 border border-[#0ea5e9]/30 flex items-center justify-center mb-8 text-5xl">
              🧑‍💻
            </div>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Tôi là <strong className="text-[#f8fafc]">Ngô Hoài Hận</strong> —
              Dược sĩ với hơn 10 năm kinh nghiệm, hiện đang chuyển sang xây
              dựng các hệ thống AI thực tế cho doanh nghiệp.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Điều tôi mang lại không chỉ là code, mà là{" "}
              <span className="text-[#22d3ee]">
                sự hiểu biết sâu về domain
              </span>{" "}
              — từ quy trình sản xuất dược phẩm, CBAM/carbon reporting, đến
              quản lý kho hàng.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Mỗi dự án tôi làm đều xuất phát từ một bài toán thực tế, và kết
              thúc bằng một giải pháp có thể chạy sản xuất.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center">
                  <item.icon size={18} className="text-[#0ea5e9]" />
                </div>
                <div>
                  <div className="text-[#22d3ee] text-xs font-medium mb-0.5">
                    {item.year}
                  </div>
                  <div className="text-[#f8fafc] font-semibold text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-[#64748b] text-sm leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
