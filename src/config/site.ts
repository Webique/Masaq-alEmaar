export const siteConfig = {
  links: {
    instagram: "https://instagram.com/masaq.al",
    tiktok: "https://tiktok.com/@.masaq",
    whatsapp:
      "https://wa.me/966507005801?text=مرحباً%20بك%20في%20مساق%20الأعمار%20للإنشاءات%20والمعمار"
  },

  support: {
    phone: "+966507005801",
    email: "info@masaq.com",
    whatsapp: "+966507005801"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
