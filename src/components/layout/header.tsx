"use client";

import { MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import * as React from "react";

import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.contact"), href: "#contact" }
  ];

  return (
    <header
      id="navigation"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        "shadow-primary/5 bg-white/95 shadow-lg lg:bg-transparent lg:shadow-none",
        isScrolled && "backdrop-blur-lg lg:bg-white/95 lg:shadow-lg"
      )}
      role="banner"
    >
      {/* Top accent line */}
      <div
        className={cn(
          "bg-linear-to-r from-primary via-accent to-primary absolute inset-x-0 top-0 h-1 transition-opacity duration-500",
          "opacity-100 lg:opacity-0",
          isScrolled && "lg:opacity-100"
        )}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20 lg:h-24">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Logo className="transition-all duration-300 hover:scale-105" />
          </m.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-secondary hover:text-primary group relative px-4 py-2 text-sm font-medium transition-all duration-300",
                    "hover:bg-primary/10 focus:ring-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA & Language */}
          <m.div
            className="hidden items-center gap-3 lg:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={true} />

            <Button
              size="lg"
              className="bg-primary shadow-primary/30 hover:bg-primary-dark hover:shadow-primary/40 focus:ring-primary group h-10 min-w-[100px] gap-2 rounded-full px-4 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 sm:h-11 sm:min-w-[110px] sm:px-6 sm:text-sm"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us via WhatsApp"
              >
                <WhatsAppIcon
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                {t("cta")}
              </Link>
            </Button>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher className="w-auto" />

            <button
              className="text-secondary hover:bg-primary/10 focus:ring-primary rounded-lg p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="space-y-1.5">
                <m.div
                  animate={
                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-current"
                />
                <m.div
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-current"
                />
                <m.div
                  animate={
                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-current"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          id="mobile-menu"
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden lg:hidden"
          aria-hidden={!isMenuOpen}
        >
          <nav
            className="space-y-1 py-4 sm:py-6"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-secondary hover:bg-primary/10 hover:text-primary focus:ring-primary block rounded-xl px-4 py-3 text-base font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              </m.div>
            ))}

            {/* Mobile CTA */}
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : -20
              }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-3 px-4 pt-3 sm:mt-4 sm:pt-4"
            >
              <Button
                className="bg-primary hover:bg-primary-dark focus:ring-primary h-11 w-full gap-3 rounded-xl text-base font-semibold text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 sm:h-12"
                asChild
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.whatsapp}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Contact us via WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {t("cta")}
                </a>
              </Button>
            </m.div>
          </nav>
        </m.div>
      </div>
    </header>
  );
}
