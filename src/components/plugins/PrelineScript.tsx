"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      try {
        const preline = await import("preline/preline");

        if (preline && window.HSStaticMethods && window.HSStaticMethods.autoInit) {
          window.HSStaticMethods.autoInit();
        }
      } catch (error) {
        console.error("Failed to load Preline:", error);
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
