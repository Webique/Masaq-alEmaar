"use client";

import * as m from "motion/react-m";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <m.div
      className="bg-law-primary/20 fixed inset-x-0 top-0 z-50 h-1"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      style={{ transformOrigin: "0%" }}
      transition={{ duration: 0.1 }}
    >
      <div
        className="from-law-primary via-law-primary-light to-law-primary bg-linear-to-r h-full"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </m.div>
  );
}
