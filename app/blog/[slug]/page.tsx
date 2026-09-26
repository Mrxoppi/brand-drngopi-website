import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug, getBlogSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta, content } = getBlogBySlug(slug);
    return (
      <div className="min-h-screen bg-[#0a0f1e] text-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#22d3ee] transition-colors mb-10 text-sm"
          >
            <ArrowLeft size={16} /> Blog
          </Link>

          <div className="mb-10">
            <div className="text-[#0ea5e9] text-sm font-medium mb-2">
              {meta.date}
            </div>
            <h1 className="text-4xl font-black text-[#f8fafc] mb-4">
              {meta.title}
            </h1>
            <p className="text-[#94a3b8] text-lg">{meta.description}</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#f8fafc] prose-p:text-[#94a3b8] prose-a:text-[#0ea5e9] prose-code:text-[#22d3ee] prose-pre:bg-[#111827] prose-pre:border prose-pre:border-[#1e293b]">
            <MDXRemote source={content} />
          </div>
        </div>
      </div>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("Invalid slug") || message.includes("ENOENT")) {
      notFound();
    }
    throw err;
  }
}
