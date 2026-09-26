"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { ProjectMeta } from "@/lib/mdx";

interface Props {
  projects: ProjectMeta[];
}

export default function ProjectsClient({ projects }: Props) {
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
