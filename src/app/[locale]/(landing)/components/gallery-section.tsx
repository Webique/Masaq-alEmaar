"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  category: "residential" | "commercial" | "interior" | "structural";
  title: string;
  description: string;
}

export function GallerySection() {
  const t = useTranslations("IndexPage.gallery");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Gallery images organized by categories
  const galleryImages: GalleryImage[] = [
    // Residential Projects
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.44.jpeg",
      alt: "Luxury residential villa exterior",
      category: "residential",
      title: t("images.modernVilla.title"),
      description: t("images.modernVilla.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.45.jpeg",
      alt: "Residential interior living space",
      category: "residential",
      title: t("images.familyHome.title"),
      description: t("images.familyHome.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.45 (1).jpeg",
      alt: "Residential bedroom design",
      category: "residential",
      title: t("images.masterBedroom.title"),
      description: t("images.masterBedroom.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.45 (2).jpeg",
      alt: "Residential kitchen design",
      category: "residential",
      title: t("images.modernKitchen.title"),
      description: t("images.modernKitchen.description")
    },

    // Commercial Projects
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.46.jpeg",
      alt: "Commercial building exterior",
      category: "commercial",
      title: t("images.officeComplex.title"),
      description: t("images.officeComplex.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.46 (1).jpeg",
      alt: "Commercial interior space",
      category: "commercial",
      title: t("images.businessCenter.title"),
      description: t("images.businessCenter.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.46 (2).jpeg",
      alt: "Commercial retail space",
      category: "commercial",
      title: t("images.retailShowroom.title"),
      description: t("images.retailShowroom.description")
    },

    // Interior Design
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.47.jpeg",
      alt: "Luxury interior design",
      category: "interior",
      title: t("images.elegantInterior.title"),
      description: t("images.elegantInterior.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.47 (1).jpeg",
      alt: "Modern interior living room",
      category: "interior",
      title: t("images.contemporaryLiving.title"),
      description: t("images.contemporaryLiving.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.47 (2).jpeg",
      alt: "Interior dining area",
      category: "interior",
      title: t("images.diningRoom.title"),
      description: t("images.diningRoom.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.47 (3).jpeg",
      alt: "Interior bathroom design",
      category: "interior",
      title: t("images.luxuryBathroom.title"),
      description: t("images.luxuryBathroom.description")
    },

    // Structural Work
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.48.jpeg",
      alt: "Construction structural work",
      category: "structural",
      title: t("images.foundationWork.title"),
      description: t("images.foundationWork.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.48 (1).jpeg",
      alt: "Building structure progress",
      category: "structural",
      title: t("images.structuralFramework.title"),
      description: t("images.structuralFramework.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.48 (2).jpeg",
      alt: "Construction site progress",
      category: "structural",
      title: t("images.constructionProgress.title"),
      description: t("images.constructionProgress.description")
    },
    {
      src: "/images/WhatsApp Image 2026-01-02 at 21.21.49.jpeg",
      alt: "Completed structural work",
      category: "structural",
      title: t("images.completedStructure.title"),
      description: t("images.completedStructure.description")
    }
  ];

  const categories = [
    { key: "all", label: t("allProjects") },
    { key: "residential", label: t("categories.residential") },
    { key: "commercial", label: t("categories.commercial") },
    { key: "interior", label: t("categories.interior") },
    { key: "structural", label: t("categories.structural") }
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Handle body overflow when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="bg-background absolute inset-0" />

      {/* Decorative Blobs */}
      <div className="animate-blob bg-secondary/5 absolute right-1/4 top-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="animation-delay-2000 animate-blob bg-primary/5 absolute bottom-0 left-1/4 h-80 w-80 rounded-full blur-3xl" />

      <div className="layout relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light mb-6 text-lg md:text-xl"
          >
            {t("subtitle")}
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text text-base leading-relaxed md:text-lg"
          >
            {t("description")}
          </m.p>
        </m.div>

        {/* Category Filter */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <m.button
              key={category.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category.key)}
              className={cn(
                "rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
                "flex transform items-center justify-center border-2 hover:scale-105",
                selectedCategory === category.key
                  ? "bg-primary border-primary shadow-elegant text-white"
                  : "bg-background text-text border-border hover:border-primary/50 hover:bg-primary/5"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block">{category.label}</span>
            </m.button>
          ))}
        </m.div>

        {/* Gallery Grid */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredImages.map((image, index) => (
            <m.div
              key={`${image.src}-${selectedCategory}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index % 8),
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <Card
                className={cn(
                  "border-border/50 bg-background/80 overflow-hidden",
                  "transform transition-all duration-500 hover:scale-[1.02]",
                  "hover:shadow-elegant hover:border-primary/30",
                  "backdrop-blur-sm"
                )}
              >
                <div className="aspect-4/3 relative overflow-hidden">
                  <ExportedImage
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className={cn(
                      "h-full w-full object-cover transition-all duration-700",
                      "group-hover:scale-110"
                    )}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />

                  {/* Image Overlay */}
                  <div
                    className={cn(
                      "bg-linear-to-t absolute inset-0 from-black/60 via-transparent to-transparent",
                      "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    )}
                  />

                  {/* Category Badge */}
                  <div className="absolute left-3 top-3">
                    <span
                      className={cn(
                        "bg-primary/90 rounded-full px-3 py-1 text-xs font-medium text-white",
                        "backdrop-blur-sm transition-all duration-300",
                        "translate-y-2 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      )}
                    >
                      {t(`categories.${image.category}`)}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div
                    className={cn(
                      "absolute bottom-3 right-3 opacity-0 transition-all duration-300",
                      "translate-x-2 transform group-hover:translate-x-0 group-hover:opacity-100"
                    )}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3
                    className={cn(
                      "text-primary mb-2 text-lg font-semibold",
                      "group-hover:text-primary-dark transition-colors duration-300"
                    )}
                  >
                    {image.title}
                  </h3>
                  <p className="text-light text-sm leading-relaxed">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>

        {/* View All CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <m.button
            className={cn(
              "bg-primary hover:bg-primary-dark text-white",
              "inline-flex items-center justify-center rounded-full px-8 py-4",
              "font-semibold transition-all duration-300",
              "hover:shadow-elegant transform hover:scale-105"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-flex items-center gap-3">
              <span>{t("viewAll")}</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </m.button>
        </m.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className={cn(
                "absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center",
                "rounded-full bg-black/50 text-white backdrop-blur-sm",
                "transition-all duration-300 hover:bg-black/70"
              )}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <ExportedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
                sizes="90vw"
              />
            </div>

            {/* Image Info */}
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-primary text-2xl font-bold">
                  {selectedImage.title}
                </h3>
                <span
                  className={cn(
                    "bg-primary/10 rounded-full px-3 py-1 text-sm font-medium",
                    "text-primary"
                  )}
                >
                  {t(`categories.${selectedImage.category}`)}
                </span>
              </div>
              <p className="text-light text-base leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </m.div>
        </m.div>
      )}
    </section>
  );
}
