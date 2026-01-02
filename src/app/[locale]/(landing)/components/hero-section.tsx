"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useAnimationCoordination } from "@/hooks/use-animation-coordination";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("IndexPage.hero");
  const [isVisible] = useState(true);
  const { getAnimationProps, getStaggerDelay } = useAnimationCoordination();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        role="img"
        aria-label={t("backgroundAlt")}
      >
        <ExportedImage
          src="/images/WhatsApp Image 2026-01-02 at 21.21.44.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Dark overlay for better text readability */}
        <div className="bg-linear-to-r absolute inset-0 from-black/70 via-black/50 to-black/30" />
        {/* Brand color overlay */}
        <div className="from-primary/20 to-primary/10 bg-linear-to-br absolute inset-0 via-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        {/* Floating geometric shapes */}
        <div className="animate-float absolute left-10 top-20 h-20 w-20 rotate-45 border-2 border-white/20" />
        <div className="border-primary/30 animate-float animation-delay-2000 absolute bottom-32 right-16 h-16 w-16 rotate-12 border-2" />
        <div className="absolute right-1/4 top-1/3 h-12 w-12 animate-pulse rounded-full bg-white/10" />

        {/* Grid pattern overlay */}
        <div className="pattern-grid absolute inset-0 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="layout relative z-20 py-20">
        <m.div
          className="mx-auto max-w-4xl text-center text-white"
          {...getAnimationProps({
            initial: { opacity: 0 },
            animate: isVisible ? { opacity: 1 } : { opacity: 0 },
            transition: { duration: 0.6 }
          })}
        >
          {/* Company Name */}
          <m.h1
            id="hero-title"
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, delay: getStaggerDelay(1) }
            })}
            className={cn(
              "mb-4 text-5xl font-bold md:text-7xl lg:text-8xl",
              "bg-linear-to-r from-white via-white to-white/90 bg-clip-text text-transparent",
              "drop-shadow-2xl"
            )}
          >
            {t("title")}
          </m.h1>

          {/* Subtitle */}
          <m.p
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, delay: getStaggerDelay(2) }
            })}
            className="mb-6 text-xl font-light text-white/90 drop-shadow-lg md:text-2xl lg:text-3xl"
          >
            {t("subtitle")}
          </m.p>

          {/* Tagline */}
          <m.p
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, delay: getStaggerDelay(3) }
            })}
            className="text-primary-light mb-8 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-medium backdrop-blur-sm md:text-xl"
          >
            {t("tagline")}
          </m.p>

          {/* Description */}
          <m.p
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, delay: getStaggerDelay(4) }
            })}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/80 drop-shadow-md md:text-lg"
          >
            {t("description")}
          </m.p>

          {/* Call to Action Buttons */}
          <m.div
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, delay: getStaggerDelay(5) }
            })}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            role="group"
            aria-label={t("ctaGroup")}
          >
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-primary hover:bg-primary/90 text-white",
                "px-8 py-4 text-lg font-semibold",
                "shadow-elegant hover:shadow-2xl",
                "transform transition-all duration-300 hover:scale-105",
                "border-primary hover:border-primary-light border-2",
                "animate-pulse-glow",
                "focus:ring-offset-primary focus:ring-2 focus:ring-white focus:ring-offset-2"
              )}
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ctaAriaLabel")}
              >
                {t("cta")}
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20",
                "px-8 py-4 text-lg font-semibold",
                "backdrop-blur-sm",
                "transform transition-all duration-300 hover:scale-105",
                "shadow-lg hover:shadow-xl",
                "focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              )}
            >
              <Link href="#gallery" aria-label={t("ctaSecondaryAriaLabel")}>
                {t("ctaSecondary")}
              </Link>
            </Button>
          </m.div>

          {/* Scroll Indicator */}
          <m.div
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
              transition: { duration: 0.6, delay: getStaggerDelay(6) }
            })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            role="button"
            tabIndex={0}
            aria-label={t("scrollIndicatorLabel")}
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="flex cursor-pointer flex-col items-center text-white/60 transition-colors hover:text-white/80">
              <span className="mb-2 text-sm font-light">{t("scrollDown")}</span>
              <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
                <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/50" />
              </div>
            </div>
          </m.div>
        </m.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="from-background bg-linear-to-t absolute bottom-0 left-0 right-0 z-10 h-32 to-transparent" />
    </section>
  );
}
