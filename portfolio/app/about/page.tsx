"use client";

import Link from "next/link";
import Image from "next/image";
import { aboutContent, interests } from "@/app/lib/data";
import { ScrollIndicator, PageFooter } from "@/app/components/ui";

// About page image path - replace with your actual image
const aboutImage = "/images/about/profile-v2.jpg";

// Value Icons
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function GrowthIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M12 2c-2 4-6 6-9 6M12 2c2 4 6 6 9 6M12 8c-1.5 2-4 3-6 3M12 8c1.5 2 4 3 6 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function FlagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 21V4M4 4l12 4-12 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Value icons array
const valueIcons = [HeartIcon, GrowthIcon, TargetIcon, FlagIcon];

// Interest Card Component - Matches project cards with large doodle images
function InterestCard({
  title,
  slug,
  description,
  doodleImage,
}: {
  title: string;
  slug: string;
  description: string;
  doodleImage: string;
}) {
  return (
    <Link
      href={`/interests/${slug}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-sm bg-card-cream transition-all duration-300 hover:bg-card-cream-hover hover:shadow-md"
    >
      {/* Image area - takes majority of card */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={doodleImage}
          alt={title}
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Content area - fixed height for consistency */}
      <div className="shrink-0 border-t border-border/50 bg-background-warm/50 px-4 py-3">
        {/* Title */}
        <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold leading-snug text-foreground sm:text-base">
          {title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="line-clamp-1 text-xs text-foreground-muted">{description}</span>
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

// Doodle image paths for interests
const interestDoodles: Record<string, string> = {
  art: "/images/interests/art-doodle.png",
  sports: "/images/interests/sports-doodle.png",
  influences: "/images/interests/influences-doodle.png",
};

export default function About() {
  return (
    <div className="h-screen snap-y snap-proximity overflow-y-auto bg-background-warm">
      {/* Section 1 - Bio: Full bleed split */}
      <section id="bio" className="relative flex min-h-screen snap-start flex-col bg-background-warm lg:h-screen lg:flex-row">
        {/* Photo - top on mobile, left side on desktop */}
        <div className="relative h-64 w-full shrink-0 sm:h-80 lg:h-full lg:w-[45%]">
          <Image
            src={aboutImage}
            alt="Charlie McCormick"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>

        {/* Bio content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-8 pt-8 sm:px-8 lg:px-12 lg:pt-20">
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-foreground sm:text-4xl">
            {aboutContent.bio.headline}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            {aboutContent.bio.text}
          </p>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-border" />

          {/* Skills and Tools */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-caption text-accent">
                Skills
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground-muted">
                {aboutContent.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-caption text-accent">
                Tools
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground-muted">
                {aboutContent.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Section 2 - Values: Grid with icons */}
      <section id="values" className="relative flex h-screen snap-start flex-col pt-16">
        {/* Header - dark green background */}
        <div className="shrink-0 bg-accent-dark px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-white sm:text-4xl">
            Values
          </h2>
          <p className="mt-2 text-base text-white/80 sm:text-lg">
            What I believe in and how I try to show up.
          </p>
        </div>

        {/* Values grid - lighter background */}
        <div className="grid flex-1 grid-cols-1 bg-background pb-12 sm:grid-cols-2">
          {aboutContent.values.map((value, index) => {
            const isTopRow = index < 2;
            const isLeftCol = index % 2 === 0;
            const IconComponent = valueIcons[index];

            return (
              <div
                key={value.number}
                className={`group flex items-center gap-4 px-6 py-5 transition-all duration-200 hover:bg-accent-dark/5 sm:px-8 lg:px-12 ${
                  isTopRow ? "border-b border-border" : ""
                } ${isLeftCol ? "sm:border-r sm:border-border" : ""}`}
              >
                {/* Icon */}
                <div className="shrink-0 rounded-lg bg-accent-dark/10 p-2 transition-colors duration-200 group-hover:bg-accent-dark/20">
                  <IconComponent className="h-5 w-5 text-accent-dark" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold text-foreground sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <ScrollIndicator />
      </section>

      {/* Section 3 - Interests: Header + 3 equal cards (matches project page) */}
      <section id="interests" className="relative flex h-screen snap-start flex-col bg-background-warm">
        {/* Spacer for nav */}
        <div className="h-16 shrink-0" />

        {/* Header - matches Values section style */}
        <div className="shrink-0 bg-accent-dark px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-white sm:text-4xl">
            {aboutContent.interestsIntro.headline}
          </h2>
          <p className="mt-2 text-base text-white/80 sm:text-lg">
            {aboutContent.interestsIntro.text[0]}
          </p>
        </div>

        {/* Three equal interest cards */}
        <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4 lg:flex-row">
          {interests.map((interest) => (
            <div key={interest.slug} className="flex flex-1">
              <InterestCard
                title={interest.title}
                slug={interest.slug}
                description={interest.description}
                doodleImage={interestDoodles[interest.slug]}
              />
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="flex shrink-0 items-center justify-between px-6 py-3 sm:px-8">
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
      </section>
    </div>
  );
}
