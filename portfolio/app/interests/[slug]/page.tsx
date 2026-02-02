import Link from "next/link";
import Image from "next/image";
import { interests } from "@/app/lib/data";
import { ArrowIcon, PageFooter } from "@/app/components/ui";
import { notFound } from "next/navigation";

// Generate static params for all interests
export function generateStaticParams() {
  return interests.map((interest) => ({
    slug: interest.slug,
  }));
}

// Get interest by slug
function getInterestBySlug(slug: string) {
  return interests.find((i) => i.slug === slug);
}

export default async function InterestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const interest = getInterestBySlug(slug);

  if (!interest) {
    notFound();
  }

  // Use actual gallery images if available, otherwise generate placeholders
  const galleryImages = interest.galleryImages || [];
  const galleryItems = galleryImages.length > 0
    ? galleryImages.map((src, i) => ({
        id: i + 1,
        src,
        aspectRatio: i % 3 === 0 ? "tall" : i % 3 === 1 ? "wide" : "square",
      }))
    : Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        src: undefined,
        aspectRatio: i % 3 === 0 ? "tall" : i % 3 === 1 ? "wide" : "square",
      }));

  return (
    <div className="min-h-screen bg-background-warm">
      {/* Header Section */}
      <section className="relative flex min-h-[60vh] flex-col justify-end bg-background-warmest px-6 pb-12 pt-24 sm:px-8 lg:px-12">
        {/* Back link */}
        <Link
          href="/about#interests"
          className="absolute left-6 top-20 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent-dark sm:left-8 lg:left-12"
        >
          <ArrowIcon direction="left" className="h-4 w-4" />
          Back to About
        </Link>

        {/* Interest number and title */}
        <div className="flex items-end gap-6">
          <span className="font-[family-name:var(--font-syne)] text-7xl font-bold text-accent/20 sm:text-8xl lg:text-9xl">
            0{interests.findIndex((i) => i.slug === slug) + 1}
          </span>
          <div className="pb-2">
            <div className="mb-3 h-[2px] w-12 bg-accent" />
            <h1 className="font-[family-name:var(--font-syne)] text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
              {interest.title}
            </h1>
          </div>
        </div>

        {/* Full description */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground-muted lg:text-xl">
          {interest.fullDescription}
        </p>
      </section>

      {/* Gallery Section */}
      <section className="bg-background px-6 py-12 sm:px-8 lg:px-12">
        <h2 className="text-caption mb-8 text-accent-dark">Gallery</h2>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative mb-4 break-inside-avoid overflow-hidden ${
                item.aspectRatio === "tall"
                  ? "aspect-[3/4]"
                  : item.aspectRatio === "wide"
                  ? "aspect-[4/3]"
                  : "aspect-square"
              }`}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={`${interest.title} gallery image ${item.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="h-full w-full bg-placeholder" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-border bg-background px-6 py-4 sm:px-8 lg:px-12">
        <PageFooter />
      </div>
    </div>
  );
}
