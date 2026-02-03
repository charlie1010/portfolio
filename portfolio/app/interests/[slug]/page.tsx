import Link from "next/link";
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

  return (
    <div className="min-h-screen bg-background-warm">
      {/* Header Section */}
      <section className="relative flex min-h-[60vh] flex-col justify-end bg-background-warmest px-6 pb-12 pt-24 sm:px-8 lg:px-12">
        {/* Back link */}
        <Link
          href="/about#interests"
          className="absolute left-6 top-20 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent sm:left-8 lg:left-12"
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

      {/* In Development Banner */}
      <section className="bg-accent px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white sm:text-3xl">
            This page is still in development
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            I&apos;m currently building out this section. Want to learn more about my interests or discuss a project?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-[family-name:var(--font-syne)] text-sm font-semibold text-accent transition-all duration-300 hover:bg-card-cream hover:text-accent sm:text-base"
          >
            Connect with me
            <ArrowIcon direction="right" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-border bg-background px-6 py-4 sm:px-8 lg:px-12">
        <PageFooter />
      </div>
    </div>
  );
}
