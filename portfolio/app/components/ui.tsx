"use client";

import Image from "next/image";
import Link from "next/link";

// ===========================================
// PORTFOLIO IMAGE - With fallback placeholder
// ===========================================
export function PortfolioImage({
  src,
  alt,
  fill = true,
  className = "",
  containerClassName = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div className={`bg-placeholder ${containerClassName}`}>
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-accent-bright/20" />
            <p className="mt-2 text-xs text-foreground-subtle">Image</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`object-cover ${className}`}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

// ===========================================
// SCROLL INDICATOR
// ===========================================
export function ScrollIndicator({
  light = false
}: {
  light?: boolean;
}) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${light ? "bg-white/20 text-white" : "bg-foreground/10 text-foreground-muted"} animate-bounce`}>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

// ===========================================
// RETURN TO TOP
// ===========================================
export function ReturnToTop({
  light = false,
  containerSelector = "div.snap-y"
}: {
  light?: boolean;
  containerSelector?: string;
}) {
  const handleClick = () => {
    const container = document.querySelector(containerSelector);
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <button
        onClick={handleClick}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${light ? "bg-white/20 text-white hover:bg-white/30" : "bg-foreground/10 text-foreground-muted hover:bg-foreground/20"}`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

// ===========================================
// PAGE FOOTER
// ===========================================
export function PageFooter({
  light = false,
  className = "",
  showFeedbackLink = true
}: {
  light?: boolean;
  className?: string;
  showFeedbackLink?: boolean;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] ${light ? "text-white/40" : "text-foreground-subtle"} ${className}`}>
      <span>© {currentYear} Charlie McCormick</span>
      <span>·</span>
      <span>Built with Next.js, Claude Code & Leonardo AI</span>
      {showFeedbackLink && (
        <>
          <span>·</span>
          <Link
            href="/feedback"
            className={`transition-colors ${light ? "hover:text-white/70" : "hover:text-foreground-muted"}`}
          >
            Help me improve →
          </Link>
        </>
      )}
    </div>
  );
}

// ===========================================
// SECTION DIVIDER
// ===========================================
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`h-px w-full bg-border ${className}`} />
  );
}

// ===========================================
// IMAGE PLACEHOLDER
// ===========================================
export function ImagePlaceholder({
  src,
  alt = "Image",
  className = "",
  aspectRatio = "auto",
}: {
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: "auto" | "video" | "square" | "4/3" | "3/2" | "16/9";
}) {
  const aspectClasses = {
    auto: "",
    video: "aspect-video",
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-[16/9]",
  };

  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-placeholder ${aspectClasses[aspectRatio]} ${className}`}
    />
  );
}

// ===========================================
// ARROW ICON
// ===========================================
export function ArrowIcon({
  direction = "right",
  className = "h-4 w-4"
}: {
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const paths = {
    right: "M17 8l4 4m0 0l-4 4m4-4H3",
    left: "M7 16l-4-4m0 0l4-4m-4 4h18",
    up: "M5 15l7-7 7 7",
    down: "M19 9l-7 7-7-7",
  };

  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={paths[direction]} />
    </svg>
  );
}
