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

// Editorial Project Card - Sketch-focused with warm cream background
function EditorialProjectCard({
  title,
  role,
  slug,
  sketchImage,
}: {
  title: string;
  role: string;
  slug: string;
  sketchImage?: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-sm bg-card-cream transition-all duration-300 hover:bg-card-cream-hover hover:shadow-md"
    >
      {/* Image area - takes majority of card */}
      <div className="relative flex-1 overflow-hidden">
        {sketchImage ? (
          <Image
            src={sketchImage}
            alt={title}
            fill
            className="object-cover object-left"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4">
            <PlaceholderSketch className="h-full w-full max-h-[140px]" />
          </div>
        )}
      </div>

      {/* Content area - fixed height for consistency */}
      <div className="shrink-0 border-t border-border/50 bg-background-warm/50 px-4 py-3">
        {/* Title - fixed 2 lines with line-clamp */}
        <h3 className="line-clamp-2 h-[2.75rem] font-[family-name:var(--font-syne)] text-sm font-semibold leading-snug text-foreground sm:text-base">
          {title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-foreground-muted">{role}</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-dark/10 text-accent-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// Category Card Component - Editorial left-aligned design
function CategoryCard({
  number,
  title,
  categoryId,
}: {
  number: string;
  title: string;
  categoryId: string;
}) {
  const handleClick = () => {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Hover background colors for each category
  const hoverStyles: Record<string, string> = {
    "category-1": "hover:bg-accent-dark",
    "category-2": "hover:bg-accent",
    "category-3": "hover:bg-accent-sage",
    "category-4": "hover:bg-accent-teal",
  };
  const hoverBg = hoverStyles[categoryId] || hoverStyles["category-1"];

  // Accent line colors for each category
  const accentColors: Record<string, string> = {
    "category-1": "bg-accent-dark",
    "category-2": "bg-accent",
    "category-3": "bg-accent-sage",
    "category-4": "bg-accent-teal",
  };
  const accentBg = accentColors[categoryId] || accentColors["category-1"];

  return (
    <button
      onClick={handleClick}
      className={`group flex h-full w-full flex-col items-start justify-between rounded border border-border/50 bg-card-cream p-5 text-left transition-all duration-300 hover:border-transparent hover:shadow-lg sm:p-6 lg:p-7 ${hoverBg}`}
    >
      {/* Top section: Number + Accent line */}
      <div className="w-full">
        {/* Number */}
        <span className="font-[family-name:var(--font-syne)] text-5xl font-bold text-foreground/20 transition-colors duration-300 group-hover:text-white/40 sm:text-6xl lg:text-7xl">
          {number}
        </span>
        {/* Accent line */}
        <div className={`mt-3 h-0.5 w-10 transition-all duration-300 group-hover:w-14 group-hover:bg-white/60 sm:w-12 sm:group-hover:w-16 ${accentBg}`} />
      </div>

      {/* Bottom section: Icon + Title grouped together */}
      <div className="flex flex-col gap-2 sm:gap-3">
        {/* Icon */}
        <div className="text-foreground-muted transition-colors duration-300 group-hover:text-white">
          {getCategoryIcon(categoryId, "h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9")}
        </div>
        {/* Title */}
        <span className="font-[family-name:var(--font-syne)] text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-white sm:text-2xl">
          {title}
        </span>
      </div>
    </button>
  );
}

// Category Overview Component - Card-based category navigation
function CategoryOverview() {
  return (
    <div className="flex flex-1 flex-col px-6 py-6 sm:px-8 sm:py-8">
      {/* Category cards - 2x2 grid on mobile, 4-column on desktop */}
      <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            number={category.number}
            title={category.title}
            categoryId={category.id}
          />
        ))}
      </div>

      {/* Hint text */}
      <p className="mt-6 text-center text-sm text-foreground-muted sm:mt-8">
        Click a category to explore
      </p>
    </div>
  );
}

// Editorial Category Section - Warm backgrounds, 3 equal cards
function EditorialCategorySection({
  category,
  projects,
  isLast = false,
  isEven = false,
}: {
  category: typeof categories[0];
  projects: { slug: string; title: string; role: string; image?: string; sketchImage?: string }[];
  isLast?: boolean;
  isEven?: boolean;
}) {
  // Alternate background colors between sections
  const bgColor = isEven ? "bg-background-warm" : "bg-background-warmest";

  // Category-specific header colors matching process graphic - shades of green
  const headerColors: Record<string, string> = {
    "category-1": "bg-accent-dark",
    "category-2": "bg-accent",
    "category-3": "bg-accent-sage",
    "category-4": "bg-accent-teal",
  };
  const headerBg = headerColors[category.id] || "bg-accent-dark";

  return (
    <section id={category.id} className={`relative flex min-h-screen flex-col ${bgColor} md:h-screen md:snap-start`}>
      {/* Spacer for nav */}
      <div className="h-16 shrink-0" />

      {/* Category Header - Colored to match process graphic */}
      <div className={`shrink-0 px-6 py-5 sm:px-8 sm:py-6 ${headerBg}`}>
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="text-white/80">
            {getCategoryIcon(category.id, "h-5 w-5")}
          </div>
          {/* Number */}
          <span className="font-[family-name:var(--font-syne)] text-xl font-bold text-white/50">
            {category.number}
          </span>
          {/* Divider */}
          <div className="h-5 w-px bg-white/30" />
          {/* Title */}
          <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-white">
            {category.title}
          </h2>
        </div>
        {/* Description */}
        <p className="mt-2 max-w-2xl text-sm text-white/80">
          {category.description}
        </p>
      </div>

      {/* Project cards - stacked on mobile, grid on desktop */}
      {/* Mobile: vertical stack */}
      <div className="flex flex-col gap-3 p-4 md:hidden">
        {projects.map((project) => (
          <div key={project.slug} className="h-48 sm:h-56">
            <EditorialProjectCard
              title={project.title}
              role={project.role}
              slug={project.slug}
              sketchImage={project.sketchImage}
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
              role={project.role}
              slug={project.slug}
              sketchImage={project.sketchImage}
            />
          </div>
        ))}
      </div>

      {/* Footer area */}
      <div className="shrink-0 px-6 py-3 sm:px-8">
        {isLast ? (
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
        ) : (
          <div className="flex justify-center">
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
const categoryProjects: Record<string, { slug: string; title: string; role: string; image?: string; sketchImage?: string }[]> = {
  "category-1": [
    { slug: "category-1-hero", title: "Future of In-Home Robotics Strategy", role: "Innovation Strategist Intern", image: "/images/projects/robotics-home.png", sketchImage: "/images/projects/robotics-home.png" },
    { slug: "category-1-secondary-1", title: "Designing a Better Hybrid Care Experience", role: "Senior Strategy Consultant", image: "/images/projects/hybrid-care.png", sketchImage: "/images/projects/hybrid-care.png" },
    { slug: "category-1-secondary-2", title: "Making a Health System Growth Strategy Actionable", role: "Senior Strategy Consultant", image: "/images/projects/health-growth.png", sketchImage: "/images/projects/health-growth.png" },
  ],
  "category-2": [
    { slug: "category-2-hero", title: "Redesigning Nutrition Through Reflection", role: "Co-Founder", image: "/images/projects/nutrition-reflection.png", sketchImage: "/images/projects/nutrition-reflection.png" },
    { slug: "category-2-secondary-1", title: "Learning What Pharmacy First Should Be", role: "Strategy and Product Intern", image: "/images/projects/pharmacy-first.png", sketchImage: "/images/projects/pharmacy-first.png" },
    { slug: "category-2-secondary-2", title: "Designing a Safer Fireline Tool with Ergonomic Data", role: "Developer and Builder", image: "/images/projects/fireline-tool.png", sketchImage: "/images/projects/fireline-tool.png" },
  ],
  "category-3": [
    { slug: "category-3-hero", title: "24/7 On-Demand Virtual Care", role: "Strategy Consultant", image: "/images/projects/virtual-care.png", sketchImage: "/images/projects/virtual-care.png" },
    { slug: "category-3-secondary-1", title: "Redesigning KariOut's Customer-Facing Experience", role: "Strategist", image: "/images/projects/kariout-rebrand.png", sketchImage: "/images/projects/kariout-rebrand.png" },
    { slug: "category-3-secondary-2", title: "Building a 480 Sq Ft Garage from Scratch", role: "Designer and Builder", image: "/images/projects/garage-build.png", sketchImage: "/images/projects/garage-build.png" },
  ],
  "category-4": [
    { slug: "category-4-hero", title: "Building Community Across Berkeley SkyDeck and Haas Startup Squad", role: "SkyDeck OIR & Startup Squad Leader", image: "/images/projects/skydeck-community.png", sketchImage: "/images/projects/skydeck-community.png" },
    { slug: "category-4-secondary-1", title: "Straws In Pockets Curated Food Experiences", role: "Co-Founder", image: "/images/projects/straws-in-pockets.png", sketchImage: "/images/projects/straws-in-pockets.png" },
    { slug: "category-4-secondary-2", title: "Bridging Cultures During a Health System Carve Out", role: "Strategy Consultant", image: "/images/projects/health-merger.png", sketchImage: "/images/projects/health-merger.png" },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-auto bg-background md:h-screen md:snap-y md:snap-mandatory">
      {/* Screen 1: Hero Section - Clean and focused */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-16 sm:px-8 md:h-screen md:snap-start">
        <h1 className="hero-text text-display max-w-5xl text-foreground">
          I&apos;m {siteConfig.name}
          <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent-bright align-middle sm:mx-4 sm:h-7 sm:w-7" />
          a {siteConfig.title.toLowerCase()}
          <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent-bright align-middle sm:mx-4 sm:h-7 sm:w-7" />
          based in {siteConfig.location.split(",")[0]}
          <span className="mx-3 inline-block h-5 w-5 rounded-full bg-accent-bright align-middle sm:mx-4 sm:h-7 sm:w-7" />
          {siteConfig.description.toLowerCase()}
        </h1>
        <ScrollIndicator />
      </section>

      {/* Screen 2: Editorial Statement + Category Overview */}
      <section className="relative flex min-h-screen flex-col bg-background-subtle md:h-screen md:snap-start">
        {/* Spacer for nav */}
        <div className="h-16 shrink-0" />

        {/* Editorial header - dark green background */}
        <div className="shrink-0 bg-accent-dark px-6 py-6 sm:px-8 sm:py-8">
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white sm:text-3xl">
            My Work
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-white/80 sm:text-base">
            Projects organized by how I approach problems, from early-stage research to hands-on execution.
          </p>
        </div>

        {/* Category Overview - Card-based navigation */}
        <CategoryOverview />
        <ScrollIndicator />
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
