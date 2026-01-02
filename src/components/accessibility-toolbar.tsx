"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAccessibility } from "@/hooks/use-accessibility";
import { cn } from "@/lib/utils";

export function AccessibilityToolbar() {
  const t = useTranslations("Accessibility");
  const [isOpen, setIsOpen] = useState(false);
  const {
    prefersReducedMotion,
    isKeyboardUser,
    highContrast,
    fontSize,
    setFontSize,
    toggleHighContrast,
    toggleReducedMotion
  } = useAccessibility();

  const toggleToolbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Accessibility Button */}
      <m.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed left-4 top-1/2 z-50 -translate-y-1/2"
      >
        <Button
          onClick={toggleToolbar}
          className={cn(
            "h-12 w-12 rounded-full p-0 shadow-lg transition-all duration-300",
            "bg-primary hover:bg-primary-dark text-white",
            "focus:ring-primary focus:ring-2 focus:ring-offset-2",
            isOpen && "bg-primary-dark"
          )}
          aria-label={isOpen ? t("closeToolbar") : t("openToolbar")}
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
            />
          </svg>
        </Button>
      </m.div>

      {/* Accessibility Panel */}
      {isOpen && (
        <m.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed left-4 top-1/2 z-40 -translate-y-1/2 translate-x-16"
        >
          <Card className="w-80 shadow-2xl">
            <CardContent className="p-6">
              <h3 className="text-primary mb-4 text-lg font-semibold">
                {t("title")}
              </h3>

              <div className="space-y-4">
                {/* Font Size Controls */}
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    {t("fontSize")}
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant={fontSize === "normal" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFontSize("normal")}
                      className="flex-1"
                    >
                      {t("normal")}
                    </Button>
                    <Button
                      variant={fontSize === "large" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFontSize("large")}
                      className="flex-1"
                    >
                      {t("large")}
                    </Button>
                    <Button
                      variant={
                        fontSize === "extra-large" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setFontSize("extra-large")}
                      className="flex-1"
                    >
                      {t("extraLarge")}
                    </Button>
                  </div>
                </div>

                {/* High Contrast Toggle */}
                <div className="flex items-center justify-between">
                  <label className="text-foreground text-sm font-medium">
                    {t("highContrast")}
                  </label>
                  <Button
                    variant={highContrast ? "default" : "outline"}
                    size="sm"
                    onClick={toggleHighContrast}
                    aria-pressed={highContrast}
                  >
                    {highContrast ? t("on") : t("off")}
                  </Button>
                </div>

                {/* Reduced Motion Toggle */}
                <div className="flex items-center justify-between">
                  <label className="text-foreground text-sm font-medium">
                    {t("reducedMotion")}
                  </label>
                  <Button
                    variant={prefersReducedMotion ? "default" : "outline"}
                    size="sm"
                    onClick={toggleReducedMotion}
                    aria-pressed={prefersReducedMotion}
                  >
                    {prefersReducedMotion ? t("on") : t("off")}
                  </Button>
                </div>

                {/* Keyboard Navigation Indicator */}
                <div className="flex items-center justify-between">
                  <label className="text-foreground text-sm font-medium">
                    {t("keyboardNavigation")}
                  </label>
                  <div
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      isKeyboardUser
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    )}
                  >
                    {isKeyboardUser ? t("active") : t("inactive")}
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-muted mt-6 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs">
                    {t("instructions")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </m.div>
      )}

      {/* Overlay to close panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={toggleToolbar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
