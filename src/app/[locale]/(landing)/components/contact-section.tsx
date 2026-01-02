"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
// Import icons
import EmailIcon from "@/assets/icons/email.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";

export function ContactSection() {
  const t = useTranslations("IndexPage.contact");

  const contactItems = [
    {
      icon: PhoneIcon,
      label: t("info.phone.label"),
      value: t("info.phone.value"),
      action: t("info.phone.action"),
      href: `tel:${siteConfig.support.phone}`,
      color: "text-primary"
    },
    {
      icon: WhatsAppIcon,
      label: t("info.whatsapp.label"),
      value: t("info.whatsapp.value"),
      action: t("info.whatsapp.action"),
      href: siteConfig.links.whatsapp,
      color: "text-green-600"
    },
    {
      icon: EmailIcon,
      label: t("info.email.label"),
      value: t("info.email.value"),
      action: t("info.email.action"),
      href: `mailto:${siteConfig.support.email}`,
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: InstagramIcon,
      label: t("social.instagram"),
      href: siteConfig.links.instagram,
      color: "text-pink-600"
    },
    {
      icon: TikTokIcon,
      label: t("social.tiktok"),
      href: siteConfig.links.tiktok,
      color: "text-black"
    }
  ];

  return (
    <section id="contact" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mb-2 text-xl">{t("subtitle")}</p>
          <p className="text-foreground mx-auto max-w-2xl text-lg">
            {t("description")}
          </p>
        </m.div>

        {/* Contact Cards */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card group rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`bg-muted mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110`}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>

              <h3 className="text-primary mb-2 text-xl font-semibold">
                {item.label}
              </h3>

              <p className="text-foreground mb-4 font-medium">{item.value}</p>

              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors duration-300"
              >
                {item.action}
              </a>
            </m.div>
          ))}
        </div>

        {/* Location Card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card mx-auto mb-16 max-w-md rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="bg-muted mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              className="text-primary h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h3 className="text-primary mb-2 text-xl font-semibold">
            {t("info.location.label")}
          </h3>

          <p className="text-foreground mb-4 font-medium">
            {t("info.location.value")}
          </p>
        </m.div>

        {/* Social Media Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h3 className="text-primary mb-8 text-2xl font-semibold">
            {t("social.title")}
          </h3>

          <div className="mb-12 flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <m.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card group inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                aria-label={social.label}
              >
                <social.icon
                  className={`h-7 w-7 ${social.color} transition-transform duration-300 group-hover:scale-110`}
                />
              </m.a>
            ))}
          </div>

          {/* CTA Button */}
          <m.a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <WhatsAppIcon className="mr-3 h-6 w-6" />
            {t("cta")}
          </m.a>
        </m.div>
      </div>
    </section>
  );
}
