"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 lg:py-32"
      aria-labelledby="about-title"
    >
      {/* Background Pattern */}
      <div
        className="pattern-dots absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="animate-blob bg-primary/5 absolute left-0 top-1/4 h-64 w-64 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animation-delay-2000 animate-blob bg-secondary/5 absolute bottom-1/4 right-0 h-48 w-48 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Content Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <m.h2
                id="about-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-primary text-3xl font-bold md:text-4xl lg:text-5xl"
              >
                {t("title")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
              transition={{ duration: 0.6, delay: 0.4 }}
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
          </m.div>

          {/* Visual Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="shadow-elegant relative overflow-hidden rounded-2xl">
              <m.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <ExportedImage
                  src="/images/WhatsApp Image 2026-01-02 at 21.21.45 (1).jpeg"
                  alt={t("mainImageAlt")}
                  width={600}
                  height={700}
                  className="h-[500px] w-full object-cover lg:h-[600px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </m.div>

              {/* Image Overlay */}
              <div className="from-primary/20 bg-linear-to-t absolute inset-0 via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="shadow-elegant absolute -bottom-6 -left-6 rounded-xl bg-white p-6"
              role="complementary"
              aria-label={t("experienceLabel")}
            >
              <div className="flex items-center">
                <div className="bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full text-white">
                  <span
                    className="text-xl font-bold"
                    aria-label={t("yearsNumber")}
                  >
                    15+
                  </span>
                </div>
                <div>
                  <p className="primary text-sm font-semibold">{t("years")}</p>
                  <p className="text-light text-xs">{t("experience")}</p>
                </div>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
              className="shadow-elegant absolute -right-6 -top-6 rounded-xl bg-white p-6"
              role="complementary"
              aria-label={t("projectsLabel")}
            >
              <div className="flex items-center">
                <div className="bg-secondary mr-4 flex h-12 w-12 items-center justify-center rounded-full text-white">
                  <span
                    className="text-xl font-bold"
                    aria-label={t("projectsNumber")}
                  >
                    100+
                  </span>
                </div>
                <div>
                  <p className="secondary text-sm font-semibold">
                    {t("projects")}
                  </p>
                  <p className="text-light text-xs">{t("completed")}</p>
                </div>
              </div>
            </m.div>

            {/* Decorative Shapes */}
            <div
              className="bg-primary/10 absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full blur-2xl"
              aria-hidden="true"
            />
          </m.div>
        </div>

        {/* Bottom Section - Additional Images */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
          role="list"
          aria-label={t("projectGalleryLabel")}
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
              transition={{
                duration: 0.6,
                delay: 1.5 + index * 0.1
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
              role="listitem"
            >
              <ExportedImage
                src={image}
                alt={`${t("projectGalleryLabel")} ${index + 1}`}
                width={300}
                height={200}
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-40"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="from-primary/40 bg-linear-to-t absolute inset-0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
