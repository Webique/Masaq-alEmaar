"use client";

import { MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
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
    { label: t("gallery"), href: "#gallery" },
    { label: t("process"), href: "#process" },
    { label: t("contact"), href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: siteConfig.links.instagram,
      icon: (
        <svg
          className="h-4 w-4 text-white sm:h-5 sm:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: "masaq.al"
    },
    {
      name: "TikTok",
      href: siteConfig.links.tiktok,
      icon: (
        <svg
          className="h-4 w-4 text-white sm:h-5 sm:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      label: ".masaq"
    },
    {
      name: "WhatsApp",
      href: siteConfig.links.whatsapp,
      icon: <WhatsAppIcon className="h-4 w-4 text-white sm:h-5 sm:w-5" />,
      label: t("whatsapp")
    }
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
              <Logo className="w-24 sm:w-24" />
            </div>

            <p className="mb-6 max-w-md text-xs leading-relaxed text-white/60 sm:mb-8 sm:text-sm">
              {t("companyDescription")}
            </p>

            {/* Professional Tagline */}
            <div className="text-xs font-medium italic text-white/80 sm:text-sm">
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white sm:mb-6">
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
                    className="inline-block text-xs text-white/60 transition-all duration-300 hover:ps-2 hover:text-white sm:text-sm"
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white sm:mb-6">
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
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 sm:h-10 sm:w-10">
                  <Phone className="h-4 w-4 text-white sm:h-5 sm:w-5" />
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
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 sm:h-10 sm:w-10">
                  <WhatsAppIcon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
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
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 sm:h-10 sm:w-10">
                  <MapPin className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs font-medium sm:text-sm">
                  {t("location")}
                </span>
              </m.a>

              {/* Social Media Links */}
              <div className="pt-3 sm:pt-4">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white sm:mb-4">
                  {t("followUs")}
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <m.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20 sm:h-10 sm:w-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={`${t("followUs")} ${social.label}`}
                      aria-label={`${t("followUs")} ${social.label}`}
                    >
                      {social.icon}
                    </m.a>
                  ))}
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
