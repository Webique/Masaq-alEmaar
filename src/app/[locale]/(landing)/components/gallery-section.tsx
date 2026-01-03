"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  id: number;
  category: "residential" | "commercial" | "interior" | "structural";
}

// Gallery images with manual category assignment - moved outside component for stability
const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/1.jpeg",
    id: 1,
    category: "structural"
  },
  {
    src: "/images/gallery/2.jpeg",
    id: 2,
    category: "structural"
  },
  {
    src: "/images/gallery/3.jpeg",
    id: 3,
    category: "residential"
  },
  {
    src: "/images/gallery/4.jpeg",
    id: 4,
    category: "residential"
  },
  {
    src: "/images/gallery/5.jpeg",
    id: 5,
    category: "residential"
  },

  {
    src: "/images/gallery/6.jpeg",
    id: 6,
    category: "residential"
  },
  {
    src: "/images/gallery/7.jpeg",
    id: 7,
    category: "structural"
  },
  {
    src: "/images/gallery/8.jpeg",
    id: 8,
    category: "structural"
  },
  {
    src: "/images/gallery/9.jpeg",
    id: 9,
    category: "interior"
  },
  {
    src: "/images/gallery/10.jpeg",
    id: 10,
    category: "interior"
  },

  {
    src: "/images/gallery/11.jpeg",
    id: 11,
    category: "interior"
  },
  {
    src: "/images/gallery/12.jpeg",
    id: 12,
    category: "interior"
  },
  {
    src: "/images/gallery/13.jpeg",
    id: 13,
    category: "interior"
  },
  {
    src: "/images/gallery/14.jpeg",
    id: 14,
    category: "interior"
  },
  {
    src: "/images/gallery/15.jpeg",
    id: 15,
    category: "interior"
  },

  {
    src: "/images/gallery/16.jpeg",
    id: 16,
    category: "interior"
  },
  {
    src: "/images/gallery/17.jpeg",
    id: 17,
    category: "interior"
  },
  {
    src: "/images/gallery/18.jpeg",
    id: 18,
    category: "commercial"
  },
  {
    src: "/images/gallery/19.jpeg",
    id: 19,
    category: "commercial"
  },
  {
    src: "/images/gallery/20.jpeg",
    id: 20,
    category: "commercial"
  },

  {
    src: "/images/gallery/21.jpeg",
    id: 21,
    category: "commercial"
  },
  {
    src: "/images/gallery/22.jpeg",
    id: 22,
    category: "commercial"
  },
  {
    src: "/images/gallery/23.jpeg",
    id: 23,
    category: "commercial"
  },
  {
    src: "/images/gallery/24.jpeg",
    id: 24,
    category: "commercial"
  },
  {
    src: "/images/gallery/25.jpeg",
    id: 25,
    category: "commercial"
  },
  {
    src: "/images/gallery/26.jpeg",
    id: 26,
    category: "commercial"
  },
  {
    src: "/images/gallery/27.jpeg",
    id: 27,
    category: "commercial"
  },
  {
    src: "/images/gallery/28.jpeg",
    id: 28,
    category: "interior"
  },
  {
    src: "/images/gallery/29.jpeg",
    id: 29,
    category: "residential"
  },
  {
    src: "/images/gallery/30.jpeg",
    id: 30,
    category: "residential"
  },
  {
    src: "/images/gallery/31.jpeg",
    id: 31,
    category: "residential"
  }
];

