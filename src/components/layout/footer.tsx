"use client";

import { MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import SnapchatIcon from "@/assets/icons/snapchat.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import TwitterIcon from "@/assets/icons/x.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("testimonials"), href: "#testimonials" },
    { label: t("faq"), href: "#faq" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-secondary relative text-white">
      {/* Top Gradient Line */}
      <div className="from-primary via-accent to-primary bg-linear-to-r absolute inset-x-0 top-0 h-1" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,184,0,0.05)_0%,transparent_50%)]" />

      <div className="container relative mx-auto px-4 py-12 pb-8 sm:px-6 sm:py-16 sm:pb-12 lg:py-20 lg:pb-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="mb-6">
              <Logo />
            </div>

            <p className="mb-6 max-w-md text-xs leading-relaxed text-white/60 sm:mb-8 sm:text-sm">
              {t("companyDescription")}
            </p>

            {/* Professional Tagline */}
            <div className="text-primary/80 text-xs font-medium italic sm:text-sm">
              {t("tagline")}
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-primary mb-4 text-xs font-semibold uppercase tracking-widest sm:mb-6">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <m.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary inline-block text-xs text-white/60 transition-all duration-300 hover:ps-2 sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-primary mb-4 text-xs font-semibold uppercase tracking-widest sm:mb-6">
              {t("contactUs")}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Phone */}
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                className="flex items-center gap-2 text-white/60 sm:gap-3"
                whileHover={{ x: 5, color: "rgba(255,255,255,1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-xl sm:h-10 sm:w-10">
                  <Phone className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span dir="ltr" className="text-xs font-medium sm:text-sm">
                  {siteConfig.support.phone}
                </span>
              </m.a>

              {/* WhatsApp */}
              <m.a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 sm:gap-3"
                whileHover={{ x: 5, color: "rgba(255,255,255,1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-xl sm:h-10 sm:w-10">
                  <WhatsAppIcon className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs font-medium sm:text-sm">
                  {t("whatsapp")}
                </span>
              </m.a>

              {/* Location */}
              <m.a
                href="#contact"
                className="flex items-center gap-2 text-white/60 sm:gap-3"
                whileHover={{ x: 5, color: "rgba(255,255,255,1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-xl sm:h-10 sm:w-10">
                  <MapPin className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs font-medium sm:text-sm">
                  {t("location")}
                </span>
              </m.a>

              {/* Social Media Links */}
              <div className="pt-3 sm:pt-4">
                <h4 className="text-primary mb-3 text-xs font-semibold uppercase tracking-widest sm:mb-4">
                  {t("followUs")}
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Snapchat */}
                  <m.a
                    href={siteConfig.links.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-xl transition-colors sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SnapchatIcon className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                  </m.a>

                  {/* Twitter/X */}
                  <m.a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-xl transition-colors sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TwitterIcon className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                  </m.a>

                  {/* WhatsApp (as social link) */}
                  <m.a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-xl transition-colors sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <WhatsAppIcon className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                  </m.a>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10 sm:my-10" />

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4"
        >
          <p className="text-xs text-white/40">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
}
