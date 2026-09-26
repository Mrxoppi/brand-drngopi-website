import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr.NgoPi — Dược sĩ × Kỹ sư AI",
  description:
    "Ngô Hoài Hận — Dược sĩ chuyển sang AI Engineering. Xây cầu nối Y tế và Công nghệ thông qua các dự án thực tế.",
  keywords: [
    "Ngô Hoài Hận",
    "Dr.NgoPi",
    "AI Engineer",
    "Dược sĩ",
    "Healthcare AI",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Ngô Hoài Hận", url: "https://drngopi.vercel.app" }],
  creator: "Ngô Hoài Hận",
  openGraph: {
    title: "Dr.NgoPi — Dược sĩ × Kỹ sư AI",
    description: "Xây cầu nối Y tế và Công nghệ",
    url: "https://drngopi.vercel.app",
    siteName: "Dr.NgoPi",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr.NgoPi — Dược sĩ × Kỹ sư AI",
    description: "Xây cầu nối Y tế và Công nghệ",
    creator: "@ngohoaihan1984",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
