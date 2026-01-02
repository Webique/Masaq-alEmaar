"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section
      id="about"
      className="bg-background relative overflow-hidden py-20 lg:py-32"
      aria-labelledby="about-title"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(5, 31, 53, 0.2) 2px, transparent 2px)`,
          backgroundSize: "30px 30px"
        }}
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="animate-blob bg-primary/20 absolute left-0 top-1/4 z-0 h-64 w-64 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animation-delay-2000 animate-blob bg-secondary/20 absolute bottom-1/4 right-0 z-0 h-48 w-48 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
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
                className="text-3xl font-bold md:text-4xl lg:text-5xl"
                style={{ color: "var(--brand-primary)" }}
              >
                {t("title")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl"
                style={{ color: "var(--brand-text-light)" }}
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
              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "var(--brand-text)" }}
              >
                {t("story")}
              </p>

              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "var(--brand-text)" }}
              >
                {t("methodology")}
              </p>

              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "var(--brand-text)" }}
              >
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
                  src="/images/2jpeg"
                  alt={t("mainImageAlt")}
                  width={600}
                  height={700}
                  className="h-[500px] w-full object-cover lg:h-[600px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </m.div>

              {/* Image Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5, 31, 53, 0.2), transparent, transparent)"
                }}
              />
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
              <div className="flex items-center gap-2">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                >
                  <span
                    className="text-xl font-bold"
                    aria-label={t("yearsNumber")}
                  >
                    15+
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    {t("years")}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--brand-text-light)" }}
                  >
                    {t("experience")}
                  </p>
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
              <div className="flex items-center gap-2">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "var(--brand-secondary)" }}
                >
                  <span
                    className="text-xl font-bold"
                    aria-label={t("projectsNumber")}
                  >
                    100+
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--brand-secondary)" }}
                  >
                    {t("projects")}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--brand-text-light)" }}
                  >
                    {t("completed")}
                  </p>
                </div>
              </div>
            </m.div>

            {/* Decorative Shapes */}
            <div
              className="bg-primary/20 absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full blur-2xl"
              aria-hidden="true"
            />

            {/* Additional decorative elements for better visibility */}
            <div
              className="bg-secondary/10 absolute -bottom-4 -right-4 h-20 w-20 rounded-full blur-xl"
              aria-hidden="true"
            />
            <div
              className="bg-primary/10 absolute -left-4 -top-4 h-16 w-16 rounded-full blur-lg"
              aria-hidden="true"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
