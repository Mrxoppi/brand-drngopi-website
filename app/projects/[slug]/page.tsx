import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta, content } = getProjectBySlug(slug);
    return (
      <div className="min-h-screen bg-[#0a0f1e] text-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#22d3ee] transition-colors mb-10 text-sm"
          >
            <ArrowLeft size={16} /> Quay lại
          </Link>

          <div className="mb-8">
            <div className="text-[#0ea5e9] text-sm font-medium mb-2">
              {meta.date}
            </div>
            <h1 className="text-4xl font-black text-[#f8fafc] mb-4">
              {meta.title}
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              {meta.description}
            </p>
            {meta.result && (
              <div className="p-4 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-xl text-[#22d3ee] text-sm">
                ✓ {meta.result}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {meta.tech?.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 bg-[#111827] border border-[#1e293b] text-[#64748b] text-xs rounded-lg font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#f8fafc] prose-p:text-[#94a3b8] prose-a:text-[#0ea5e9] prose-code:text-[#22d3ee] prose-pre:bg-[#111827] prose-pre:border prose-pre:border-[#1e293b]">
            <MDXRemote source={content} />
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
