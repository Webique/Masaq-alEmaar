"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

interface ProcessStep {
  key: string;
  number: number;
  title: string;
  description: string;
}

export function ProcessSection() {
  const t = useTranslations("IndexPage.process");

  const steps: ProcessStep[] = [
    {
      key: "consultation",
      number: 1,
      title: t("steps.consultation.title"),
      description: t("steps.consultation.description")
    },
    {
      key: "survey",
      number: 2,
      title: t("steps.survey.title"),
      description: t("steps.survey.description")
    },
    {
      key: "design",
      number: 3,
      title: t("steps.design.title"),
      description: t("steps.design.description")
    },
    {
      key: "implementation",
      number: 4,
      title: t("steps.implementation.title"),
      description: t("steps.implementation.description")
    },
    {
      key: "delivery",
      number: 5,
      title: t("steps.delivery.title"),
      description: t("steps.delivery.description")
    }
  ];

  return (
    <section className="bg-linear-to-b max-w-svw overflow-hidden from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-text-light mb-2 text-lg">{t("subtitle")}</p>
          <p className="text-text-light mx-auto max-w-2xl text-base">
            {t("description")}
          </p>
        </m.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="to-secondary from-primary bg-linear-to-r origin-start absolute end-0 start-0 top-20 h-0.5"
            />

            {/* Process Steps */}
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <m.div
                  key={step.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.5
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex flex-col text-center"
                >
                  {/* Step Number Circle */}
                  <div className="bg-primary relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                    <span className="text-lg font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <m.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.8
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="absolute -end-4 top-8 z-0"
                    >
                      <svg
                        width="32"
                        height="16"
                        viewBox="0 0 32 16"
                        fill="none"
                        className="text-secondary rtl:rotate-180"
                      >
                        <path
                          d="M24 1L31 8L24 15M31 8H1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </m.div>
                  )}

                  {/* Step Content */}
                  <div className="flex min-h-[160px] flex-1 flex-col rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <h3 className="text-primary mb-3 text-lg font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-text-light flex-1 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-2xl">
            {/* Vertical Timeline Line */}
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="to-secondary from-primary bg-linear-to-b absolute bottom-0 start-8 top-0 w-0.5 origin-top"
            />

            {/* Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <m.div
                  key={step.key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.5
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-start"
                >
                  {/* Step Number Circle */}
                  <div className="bg-primary relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg">
                    <span className="text-lg font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="ms-6 flex-1 rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <h3 className="text-primary mb-3 text-lg font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Down Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <m.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.8
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="absolute -bottom-4 start-7 z-0"
                    >
                      <svg
                        width="16"
                        height="32"
                        viewBox="0 0 16 32"
                        fill="none"
                        className="text-secondary"
                      >
                        <path
                          d="M1 24L8 31L15 24M8 31V1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </m.div>
                  )}
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