export function GallerySection() {
  const t = useTranslations("IndexPage.gallery");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories = [
    { key: "all", label: t("allProjects") },
    { key: "residential", label: t("categories.residential") },
    { key: "commercial", label: t("categories.commercial") },
    { key: "interior", label: t("categories.interior") },
    { key: "structural", label: t("categories.structural") }
  ];

  // Helper function to generate alt text based on category
  const getImageAlt = (image: GalleryImage) => {
    return `${t(`categories.${image.category}`)} project ${image.id}`;
  };

  const filteredImages = useMemo(
    () =>
      selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === selectedCategory),
    [selectedCategory]
  );

  // Show different number of images based on screen size
  const getInitialImageCount = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 6; // Mobile: 6 images (2 columns × 3 rows)
      if (width < 1024) return 8; // Tablet: 8 images (2 columns × 4 rows)
      if (width < 1280) return 9; // Desktop: 9 images (3 columns × 3 rows)
      return 12; // Large desktop: 12 images (4 columns × 3 rows)
    }
    return 12; // Default for SSR
  };

  const [initialCount, setInitialCount] = useState(getInitialImageCount());

  // Update initial count on window resize
  useEffect(() => {
    const handleResize = () => {
      setInitialCount(getInitialImageCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show only initial count images for display
  const displayedImages: GalleryImage[] = filteredImages.slice(0, initialCount);

  // Reset category selection
  const handleCategoryChange = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
  };

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedImage) return;

      const newIndex =
        direction === "next"
          ? (currentImageIndex + 1) % filteredImages.length
          : (currentImageIndex - 1 + filteredImages.length) %
            filteredImages.length;

      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    },
    [selectedImage, currentImageIndex, filteredImages]
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex, navigateImage]);

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
              onClick={() => handleCategoryChange(category.key)}
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
          {displayedImages.map((image, index) => (
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
              onClick={() => openLightbox(image, index)}
            >
              <div
                className={cn(
                  "border-border/50 bg-background/80 overflow-hidden rounded-xl",
                  "transform transition-all duration-500 hover:scale-[1.02]",
                  "hover:shadow-elegant hover:border-primary/30",
                  "shadow-lg backdrop-blur-sm"
                )}
              >
                <div className="aspect-4/3 relative overflow-hidden">
                  <ExportedImage
                    src={image.src}
                    alt={getImageAlt(image)}
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

                  {/* Image Number Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className={cn(
                        "rounded-full bg-black/50 px-2 py-1 text-xs font-medium text-white",
                        "backdrop-blur-sm transition-all duration-300",
                        "translate-y-2 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      )}
                    >
                      #{image.id}
                    </span>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* View All CTA - Opens Lightbox */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <m.button
            onClick={() => openLightbox(filteredImages[0], 0)}
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
                className="h-5 w-5 rtl:rotate-180"
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

      {/* Lightbox Modal - Simple Version */}
      {selectedImage && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className={cn(
                "absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center",
                "sm:right-4 sm:top-4 sm:h-12 sm:w-12",
                "rounded-full bg-black/50 text-white backdrop-blur-sm",
                "transition-all duration-300 hover:bg-black/70"
              )}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
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

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className={cn(
                "absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center",
                "sm:left-4 sm:h-12 sm:w-12",
                "rounded-full bg-black/50 text-white backdrop-blur-sm",
                "transition-all duration-300 hover:bg-black/70"
              )}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => navigateImage("next")}
              className={cn(
                "absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center",
                "sm:right-4 sm:h-12 sm:w-12",
                "rounded-full bg-black/50 text-white backdrop-blur-sm",
                "transition-all duration-300 hover:bg-black/70"
              )}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <ExportedImage
                src={selectedImage.src}
                alt={getImageAlt(selectedImage)}
                width={1200}
                height={800}
                className="block h-auto max-h-[70vh] w-full object-contain"
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 90vw, 1200px"
              />
            </div>

            {/* Image Info */}
            <div className="border-t border-gray-100 p-4 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-primary text-lg font-bold sm:text-2xl">
                    {t("imageTitle", { number: selectedImage.id })}
                  </h3>
                  <p className="text-light text-xs sm:text-sm">
                    {t("imageCounter", {
                      current: currentImageIndex + 1,
                      total: filteredImages.length
                    })}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-light hidden text-xs sm:block sm:text-sm">
                    Use arrow keys or buttons to navigate
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </section>
  );
}
