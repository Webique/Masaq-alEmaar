"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

interface AnimationConfig {
  maxConcurrentAnimations: number;
  staggerDelay: number;
  respectReducedMotion: boolean;
}

const defaultConfig: AnimationConfig = {
  maxConcurrentAnimations: 3,
  staggerDelay: 100,
  respectReducedMotion: true
};

export function useAnimationCoordination(
  config: Partial<AnimationConfig> = {}
) {
  const finalConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config]
  );

  // Initialize state with a function to avoid the effect warning
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  // Check for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Get staggered delay for manual use
  const getStaggerDelay = useCallback(
    (index: number) => {
      if (prefersReducedMotion && finalConfig.respectReducedMotion) {
        return 0;
      }
      return index * finalConfig.staggerDelay;
    },
    [prefersReducedMotion, finalConfig]
  );

  // Check if animations should be disabled
  const shouldAnimate = useCallback(() => {
    return !(prefersReducedMotion && finalConfig.respectReducedMotion);
  }, [prefersReducedMotion, finalConfig]);

  // Get animation props for motion components
  const getAnimationProps = useCallback(
    (baseProps: Record<string, unknown>) => {
      if (!shouldAnimate()) {
        return {
          initial: false,
          animate: baseProps.animate || baseProps.whileInView,
          transition: { duration: 0 }
        };
      }
      return baseProps;
    },
    [shouldAnimate]
  );

  return {
    getStaggerDelay,
    shouldAnimate,
    getAnimationProps,
    prefersReducedMotion
  };
}
