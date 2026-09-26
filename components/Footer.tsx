export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[#475569] text-sm">
          © 2026{" "}
          <span className="bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent font-semibold">
            Dr.NgoPi
          </span>{" "}
          — Ngô Hoài Hận
        </div>
        <div className="text-[#334155] text-xs">
          Built with Next.js + AI Agent
        </div>
      </div>
    </footer>
  );
}
