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
      <circle cx="12" cy="12" r="9" />
      <path d="M16.24 7.76l-4.24 4.24-4.24-4.24" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
    </svg>
  );
}

function ExecutionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function ConnectionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v6" />
      <path d="M18 9v6" />
      <path d="M9 6h6" />
      <path d="M9 18h6" />
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

// Process Node Component - Single node in the process graphic
function ProcessNode({
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

  // Different styles for each node - shades of green
  const nodeStyles: Record<string, string> = {
    "category-1": "border-accent-dark hover:bg-accent-dark",
    "category-2": "border-accent hover:bg-accent",
    "category-3": "border-accent-sage hover:bg-accent-sage",
    "category-4": "border-accent-teal hover:bg-accent-teal",
  };
  const circleStyle = nodeStyles[categoryId] || nodeStyles["category-1"];

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      {/* Circle with icon */}
      <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-background text-foreground-muted transition-all duration-300 hover:text-white sm:h-20 sm:w-20 ${circleStyle}`}>
        {getCategoryIcon(categoryId, "h-7 w-7 sm:h-8 sm:w-8")}
      </div>
      {/* Number */}
      <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-foreground/30 sm:text-3xl">
        {number}
      </span>
      {/* Title */}
      <span className="font-[family-name:var(--font-syne)] text-sm font-semibold text-foreground sm:text-base">
        {title}
      </span>
    </button>
  );
}

// Process Graphic Component - Visual flow of four categories
function ProcessGraphic() {
  // Line colors matching each category
  const lineColors = ["bg-accent-dark", "bg-accent", "bg-accent-sage"];

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 sm:px-8">
      {/* Process flow - horizontal on desktop, 2x2 grid on mobile */}
      <div className="flex w-full max-w-5xl items-center justify-center">
        {/* Grid layout for mobile, flex for desktop */}
        <div className="grid grid-cols-2 gap-8 sm:flex sm:items-center sm:gap-0">
          {categories.map((category, index) => (
            <div key={category.id} className="flex items-center">
              <ProcessNode
                number={category.number}
                title={category.title}
                categoryId={category.id}
              />
              {/* Connecting line - only on desktop, not after last node */}
              {index < categories.length - 1 && (
                <div className="mx-6 hidden h-[2px] w-16 sm:block lg:w-24">
                  <div className={`h-full opacity-30 ${lineColors[index]}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hint text */}
      <p className="mt-8 text-center text-sm text-foreground-muted">
        Click any pillar to explore projects
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
    <section id={category.id} className={`relative flex h-screen snap-start flex-col ${bgColor}`}>
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

      {/* Three equal project cards - small gaps, rounded corners */}
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4 lg:flex-row">
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
    <div className="h-screen snap-y snap-mandatory overflow-y-auto bg-background">
      {/* Screen 1: Hero Section - Clean and focused */}
      <section className="relative flex h-screen snap-start flex-col justify-center px-6 pt-16 sm:px-8">
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
      <section className="relative flex h-screen snap-start flex-col bg-background-subtle">
        {/* Spacer for nav */}
        <div className="h-16 shrink-0" />

        {/* Editorial header - dark green background */}
        <div className="shrink-0 bg-accent-dark px-6 py-6 sm:px-8 sm:py-8">
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white sm:text-3xl">
            My Work
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-white/80 sm:text-base">
            If there&apos;s a common thread across everything I&apos;ve done, it&apos;s Structure, Exploration, Execution, and Connection. Experiences across these four pillars have shaped how I think about innovation, product, and strategy.
          </p>
        </div>

        {/* Process Graphic - Visual flow of four pillars */}
        <ProcessGraphic />
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
