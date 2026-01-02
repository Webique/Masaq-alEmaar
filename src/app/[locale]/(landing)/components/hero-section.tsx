"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("IndexPage.hero");

  return (
    <section
      className="relative flex min-h-[800px] items-center justify-center overflow-hidden sm:min-h-[600px] lg:min-h-screen"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        role="img"
        aria-label={t("backgroundAlt")}
      >
        <ExportedImage
          src="/images/1.jpeg"
          alt="hero"
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
        <div className="animate-float animation-delay-2000 border-primary/30 absolute bottom-32 right-16 h-16 w-16 rotate-12 border-2" />
        <div className="absolute right-1/4 top-1/3 h-12 w-12 animate-pulse rounded-full bg-white/10" />

        {/* Grid pattern overlay */}
        <div className="pattern-grid absolute inset-0 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-4 py-20 pt-28 sm:pt-36">
        <m.div
          className="mx-auto max-w-4xl text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Company Name */}
          <m.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "mb-4 text-5xl font-bold md:text-7xl lg:text-8xl",
              "text-white drop-shadow-2xl"
            )}
          >
            {t("title")}
          </m.h1>

          {/* Subtitle */}
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-xl font-light text-white/90 drop-shadow-lg md:text-2xl lg:text-3xl"
          >
            {t("subtitle")}
          </m.p>

          {/* Tagline */}
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-light mb-8 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-medium backdrop-blur-sm md:text-xl"
          >
            {t("tagline")}
          </m.p>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/80 drop-shadow-md md:text-lg"
          >
            {t("description")}
          </m.p>

          {/* Call to Action Buttons */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
            role="group"
            aria-label={t("ctaGroup")}
          >
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-primary hover:bg-primary/90 text-white",
                "min-w-[200px] px-12 py-6 text-xl font-bold",
                "hover:shadow-3xl rounded-xl shadow-2xl",
                "transform transition-all duration-300 hover:scale-110 active:scale-95",
                "border-primary hover:border-primary-light border-2",
                "relative overflow-hidden",
                "focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
                "group"
              )}
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ctaAriaLabel")}
                className="relative z-10 flex items-center justify-center text-center"
              >
                <span className="inline-block">{t("cta")}</span>
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "border-2 border-white/40 bg-white/15 text-white hover:border-white/70 hover:bg-white/25 hover:text-white",
                "min-w-[200px] px-12 py-6 text-xl font-bold",
                "rounded-xl backdrop-blur-md",
                "transform transition-all duration-300 hover:scale-110 active:scale-95",
                "shadow-xl hover:shadow-2xl",
                "relative overflow-hidden",
                "focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
                "group"
              )}
            >
              <Link
                href="#gallery"
                aria-label={t("ctaSecondaryAriaLabel")}
                className="relative z-10 flex items-center justify-center text-center"
              >
                <span className="inline-block">{t("ctaSecondary")}</span>
              </Link>
            </Button>
          </m.div>
        </m.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="from-background bg-linear-to-t absolute bottom-0 left-0 right-0 z-10 h-32 to-transparent" />
    </section>
  );
}
