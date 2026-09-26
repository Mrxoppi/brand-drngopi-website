import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tech: string[];
  result?: string;
  featured?: boolean;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
}

function getFilesFromDir(dir: string): string[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getProjectSlugs(): string[] {
  return getFilesFromDir("projects");
}

export function getBlogSlugs(): string[] {
  return getFilesFromDir("blog");
}

export function getProjectBySlug(slug: string): {
  meta: ProjectMeta;
  content: string;
} {
  const filePath = path.join(contentDir, "projects", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: { slug, ...data } as ProjectMeta,
    content,
  };
}

export function getBlogBySlug(slug: string): {
  meta: BlogMeta;
  content: string;
} {
  const filePath = path.join(contentDir, "blog", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: { slug, ...data } as BlogMeta,
    content,
  };
}

export function getAllProjects(): ProjectMeta[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug).meta)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllBlogPosts(): BlogMeta[] {
  return getBlogSlugs()
    .map((slug) => getBlogBySlug(slug).meta)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
