
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="hairline mb-10" />
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center h-8 w-8 rounded-full bg-gradient-to-br from-cyan to-accent text-[13px] text-background font-bold">HS</span>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Harshit Srivastav · Full Stack & Mobile Developer · Mohali, India</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono">React Native · SwiftUI · Next.js · Node.js · AI</div>
        
      </div>
      <div className="w-full flex justify-center">
  <div className="text-xs text-muted-foreground font-mono py-5">
    v1.0 · Designed & engineered in Bharat 🇮🇳
  </div>
</div>
    </footer>
  );
}
