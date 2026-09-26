"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectMeta } from "@/lib/mdx";

interface Props {
  projects: ProjectMeta[];
}

const projectIcons: Record<number, string> = {
  0: "🌿",
  1: "📊",
  2: "🎬",
  3: "🧠",
  4: "💻",
};

export default function ProjectsClient({ projects }: Props) {
  const featured = projects.slice(0, 3);
  const others = projects.slice(3);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#22d3ee]/60" />
            <span className="label-mono text-[#22d3ee]">Dự án nổi bật</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e8f0fe]">
            Những gì tôi{" "}
            <span className="gradient-text-cool">đã xây dựng</span>
          </h2>
        </motion.div>

        {/* Featured — alternating layout */}
        <div className="space-y-28 mb-28">
          {featured.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-[1fr_1fr] gap-12 items-center ${
                  isEven ? "" : "lg:[direction:rtl]"
                }`}
              >
                {/* Visual panel */}
                <div className={isEven ? "" : "lg:[direction:ltr]"}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1a2840] bg-[#0d1424] group">
                    {/* Placeholder with grid pattern */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "linear-gradient(#22d3ee20 1px, transparent 1px), linear-gradient(90deg, #22d3ee20 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <span className="text-5xl">{projectIcons[i] ?? "💻"}</span>
                      <span className="label-mono text-[#22d3ee]/60 text-xs">
                        {p.tech.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <a
                      href={`/projects/${p.slug}`}
                      className="absolute inset-0 bg-[#0ea5e9]/0 hover:bg-[#0ea5e9]/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <span className="bg-[#0ea5e9] text-[#080d1a] text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
                        Xem chi tiết <ArrowUpRight size={14} />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "" : "lg:[direction:ltr]"}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-display text-5xl font-bold tabular-nums"
                      style={{
                        WebkitTextStroke: "1px #22d3ee30",
                        color: "transparent",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-[#1a2840]" />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#e8f0fe] mb-4 hover:text-[#22d3ee] transition-colors">
                    <a href={`/projects/${p.slug}`}>{p.title}</a>
                  </h3>

                  <p className="text-[#8ba3c4] leading-relaxed mb-6 text-sm md:text-base">
                    {p.description}
                  </p>

                  {p.result && (
                    <div className="mb-6 flex items-start gap-3 p-4 bg-[#22d3ee]/5 border border-[#22d3ee]/15 rounded-xl">
                      <span className="text-[#22d3ee] text-lg leading-none mt-0.5">✦</span>
                      <div>
                        <div className="label-mono text-[#22d3ee] text-[10px] mb-1">KẾT QUẢ</div>
                        <div className="text-[#e8f0fe] text-sm font-medium">{p.result}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono border border-[#1a2840] text-[#8ba3c4] rounded-lg bg-[#0d1424]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#22d3ee] transition-colors font-medium group/link"
                  >
                    Đọc case study
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other projects — compact grid */}
        {others.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="label-mono text-[#8ba3c4]">Dự án khác</span>
              <div className="h-px flex-1 bg-[#1a2840]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((p, i) => (
                <motion.a
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group p-5 border border-[#1a2840] rounded-xl bg-[#0d1424] hover:border-[#22d3ee]/30 hover:bg-[#0d1424]/80 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">{projectIcons[i + 3] ?? "💻"}</span>
                    <ArrowUpRight
                      size={16}
                      className="text-[#8ba3c4] opacity-0 group-hover:opacity-100 group-hover:text-[#22d3ee] transition-all"
                    />
                  </div>
                  <h4 className="font-display font-semibold text-[#e8f0fe] mb-2 group-hover:text-[#22d3ee] transition-colors text-sm">
                    {p.title}
                  </h4>
                  <p className="text-[#6b7f9a] text-xs leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
