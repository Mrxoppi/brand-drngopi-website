"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  result?: string;
  index: number;
}

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  result,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-card bg-[#111827] rounded-2xl p-6 flex flex-col h-full group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#22d3ee]/20 border border-[#0ea5e9]/20 flex items-center justify-center text-lg">
          {index === 0
            ? "🌿"
            : index === 1
            ? "📊"
            : index === 2
            ? "🎬"
            : index === 3
            ? "🧠"
            : "💻"}
        </div>
        <a
          href={`/projects/${slug}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-[#0ea5e9] hover:text-[#22d3ee]"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>

      <h3 className="text-[#f8fafc] font-bold text-lg mb-2 group-hover:text-[#22d3ee] transition-colors">
        {title}
      </h3>

      <p className="text-[#64748b] text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {result && (
        <div className="mb-4 p-3 bg-[#0ea5e9]/5 border border-[#0ea5e9]/15 rounded-xl">
          <span className="text-[#22d3ee] text-xs font-medium">✓ Kết quả: </span>
          <span className="text-[#94a3b8] text-xs">{result}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 bg-[#0a0f1e] border border-[#1e293b] text-[#64748b] text-xs rounded-lg font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
