export const siteConfig = {
  links: {
    instagram: "#",
    snapchat: "https://snapchat.com/add/zimam_905",
    twitter: "https://twitter.com/Zimam0905",
    whatsapp:
      "https://wa.me/966560008905?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%A8%D9%83%20%D9%81%D9%8A%20%D8%B2%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%B1%D8%A3%D9%8A%20%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9"
  },

  support: {
    phone: "0560008905",
    email: "info@zimam-alrai.com",
    whatsapp: "0560008905",
    landline: ""
  },

  location: {
    city: "Dammam",
    district: "Al-Husam",
    country: "Saudi Arabia"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
