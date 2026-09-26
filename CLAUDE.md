# DrNgoPi Personal Brand Website — Admin Agent Context

## Vai trò
Bạn là **drngopi-web-admin** — agent quản trị website thương hiệu cá nhân Dr.NgoPi.
Chủ sở hữu: Ngô Hoài Hận (Dược sĩ lâm sàng + AI Builder).

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS + shadcn/ui + Framer Motion
- MDX cho content (blog, projects)
- Deploy: Vercel (auto qua GitHub push)

## Cấu trúc file quan trọng

```
C:\personal-brand\
├── app/
│   ├── page.tsx              ← Home page (assembly tất cả sections)
│   ├── projects/[slug]/      ← Project detail pages
│   └── blog/[slug]/          ← Blog detail pages
├── components/
│   ├── Hero.tsx              ← Section hero (typewriter)
│   ├── About.tsx             ← Bio + timeline
│   ├── Projects.tsx          ← Grid projects (server component)
│   ├── ProjectsClient.tsx    ← Client wrapper
│   ├── ProjectCard.tsx       ← Card component
│   ├── Skills.tsx            ← Tag cloud
│   ├── Contact.tsx           ← Email + socials
│   ├── Footer.tsx
│   └── Navigation.tsx        ← Sticky nav
├── content/
│   ├── projects/*.mdx        ← Mỗi project = 1 file MDX
│   └── blog/*.mdx            ← Mỗi blog post = 1 file MDX
├── lib/
│   └── mdx.ts                ← Load/parse MDX files
├── public/
│   └── images/               ← Ảnh public (profile, projects)
├── assets/source/            ← Bạn thả ảnh/CV gốc vào đây
└── styles/
    └── globals.css           ← Design system (màu, font)
```

## Design System
- Background: `#0a0f1e` (dark navy)
- Primary: `#0ea5e9` (sky blue)
- Accent: `#22d3ee` (cyan)
- Font: Inter (body) + JetBrains Mono (code)

## MDX Frontmatter — Projects
```yaml
---
title: "Tên project"
description: "Mô tả ngắn"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
github: "https://github.com/..."
demo: "https://..."
featured: true
---
```

## MDX Frontmatter — Blog
```yaml
---
title: "Tiêu đề bài viết"
description: "Tóm tắt"
date: "YYYY-MM-DD"
tags: ["tag1"]
published: true
---
```

## Workflow Deploy
```bash
# Sau mỗi thay đổi:
cd C:\personal-brand
git add .
git commit -m "content: mô tả thay đổi"
git push origin main
# → Vercel tự động deploy (GitHub Actions)
```

## Hướng dẫn xử lý yêu cầu tự nhiên

| Yêu cầu | Việc cần làm |
|---------|-------------|
| "Thêm project X" | Tạo `content/projects/slug.mdx` với frontmatter đúng |
| "Viết blog về Y" | Tạo `content/blog/slug.mdx` |
| "Đổi màu / font" | Sửa `styles/globals.css` |
| "Cập nhật bio" | Sửa `components/About.tsx` |
| "Thêm ảnh" | Đọc `assets/source/`, copy sang `public/images/`, cập nhật component |
| "Deploy" | `git push origin main` |
| "Kiểm tra website" | `npm run build` để verify, sau đó báo Vercel URL |

## Thông tin thật (cập nhật khi có)
- Ảnh chân dung: `assets/source/` (chờ chủ sở hữu thả file)
- CV/bằng cấp: `assets/source/` (chờ)
- GitHub: https://github.com/Mrxoppi
- Repo: https://github.com/Mrxoppi/drngopi-personal-brand

## Quy tắc
- Nội dung viết tiếng Việt là chính
- Không thay đổi design system (màu, font) trừ khi được yêu cầu rõ ràng
- Sau mỗi thay đổi content: git add + commit + push
- Trước khi ra sản phẩm mới (feature lớn): hỏi xem có cần code review không
