// components/ui/ResponsiveTitleEffect.tsx
"use client";

import { useEffect, useState } from "react";
import { TitleEffect } from "@/components/ui/useTitleEffect";

export function ResponsiveTitleEffect({ text }: { text: string }) {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsWide(window.innerWidth >= 768); // 👈 your breakpoint
    };

    checkWidth(); // run once
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isWide) return null;

  return <TitleEffect text={text} />;
}