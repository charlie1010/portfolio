"use client";

import Link from "next/link";
import Image from "next/image";
import { categories, siteConfig } from "@/app/lib/data";
import { ScrollIndicator, PageFooter } from "@/app/components/ui";

// Category Icons
function StructureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

function ExplorationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Compass/map navigation icon */}
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ExecutionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Hammer/build icon */}
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ConnectionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* People/community icon */}
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Get icon for category
function getCategoryIcon(categoryId: string, className: string) {
  const icons: Record<string, React.ReactNode> = {
    "category-1": <StructureIcon className={className} />,
    "category-2": <ExplorationIcon className={className} />,
    "category-3": <ExecutionIcon className={className} />,
    "category-4": <ConnectionIcon className={className} />,
  };
  return icons[categoryId] || null;
}

// Placeholder sketch - shown when no sketchImage is provided
function PlaceholderSketch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 140" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Background shape */}
      <rect x="10" y="10" width="180" height="120" rx="4" fill="#F5F0E8" stroke="#3D4A0F" strokeWidth="1" strokeDasharray="4 4" />
      {/* Placeholder person */}
      <circle cx="100" cy="50" r="15" stroke="#3D4A0F" strokeWidth="1.5" fill="#C9E033" fillOpacity="0.3" />
      <path d="M100 65 L100 95 M100 75 L85 85 M100 75 L115 85 M100 95 L85 115 M100 95 L115 115" stroke="#3D4A0F" strokeWidth="1.5" />
      {/* Text indicator */}
      <text x="100" y="135" textAnchor="middle" fontSize="8" fill="#5C554C" fontFamily="sans-serif">Add sketch</text>
    </svg>
  );
}

// Company logos for the marquee banner
// Add your logo images to: /public/images/logos/
// Set invert: true for white logos that need to appear dark
// Set wide: true for extra-wide logos that need more space
const companyLogos = [
  { name: "Samsung", logo: "/images/logos/samsung.png" },
  { name: "Google", logo: "/images/logos/google.png" },
  { name: "Kaiser Permanente", logo: "/images/logos/kaiser.png", wide: true },
  { name: "Deloitte", logo: "/images/logos/deloitte.png" },
  { name: "Berkeley SkyDeck", logo: "/images/logos/skydeck.png" },
  { name: "Carle Health", logo: "/images/logos/carle.png" },
  { name: "mPharma", logo: "/images/logos/mpharma.png" },
  { name: "KariOut", logo: "/images/logos/kariout.png", invert: true },
];

