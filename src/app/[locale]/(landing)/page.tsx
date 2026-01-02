import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { GallerySection } from "./components/gallery-section";
import { HeroSection } from "./components/hero-section";
import { ProcessSection } from "./components/process-section";
import { ServicesSection } from "./components/services-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main id="main-content" role="main">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
