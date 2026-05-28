import { useEffect, useState } from "react";

/** Mount-only client guard for SSR-incompatible components (e.g. R3F). */
export function ClientOnly({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
