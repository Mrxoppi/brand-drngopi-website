import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#22d3ee] transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} /> Về trang chủ
        </Link>

        <h1 className="text-4xl font-black mb-4">
          <span className="bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-[#64748b] mb-12">
          Suy nghĩ về AI, Healthcare, và việc xây dựng sản phẩm
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">✍️</div>
            <h2 className="text-xl font-semibold text-[#94a3b8] mb-2">
              Coming soon
            </h2>
            <p className="text-[#475569] text-sm">
              Đang viết — quay lại sau nhé!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 bg-[#111827] border border-[#1e293b] rounded-2xl hover:border-[#0ea5e9]/40 transition-colors group"
              >
                <div className="text-[#475569] text-xs mb-2">{post.date}</div>
                <h2 className="text-[#f8fafc] font-bold text-xl mb-2 group-hover:text-[#22d3ee] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="flex gap-2 mt-4">
                  {post.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#0a0f1e] border border-[#1e293b] text-[#475569] text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
