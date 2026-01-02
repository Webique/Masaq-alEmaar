export const siteConfig = {
  company: {
    name: "Masaq Al-Amaar",
    nameAr: "مساق الأعمار",
    tagline: "Building Excellence, Creating Dreams",
    taglineAr: "نبني التميز، نحقق الأحلام",
    description:
      "Professional construction and architecture company specializing in integrated design and implementation of residential and commercial projects",
    descriptionAr:
      "شركة إنشاءات ومعمار متخصصة في التصميم والتنفيذ المتكامل للمشاريع السكنية والتجارية"
  },

  links: {
    instagram: "https://instagram.com/masaq.al",
    tiktok: "https://tiktok.com/@.masaq",
    whatsapp:
      "https://wa.me/966507005801?text=مرحباً%20بك%20في%20مساق%20الأعمار%20للإنشاءات%20والمعمار"
  },

  support: {
    phone: "0507005801",
    email: "info@masaq.com",
    whatsapp: "0507005801",
    landline: ""
  },

  location: {
    city: "Jeddah",
    cityAr: "جدة",
    district: "",
    country: "Saudi Arabia",
    countryAr: "المملكة العربية السعودية"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
