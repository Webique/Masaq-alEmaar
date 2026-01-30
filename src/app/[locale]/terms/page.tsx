import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

import { TermsContent } from "./terms-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });

  return {
    title: t("title"),
    description: t("description")
  };
}

export default function TermsPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <TermsContent />;
}
