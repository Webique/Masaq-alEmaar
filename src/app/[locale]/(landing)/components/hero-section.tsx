"use client";

import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("IndexPage.hero");
  const [isVisible] = useState(true);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ExportedImage
          src="/images/WhatsApp Image 2026-01-02 at 21.21.44.jpeg"
          alt="Masaq Al-Amaar Construction Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Brand color overlay */}
        <div className="from-primary/20 to-primary/10 absolute inset-0 bg-gradient-to-br via-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10">
        {/* Floating geometric shapes */}
        <div className="animate-float absolute left-10 top-20 h-20 w-20 rotate-45 border-2 border-white/20" />
        <div className="border-primary/30 animate-float animation-delay-2000 absolute bottom-32 right-16 h-16 w-16 rotate-12 border-2" />
        <div className="absolute right-1/4 top-1/3 h-12 w-12 animate-pulse rounded-full bg-white/10" />

        {/* Grid pattern overlay */}
        <div className="pattern-grid absolute inset-0 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="layout relative z-20 py-20">
        <motion.div
          className="mx-auto max-w-4xl text-center text-white"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "mb-4 text-5xl font-bold md:text-7xl lg:text-8xl",
              "bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent",
              "drop-shadow-2xl"
            )}
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 text-xl font-light text-white/90 drop-shadow-lg md:text-2xl lg:text-3xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-light mb-8 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-medium backdrop-blur-sm md:text-xl"
          >
            {t("tagline")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/80 drop-shadow-md md:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
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
                "animate-pulse-glow"
              )}
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
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
                "shadow-lg hover:shadow-xl"
              )}
            >
              <Link href="#gallery">{t("ctaSecondary")}</Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="mb-2 text-sm font-light">Scroll Down</span>
              <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
                <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="from-background absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
}
