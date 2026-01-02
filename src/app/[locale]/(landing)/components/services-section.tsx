"use client";

import { Building2, Hammer, Key, Palette } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const t = useTranslations("IndexPage.services");

  const services = [
    {
      key: "architectural" as const,
      icon: Building2,
      image: "/images/WhatsApp Image 2026-01-02 at 21.21.47 (1).jpeg",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      key: "structural" as const,
      icon: Hammer,
      image: "/images/WhatsApp Image 2026-01-02 at 21.21.46 (3).jpeg",
      gradient: "from-gray-500/20 to-slate-500/20"
    },
    {
      key: "finishing" as const,
      icon: Palette,
      image: "/images/WhatsApp Image 2026-01-02 at 21.21.48 (2).jpeg",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      key: "turnkey" as const,
      icon: Key,
      image: "/images/WhatsApp Image 2026-01-02 at 21.21.49 (1).jpeg",
      gradient: "from-emerald-500/20 to-green-500/20"
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="pattern-grid absolute inset-0 opacity-20" />
      <div className="bg-background-alt absolute inset-0" />

      {/* Decorative Blobs */}
      <div className="animate-blob bg-primary/5 absolute left-1/4 top-0 h-72 w-72 rounded-full blur-3xl" />
      <div className="animation-delay-4000 animate-blob bg-secondary/5 absolute bottom-0 right-1/4 h-64 w-64 rounded-full blur-3xl" />

      <div className="layout relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light mb-6 text-lg md:text-xl"
          >
            {t("subtitle")}
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text text-base leading-relaxed md:text-lg"
          >
            {t("description")}
          </m.p>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <m.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Card
                className={cn(
                  "border-border/50 bg-background/80 hover:border-primary/30",
                  "h-full overflow-hidden backdrop-blur-sm",
                  "transform transition-all duration-500",
                  "hover:shadow-elegant hover:scale-[1.02]",
                  "cursor-pointer"
                )}
              >
                <div className="relative">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ExportedImage
                      src={service.image}
                      alt={t(`items.${service.key}.title`)}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Image Overlay */}
                    <div
                      className={cn(
                        "bg-linear-to-t absolute inset-0 from-black/60 via-black/20 to-transparent",
                        "transition-opacity duration-300 group-hover:from-black/40"
                      )}
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={cn(
                        "bg-linear-to-br absolute inset-0 opacity-60 transition-opacity duration-300",
                        service.gradient,
                        "group-hover:opacity-80"
                      )}
                    />

                    {/* Service Icon */}
                    <div className="absolute left-6 top-6">
                      <div
                        className={cn(
                          "flex h-16 w-16 items-center justify-center rounded-full",
                          "bg-white/90 backdrop-blur-sm",
                          "transform transition-all duration-300",
                          "group-hover:scale-110 group-hover:bg-white"
                        )}
                      >
                        <service.icon className="h-8 w-8 text-gray-700" />
                      </div>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div
                      className={cn(
                        "absolute bottom-4 right-4 opacity-0 transition-all duration-300",
                        "translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
                      )}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <svg
                          className="h-5 w-5 text-white rtl:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <CardContent className="p-8">
                    <h3
                      className={cn(
                        "text-primary mb-4 text-xl font-bold md:text-2xl",
                        "group-hover:text-primary-dark transition-colors duration-300"
                      )}
                    >
                      {t(`items.${service.key}.title`)}
                    </h3>

                    <p className="text mb-6 text-base leading-relaxed">
                      {t(`items.${service.key}.description`)}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {(t.raw(`items.${service.key}.features`) as string[]).map(
                        (feature, featureIndex) => (
                          <m.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + index * 0.1 + featureIndex * 0.05
                            }}
                            viewport={{ once: true }}
                            className="flex items-center"
                          >
                            <div
                              className={cn(
                                "flex h-6 w-6 items-center justify-center rounded-full",
                                "bg-primary/10 transition-colors duration-300",
                                "group-hover:bg-primary/20 ltr:mr-3 rtl:ml-3"
                              )}
                            >
                              <svg
                                className="text-primary h-3 w-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-light text-sm font-medium">
                              {feature}
                            </span>
                          </m.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </m.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className={cn(
              "mx-auto max-w-2xl rounded-2xl p-8",
              "bg-linear-to-r from-primary/5 via-primary/10 to-primary/5",
              "border-primary/20 border"
            )}
          >
            <h3 className="text-primary mb-4 text-2xl font-bold">
              {t("cta.title")}
            </h3>
            <p className="text-light mb-6 text-base">{t("cta.description")}</p>
            <m.a
              href="#contact"
              className={cn(
                "bg-primary hover:bg-primary-dark text-white",
                "inline-flex items-center rounded-full px-8 py-4",
                "font-semibold transition-all duration-300",
                "transform hover:scale-105 hover:shadow-lg"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("cta.button")}</span>
              <svg
                className="h-5 w-5 ltr:ml-2 rtl:mr-2 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </m.a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
