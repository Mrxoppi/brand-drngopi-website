"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    slug: "cbam-dashboard",
    title: "CBAM Dashboard",
    description:
      "Dashboard quản lý báo cáo carbon (CBAM) cho nhà máy thép Vĩnh Thành. Tính toán SEE, track deadline EU, xuất báo cáo tự động.",
    tech: ["Python", "Flask", "SQL Server", "Chart.js"],
    result: "3 ngày → 2 giờ cho báo cáo CBAM hàng quý",
  },
  {
    slug: "tvt-unified-dashboard",
    title: "TVT Unified Dashboard",
    description:
      "Enterprise data platform tích hợp toàn bộ dữ liệu Thép Vĩnh Thành: KPI, tra cứu NV, sản xuất, CBAM, Text-to-SQL AI.",
    tech: ["Python", "Flask", "SQL Server", "DeepSeek AI", "NSSM"],
    result: "Một URL duy nhất, giảm 80% thời gian truy vấn",
  },
  {
    slug: "ai-video-generator",
    title: "AI Video Generator",
    description:
      "Pipeline tự động tạo video từ chủ đề → AI viết kịch bản → TTS → render. Chạy 7:00 AM, 7 domain xoay vòng.",
    tech: ["Python", "Claude AI", "Edge TTS", "FFmpeg", "WebSocket"],
    result: "30+ video/tháng, 0 giờ manual",
  },
  {
    slug: "obsidian-knowledge-system",
    title: "Obsidian Knowledge System",
    description:
      "Hệ thống tri thức 3 lớp: Zettelkasten vault + AI extraction + daily digest tự động. Liên kết toàn bộ dự án và ý tưởng.",
    tech: ["Obsidian", "Python", "Claude AI", "OpenJarvis"],
    result: "700+ notes có cấu trúc, accessible < 10s",
  },
  {
    slug: "drngopi-website",
    title: "Website Dr.NgoPi",
    description:
      "Website thương hiệu cá nhân này — thiết kế và build toàn bộ với AI agent. Meta-project: site tự giới thiệu chính mình.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Vercel"],
    result: "Deploy tự động, maintenance bởi AI agent",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080d18]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0ea5e9] text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-[#f8fafc] mt-2">
            Các dự án{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
              thực tế
            </span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-xl mx-auto">
            Mỗi dự án giải quyết bài toán thực tế, đang chạy production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