// Logo Banner Component - Auto-scrolling company logos
function LogoBanner() {
  const getLogoContainerClass = (logo: typeof companyLogos[0]) => {
    const baseClass = "mx-6 flex h-10 shrink-0 items-center justify-center px-2 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:mx-8 sm:h-12 md:mx-10 md:h-12";
    const widthClass = 'wide' in logo && logo.wide
      ? "w-44 sm:w-52 md:w-60"
      : "w-28 sm:w-32 md:w-36";
    return `${baseClass} ${widthClass}`;
  };

  return (
    <div className="w-full py-2 md:py-3">
      {/* Marquee container */}
      <div className="logo-marquee-container">
        <div className="logo-marquee">
          {/* First set of logos */}
          {companyLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className={getLogoContainerClass(logo)}
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                width={200}
                height={48}
                className={`h-auto max-h-full w-auto max-w-full object-contain ${'invert' in logo && logo.invert ? 'invert' : ''}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companyLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className={getLogoContainerClass(logo)}
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                width={200}
                height={48}
                className={`h-auto max-h-full w-auto max-w-full object-contain ${'invert' in logo && logo.invert ? 'invert' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Editorial Project Card - Sketch-focused, light background with shadow on mobile
function EditorialProjectCard({
  title,
  subtitle,
  slug,
  sketchImage,
  company,
  year,
  categoryId,
}: {
  title: string;
  subtitle: string;
  slug: string;
  sketchImage?: string;
  company?: string;
  year?: string;
  categoryId?: string;
}) {
  // Category colors for company name
  const companyColors: Record<string, string> = {
    "category-1": "text-category-structure",
    "category-2": "text-category-exploration",
    "category-3": "text-category-execution",
    "category-4": "text-category-connection",
  };
  const companyColor = categoryId ? companyColors[categoryId] || "text-accent" : "text-accent";

  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-sm bg-background-elevated shadow-sm transition-all duration-300 hover:shadow-md md:bg-card-cream md:shadow-none"
    >
      {/* Image area - takes majority of card */}
      <div className="relative flex-1 overflow-hidden">
        {sketchImage ? (
          <Image
            src={sketchImage}
            alt={title}
            fill
            className="object-contain object-center md:object-cover md:object-left"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4">
            <PlaceholderSketch className="h-full w-full max-h-[140px]" />
          </div>
        )}
      </div>

      {/* Content area - compact height */}
      <div className="shrink-0 border-t border-border/30 bg-background-warm/30 px-4 py-2.5 md:border-border/50 md:bg-background-warm/50">
        {/* Tag/Subtitle - uppercase, small */}
        <span className="text-xs uppercase tracking-wide text-foreground-muted">{subtitle}</span>
        {/* Title */}
        <h3 className="mt-1 line-clamp-2 max-w-[90%] font-[family-name:var(--font-syne)] text-sm font-semibold leading-snug text-foreground sm:text-base">
          {title}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <span className={`text-xs italic ${companyColor}`}>
            {company}{company && year ? ` · ${year}` : year}
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// Category Card Component - Icon + Title leading, number as badge (Desktop)
function CategoryCard({
  number,
  title,
  description,
  categoryId,
}: {
  number: string;
  title: string;
  description: string;
  categoryId: string;
}) {
  const handleClick = () => {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Border and hover background colors for each category
  const categoryStyles: Record<string, string> = {
    "category-1": "border-category-structure hover:bg-category-structure",
    "category-2": "border-category-exploration hover:bg-category-exploration",
    "category-3": "border-category-execution hover:bg-category-execution",
    "category-4": "border-category-connection hover:bg-category-connection",
  };
  const categoryStyle = categoryStyles[categoryId] || categoryStyles["category-1"];

  // Badge background colors for each category
  const badgeColors: Record<string, string> = {
    "category-1": "bg-category-structure",
    "category-2": "bg-category-exploration",
    "category-3": "bg-category-execution",
    "category-4": "bg-category-connection",
  };
  const badgeBg = badgeColors[categoryId] || badgeColors["category-1"];

  // Text colors for icon
  const textColors: Record<string, string> = {
    "category-1": "text-category-structure",
    "category-2": "text-category-exploration",
    "category-3": "text-category-execution",
    "category-4": "text-category-connection",
  };
  const textColor = textColors[categoryId] || textColors["category-1"];

  return (
    <button
      onClick={handleClick}
      className={`group flex min-h-[220px] w-full flex-col rounded-lg border-2 bg-card-cream p-5 text-left transition-all duration-300 hover:shadow-lg lg:min-h-[240px] lg:p-6 ${categoryStyle}`}
    >
      {/* Top row: Icon + Number badge */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className={`${textColor} transition-colors duration-300 group-hover:text-white`}>
          {getCategoryIcon(categoryId, "h-8 w-8 lg:h-10 lg:w-10")}
        </div>
        {/* Number badge */}
        <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white lg:h-9 lg:w-9 ${badgeBg} transition-colors duration-300 group-hover:bg-white/20`}>
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 font-[family-name:var(--font-syne)] text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-white lg:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted transition-colors duration-300 group-hover:text-white/80">
        {description}
      </p>

      {/* Explore link */}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors duration-300 group-hover:text-white">
        <span>Explore</span>
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
}

// Mobile Category Bar - Cream card with colored border, reverses on tap
function MobileCategoryBar({
  number,
  title,
  description,
  categoryId,
}: {
  number: string;
  title: string;
  description: string;
  categoryId: string;
}) {
  const handleClick = () => {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Border and hover background colors
  const borderColors: Record<string, string> = {
    "category-1": "border-category-structure active:bg-category-structure",
    "category-2": "border-category-exploration active:bg-category-exploration",
    "category-3": "border-category-execution active:bg-category-execution",
    "category-4": "border-category-connection active:bg-category-connection",
  };
  const borderColor = borderColors[categoryId] || borderColors["category-1"];

  // Accent colors for number/icon
  const accentColors: Record<string, string> = {
    "category-1": "text-category-structure",
    "category-2": "text-category-exploration",
    "category-3": "text-category-execution",
    "category-4": "text-category-connection",
  };
  const accentColor = accentColors[categoryId] || accentColors["category-1"];

  return (
    <button
      onClick={handleClick}
      className={`group flex w-full items-center gap-4 rounded-lg border-2 bg-card-cream px-4 py-4 text-left transition-all ${borderColor} active:text-white`}
    >
      {/* Number */}
      <span className={`font-[family-name:var(--font-syne)] text-2xl font-bold ${accentColor} opacity-50 group-active:text-white/50`}>
        {number}
      </span>
      {/* Icon */}
      <div className={`${accentColor} group-active:text-white/80`}>
        {getCategoryIcon(categoryId, "h-5 w-5")}
      </div>
      {/* Title + Description */}
      <div className="flex-1">
        <span className="font-[family-name:var(--font-syne)] text-base font-semibold text-foreground group-active:text-white">
          {title}
        </span>
        <p className="mt-0.5 text-sm text-foreground-muted line-clamp-2 group-active:text-white/80">
          {description}
        </p>
      </div>
      {/* Arrow */}
      <svg className="h-5 w-5 text-foreground-muted group-active:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// Category Overview Component - Card-based category navigation
function CategoryOverview() {
  return (
    <>
      {/* Mobile: Cream card bars on dark background */}
      <div className="flex flex-col gap-3 px-4 pb-6 md:hidden">
        {categories.map((category) => (
          <MobileCategoryBar
            key={category.id}
            number={category.number}
            title={category.title}
            description={category.description}
            categoryId={category.id}
          />
        ))}
      </div>

      {/* Desktop: Grid of cards */}
      <div className="hidden px-6 sm:px-8 md:block">
        <div className="grid grid-cols-4 gap-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              number={category.number}
              title={category.title}
              description={category.description}
              categoryId={category.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Editorial Category Section - Consistent warm backgrounds
function EditorialCategorySection({
  category,
  projects,
  isLast = false,
}: {
  category: typeof categories[0];
  projects: { slug: string; title: string; subtitle: string; image?: string; sketchImage?: string; company?: string; year?: string }[];
  isLast?: boolean;
  isEven?: boolean;
}) {
  // Category-specific colors (full color for header)
  const categoryColors: Record<string, string> = {
    "category-1": "bg-category-structure",
    "category-2": "bg-category-exploration",
    "category-3": "bg-category-execution",
    "category-4": "bg-category-connection",
  };
  const headerBgColor = categoryColors[category.id] || "bg-category-structure";

  return (
    <section id={category.id} className="relative flex flex-col bg-background-warm md:bg-background-warmest md:h-screen md:min-h-screen md:snap-start">
      {/* Spacer for nav - smaller on mobile */}
      <div className="h-4 shrink-0 md:h-16" />

      {/* Mobile: Colored header bar with description */}
      <div className={`shrink-0 px-5 py-6 md:hidden ${headerBgColor}`}>
        <div className="flex items-center gap-3">
          {/* Number */}
          <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white/50">
            {category.number}
          </span>
          {/* Icon */}
          <div className="text-white/80">
            {getCategoryIcon(category.id, "h-7 w-7")}
          </div>
          {/* Title */}
          <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white">
            {category.title}
          </h2>
        </div>
        {/* Description */}
        <p className="mt-3 text-sm text-white/80">
          {category.description}
        </p>
      </div>

      {/* Desktop: Category Header - Colored banner */}
      <div className={`hidden shrink-0 px-6 py-6 sm:px-8 sm:py-8 md:block ${headerBgColor}`}>
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="text-white/80">
            {getCategoryIcon(category.id, "h-8 w-8")}
          </div>
          {/* Number */}
          <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white/50">
            {category.number}
          </span>
          {/* Divider */}
          <div className="h-7 w-px bg-white/30" />
          {/* Title */}
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
            {category.title}
          </h2>
        </div>
        {/* Description */}
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          {category.description}
        </p>
      </div>

      {/* Project cards - stacked on mobile, grid on desktop */}
      {/* Mobile: vertical stack with cream cards on tinted background */}
      <div className="flex flex-col gap-3 p-4 pb-6 md:hidden">
        {projects.map((project) => (
          <div key={project.slug} className="h-72 sm:h-80">
            <EditorialProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              sketchImage={project.sketchImage}
              company={project.company}
              year={project.year}
              categoryId={category.id}
            />
          </div>
        ))}
      </div>
      {/* Desktop: grid layout */}
      <div className="hidden flex-1 gap-2 p-3 sm:p-4 md:flex md:flex-row">
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-1">
            <EditorialProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              sketchImage={project.sketchImage}
              company={project.company}
              year={project.year}
              categoryId={category.id}
            />
          </div>
        ))}
      </div>

      {/* Footer area */}
      <div className="shrink-0 px-6 py-3 sm:px-8">
        {isLast ? (
          <>
            {/* Mobile: Continue Exploring CTA */}
            <div className="mb-6 md:hidden">
              <p className="mb-3 font-[family-name:var(--font-syne)] text-lg font-semibold text-foreground">
                Where to next?
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/about"
                  className="group flex w-full items-center justify-between rounded-lg border-2 border-accent bg-card-cream px-4 py-3 transition-all active:bg-accent active:text-white"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent group-active:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium text-foreground group-active:text-white">Learn more about me</span>
                  </div>
                  <svg className="h-5 w-5 text-foreground-muted group-active:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-between rounded-lg border-2 border-accent bg-card-cream px-4 py-3 transition-all active:bg-accent active:text-white"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent group-active:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-medium text-foreground group-active:text-white">Get in touch</span>
                  </div>
                  <svg className="h-5 w-5 text-foreground-muted group-active:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/feedback"
                  className="group flex w-full items-center justify-between rounded-lg border-2 border-accent bg-card-cream px-4 py-3 transition-all active:bg-accent active:text-white"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent group-active:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="font-medium text-foreground group-active:text-white">Help me improve</span>
                  </div>
                  <svg className="h-5 w-5 text-foreground-muted group-active:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <PageFooter />
              <button
                onClick={() => {
                  const container = document.querySelector("div.snap-y");
                  if (container) {
                    container.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground-muted transition-colors hover:bg-foreground/20"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          /* Scroll indicator - desktop only */
          <div className="hidden justify-center md:flex">
            <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-foreground/10 text-foreground-muted">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Project data for each category
// sketchImage: path to SVG/PNG illustration in /public/images/sketches/
const categoryProjects: Record<string, { slug: string; title: string; subtitle: string; image?: string; sketchImage?: string; company?: string; year?: string }[]> = {
  "category-1": [
    { slug: "category-1-hero", title: "In-Home Robotics Strategy", subtitle: "Consumer Tech • Innovation Strategy", image: "/images/projects/robotics-home.png", sketchImage: "/images/projects/robotics-home.png", company: "Samsung", year: "2025" },
    { slug: "category-1-secondary-1", title: "Hybrid Care Experience", subtitle: "Healthcare • Experience Design", image: "/images/projects/hybrid-care.png", sketchImage: "/images/projects/hybrid-care.png", company: "Deloitte", year: "2020" },
    { slug: "category-1-secondary-2", title: "Health System Growth Strategy", subtitle: "Healthcare • Growth Strategy", image: "/images/projects/health-growth.png", sketchImage: "/images/projects/health-growth.png", company: "Carle Health", year: "2019" },
  ],
  "category-2": [
    { slug: "category-2-hero", title: "Nutrition Through Reflection", subtitle: "Digital Health • Product Design", image: "/images/projects/nutrition-reflection.png", sketchImage: "/images/projects/nutrition-reflection.png", company: "Ambrosia", year: "2024" },
    { slug: "category-2-secondary-1", title: "Pharmacy First Model", subtitle: "Healthcare • Product Strategy", image: "/images/projects/pharmacy-first.png", sketchImage: "/images/projects/pharmacy-first.png", company: "mPharma", year: "2024" },
    { slug: "category-2-secondary-2", title: "Ergonomic Fireline Tool", subtitle: "Product Design • Research", image: "/images/projects/fireline-tool.png", sketchImage: "/images/projects/fireline-tool.png", company: "UC Berkeley", year: "2025" },
  ],
  "category-3": [
    { slug: "category-3-hero", title: "24/7 On-Demand Virtual Care", subtitle: "Healthcare • Product Launch", image: "/images/projects/virtual-care.png", sketchImage: "/images/projects/virtual-care.png", company: "Kaiser Permanente", year: "2021" },
    { slug: "category-3-secondary-1", title: "KariOut Brand Refresh", subtitle: "Consumer • Brand Strategy", image: "/images/projects/kariout-rebrand.png", sketchImage: "/images/projects/kariout-rebrand.png", company: "KariOut", year: "2018" },
    { slug: "category-3-secondary-2", title: "480 Sq Ft Garage Build", subtitle: "Personal • Construction", image: "/images/projects/garage-build.png", sketchImage: "/images/projects/garage-build.png", company: "Personal", year: "2019" },
  ],
  "category-4": [
    { slug: "category-4-hero", title: "Berkeley SkyDeck Community", subtitle: "Startups • Community Building", image: "/images/projects/skydeck-community.png", sketchImage: "/images/projects/skydeck-community.png", company: "Berkeley SkyDeck", year: "2023-2025" },
    { slug: "category-4-secondary-1", title: "Local Food Experiences", subtitle: "Food & Hospitality • Experience Design", image: "/images/projects/straws-in-pockets.png", sketchImage: "/images/projects/straws-in-pockets.png", company: "Straws in Pockets", year: "Ongoing" },
    { slug: "category-4-secondary-2", title: "Health System Integration", subtitle: "Healthcare • Integration Strategy", image: "/images/projects/health-merger.png", sketchImage: "/images/projects/health-merger.png", company: "Carle Health", year: "2020" },
  ],
};

export default function Home() {
  return (
    <div id="main-scroll-container" className="min-h-screen overflow-y-auto bg-background md:h-screen md:snap-y md:snap-mandatory">
      {/* Screen 1: Hero Section - Clean and focused */}
      <section className="relative flex min-h-[80vh] flex-col justify-center px-6 py-6 pt-20 sm:px-8 md:min-h-0 md:py-12 md:pt-20 md:h-screen md:snap-start">
        <h1 className="hero-text text-display max-w-5xl text-foreground">
          I&apos;m {siteConfig.name}
          <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent align-middle sm:mx-4 sm:h-7 sm:w-7" />
          a {siteConfig.title.toLowerCase()}
          <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent align-middle sm:mx-4 sm:h-7 sm:w-7" />
          based in {siteConfig.location.split(",")[0]}
          <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent align-middle sm:mx-4 sm:h-7 sm:w-7" />
          {siteConfig.description.toLowerCase()}
          {siteConfig.descriptionSuffix && (
            <>
              <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent align-middle sm:mx-4 sm:h-7 sm:w-7" />
              {siteConfig.descriptionSuffix.toLowerCase()}
            </>
          )}
        </h1>
        {/* Scroll indicator - desktop only */}
        <div className="hidden md:block">
          <ScrollIndicator />
        </div>
      </section>

      {/* Screen 2: Editorial Statement + Category Overview */}
      <section className="relative flex flex-col bg-background-warm md:h-screen md:min-h-screen md:snap-start md:justify-center md:pt-16">
        {/* Content wrapper - centered as a group on desktop */}
        <div>
          {/* Editorial header - title with subtitle */}
          <div className="shrink-0 px-6 pt-6 pb-2 sm:px-8 sm:pt-8 sm:pb-3 md:-mt-4 md:pt-0 md:pb-4">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold text-foreground sm:text-5xl lg:text-5xl">
              My Work
            </h2>
            <p className="mt-2 max-w-xl text-base text-foreground-muted sm:text-lg">
              Projects organized by how I approach problems, from early research to hands-on execution.
            </p>
          </div>

          {/* Category Overview - Card-based navigation */}
          <CategoryOverview />

          {/* Logo Banner - Companies worked with */}
          <div className="mt-4 md:mt-6">
            <LogoBanner />
          </div>
        </div>

        {/* Scroll indicator - desktop only, anchored to bottom */}
        <div className="hidden md:block md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2">
          <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-foreground/10 text-foreground-muted">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Category Breakdowns - Editorial Style */}
      {categories.map((category, index) => (
        <EditorialCategorySection
          key={category.id}
          category={category}
          projects={categoryProjects[category.id] || []}
          isLast={index === categories.length - 1}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
}
