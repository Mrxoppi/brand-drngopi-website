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

function validateSlug(slug: string, subDir: string): string {
  const resolved = path.resolve(contentDir, subDir, `${slug}.mdx`);
  const expected = path.resolve(contentDir, subDir) + path.sep;
  if (!resolved.startsWith(expected)) {
    throw new Error("Invalid slug");
  }
  return resolved;
}

export function getProjectBySlug(slug: string): {
  meta: ProjectMeta;
  content: string;
} {
  const filePath = validateSlug(slug, "projects");
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
  const filePath = validateSlug(slug, "blog");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: { slug, ...data } as BlogMeta,
    content,
  };
}

function parseDateSafe(d: string): number {
  const ts = Date.parse(d);
  return isNaN(ts) ? 0 : ts;
}

export function getAllProjects(): ProjectMeta[] {
  const slugs = getProjectSlugs();
  const results: ProjectMeta[] = [];
  for (const slug of slugs) {
    try {
      results.push(getProjectBySlug(slug).meta);
    } catch {
      // skip malformed MDX files
    }
  }
  return results.sort((a, b) => parseDateSafe(b.date) - parseDateSafe(a.date));
}

export function getAllBlogPosts(): BlogMeta[] {
  const slugs = getBlogSlugs();
  const results: BlogMeta[] = [];
  for (const slug of slugs) {
    try {
      results.push(getBlogBySlug(slug).meta);
    } catch {
      // skip malformed MDX files
    }
  }
  return results.sort((a, b) => parseDateSafe(b.date) - parseDateSafe(a.date));
}
