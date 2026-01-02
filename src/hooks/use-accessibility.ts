"use client";

import { useEffect, useState } from "react";

interface AccessibilityState {
  prefersReducedMotion: boolean;
  isKeyboardUser: boolean;
  highContrast: boolean;
  fontSize: "normal" | "large" | "extra-large";
}

export function useAccessibility() {
  const [state, setState] = useState<AccessibilityState>(() => {
    // Initialize state with media query values if available
    if (typeof window !== "undefined") {
      const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      const highContrastQuery = window.matchMedia("(prefers-contrast: high)");

      return {
        prefersReducedMotion: reducedMotionQuery.matches,
        isKeyboardUser: false,
        highContrast: highContrastQuery.matches,
        fontSize: "normal"
      };
    }

    return {
      prefersReducedMotion: false,
      isKeyboardUser: false,
      highContrast: false,
      fontSize: "normal"
    };
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setState((prev) => ({ ...prev, prefersReducedMotion: e.matches }));
      if (e.matches) {
        document.body.classList.add("reduce-motion");
      } else {
        document.body.classList.remove("reduce-motion");
      }
    };

    // Apply initial reduced motion class
    if (mediaQuery.matches) {
      document.body.classList.add("reduce-motion");
    }

    mediaQuery.addEventListener("change", handleReducedMotionChange);

    // Detect keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setState((prev) => ({ ...prev, isKeyboardUser: true }));
        document.body.classList.add("keyboard-user");
      }
    };

    const handleMouseDown = () => {
      setState((prev) => ({ ...prev, isKeyboardUser: false }));
      document.body.classList.remove("keyboard-user");
    };

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia("(prefers-contrast: high)");
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setState((prev) => ({ ...prev, highContrast: e.matches }));
      if (e.matches) {
        document.body.classList.add("high-contrast");
      } else {
        document.body.classList.remove("high-contrast");
      }
    };

    // Apply initial high contrast class
    if (highContrastQuery.matches) {
      document.body.classList.add("high-contrast");
    }

    highContrastQuery.addEventListener("change", handleHighContrastChange);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange);
      highContrastQuery.removeEventListener("change", handleHighContrastChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const setFontSize = (size: AccessibilityState["fontSize"]) => {
    setState((prev) => ({ ...prev, fontSize: size }));

    // Remove existing font size classes
    document.body.classList.remove("font-large", "font-extra-large");

    // Apply new font size class
    if (size === "large") {
      document.body.classList.add("font-large");
    } else if (size === "extra-large") {
      document.body.classList.add("font-extra-large");
    }
  };

  const toggleHighContrast = () => {
    const newHighContrast = !state.highContrast;
    setState((prev) => ({ ...prev, highContrast: newHighContrast }));

    if (newHighContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  };

  const toggleReducedMotion = () => {
    const newReducedMotion = !state.prefersReducedMotion;
    setState((prev) => ({ ...prev, prefersReducedMotion: newReducedMotion }));

    if (newReducedMotion) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
  };

  return {
    ...state,
    setFontSize,
    toggleHighContrast,
    toggleReducedMotion
  };
}
