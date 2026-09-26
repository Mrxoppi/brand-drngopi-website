"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "AI & Machine Learning",
    color: "#0ea5e9",
    skills: [
      "Claude AI",
      "Prompt Engineering",
      "Multi-agent Systems",
      "LLMs",
      "Automation",
      "RAG",
      "Python ML",
    ],
  },
  {
    label: "Data & Analytics",
    color: "#22d3ee",
    skills: [
      "SQL Server",
      "Data Visualization",
      "Chart.js",
      "Excel/Power BI",
      "ETL",
      "Text-to-SQL",
    ],
  },
  {
    label: "Development",
    color: "#818cf8",
    skills: [
      "Python",
      "Flask",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Windows Services",
      "Git",
    ],
  },
  {
    label: "Healthcare & Pharma",
    color: "#34d399",
    skills: [
      "Dược lâm sàng",
      "CBAM/Carbon",
      "Healthcare IT",
      "Data-driven QA",
      "GMP",
    ],
  },
  {
    label: "Tools & Systems",
    color: "#f59e0b",
    skills: [
      "Obsidian",
      "Tailscale",
      "NSSM",
      "Vercel",
      "OpenClaw",
      "FFmpeg",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0ea5e9] text-sm font-medium uppercase tracking-wider">
            Stack
          </span>
          <h2 className="text-4xl font-bold text-[#f8fafc] mt-2">
            Kỹ năng &{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
              Công nghệ
            </span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <div
                className="text-sm font-semibold mb-4 flex items-center gap-2"
                style={{ color: group.color }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.color }}
                />
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.03 }}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      borderColor: `${group.color}25`,
                      backgroundColor: `${group.color}08`,
                      color: "#94a3b8",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = group.color;
                      (e.target as HTMLElement).style.borderColor = `${group.color}50`;
                      (e.target as HTMLElement).style.backgroundColor = `${group.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "#94a3b8";
                      (e.target as HTMLElement).style.borderColor = `${group.color}25`;
                      (e.target as HTMLElement).style.backgroundColor = `${group.color}08`;
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
