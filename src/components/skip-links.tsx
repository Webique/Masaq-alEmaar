"use client";

import { useTranslations } from "next-intl";

export function SkipLinks() {
  const t = useTranslations("SkipLinks");

  const skipLinks = [
    { href: "#main-content", label: t("mainContent") },
    { href: "#navigation", label: t("navigation") },
    { href: "#services", label: t("services") },
    { href: "#gallery", label: t("gallery") },
    { href: "#contact", label: t("contact") }
  ];

  return (
    <div className="sr-only focus-within:not-sr-only">
      {skipLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="skip-link"
          onFocus={(e) => {
            // Ensure the skip link is visible when focused
            e.currentTarget.classList.remove("sr-only");
          }}
          onBlur={(e) => {
            // Hide the skip link when focus is lost
            e.currentTarget.classList.add("sr-only");
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
