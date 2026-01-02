"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const t = useTranslations("IndexPage.about");

  const values = [
    {
      key: "quality" as const,
      icon: "🏗️"
    },
    {
      key: "innovation" as const,
      icon: "💡"
    },
    {
      key: "trust" as const,
      icon: "🤝"
    },
    {
      key: "excellence" as const,
      icon: "⭐"
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="pattern-dots absolute inset-0 opacity-30" />

      {/* Decorative Elements */}
      <div className="animate-blob bg-primary/5 absolute left-0 top-1/4 h-64 w-64 rounded-full blur-3xl" />
      <div className="animation-delay-2000 animate-blob bg-secondary/5 absolute bottom-1/4 right-0 h-48 w-48 rounded-full blur-3xl" />

      <div className="layout relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Content Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <m.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-primary text-3xl font-bold md:text-4xl lg:text-5xl"
              >
                {t("title")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-light text-lg md:text-xl"
              >
                {t("subtitle")}
              </m.p>
            </div>

            {/* Company Story */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text text-base leading-relaxed md:text-lg">
                {t("story")}
              </p>

              <p className="text text-base leading-relaxed md:text-lg">
                {t("methodology")}
              </p>

              <p className="text text-base leading-relaxed md:text-lg">
                {t("commitment")}
              </p>
            </m.div>

            {/* Values Grid */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <m.div
                  key={value.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 bg-background/80 hover:border-primary/30 hover:shadow-elegant group h-full backdrop-blur-sm transition-all duration-300">
                    <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                      <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                        {value.icon}
                      </div>
                      <h3 className="text-primary font-semibold">
                        {t(`values.${value.key}.title`)}
                      </h3>
                      <p className="text-light text-sm">
                        {t(`values.${value.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </m.div>
          </m.div>

          {/* Visual Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="shadow-elegant relative overflow-hidden rounded-2xl">
              <m.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <ExportedImage
                  src="/images/WhatsApp Image 2026-01-02 at 21.21.45 (1).jpeg"
                  alt="Masaq Al-Amaar Construction Excellence"
                  width={600}
                  height={700}
                  className="h-[500px] w-full object-cover lg:h-[600px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </m.div>

              {/* Image Overlay */}
              <div className="bg-linear-to-t from-primary/20 absolute inset-0 via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="shadow-elegant absolute -bottom-6 -left-6 rounded-xl bg-white p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-white">
                  <span className="text-xl font-bold">15+</span>
                </div>
                <div>
                  <p className="primary text-sm font-semibold">Years</p>
                  <p className="text-light text-xs">Experience</p>
                </div>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="shadow-elegant absolute -right-6 -top-6 rounded-xl bg-white p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-secondary flex h-12 w-12 items-center justify-center rounded-full text-white">
                  <span className="text-xl font-bold">100+</span>
                </div>
                <div>
                  <p className="secondary text-sm font-semibold">Projects</p>
                  <p className="text-light text-xs">Completed</p>
                </div>
              </div>
            </m.div>

            {/* Decorative Shapes */}
            <div className="bg-primary/10 absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full blur-2xl" />
          </m.div>
        </div>

        {/* Bottom Section - Additional Images */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            "/images/WhatsApp Image 2026-01-02 at 21.21.45 (2).jpeg",
            "/images/WhatsApp Image 2026-01-02 at 21.21.45 (3).jpeg",
            "/images/WhatsApp Image 2026-01-02 at 21.21.46 (1).jpeg",
            "/images/WhatsApp Image 2026-01-02 at 21.21.46 (2).jpeg"
          ].map((image, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <ExportedImage
                src={image}
                alt={`Masaq Al-Amaar Project ${index + 1}`}
                width={300}
                height={200}
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-40"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="bg-linear-to-t from-primary/40 absolute inset-0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
