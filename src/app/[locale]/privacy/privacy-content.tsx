"use client";

import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export function PrivacyContent() {
  const t = useTranslations("PrivacyPage");

  return (
    <main id="main-content" role="main">
      <section className="bg-background relative overflow-hidden py-20 lg:py-32">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(5, 31, 53, 0.2) 2px, transparent 2px)`,
            backgroundSize: "30px 30px"
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
                {t("title")}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t("subtitle")}
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-lg md:p-12">
              <p className="text-foreground mb-8 text-lg leading-relaxed">
                {t("intro")}
              </p>

              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">{t("sections.dataCollection.title")}</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t("sections.dataCollection.description")}
                </p>
                <ul className="text-foreground mb-4 list-inside list-disc space-y-2 leading-relaxed">
                  {t.raw("sections.dataCollection.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-foreground leading-relaxed">
                  {t("sections.dataCollection.technical")}
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">{t("sections.dataUsage.title")}</h2>
                <p className="text-foreground mb-4 leading-relaxed">{t("sections.dataUsage.description")}</p>
                <ul className="text-foreground mb-4 list-inside list-disc space-y-2 leading-relaxed">
                  {t.raw("sections.dataUsage.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">{t("sections.dataSharing.title")}</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t("sections.dataSharing.noSell")}
                </p>
                <p className="text-foreground leading-relaxed">
                  {t("sections.dataSharing.description")}
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">{t("sections.dataProtection.title")}</h2>
                <p className="text-foreground leading-relaxed">
                  {t("sections.dataProtection.description")}
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">{t("sections.rights.title")}</h2>
                <p className="text-foreground leading-relaxed">
                  {t("sections.rights.description")}
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">{t("sections.contact.title")}</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t("sections.contact.description")}
                </p>
                <div className="text-foreground space-y-2 leading-relaxed">
                  <p>
                    <strong>{t("sections.contact.whatsapp")}</strong>{" "}
                    <a
                      href={`tel:${siteConfig.support.phone}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.support.phone}
                    </a>
                  </p>
                  <p>
                    <strong>{t("sections.contact.email")}</strong>{" "}
                    <a
                      href={`mailto:${siteConfig.support.email}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.support.email}
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
