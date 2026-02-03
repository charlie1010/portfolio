"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/app/lib/data";
import { ArrowIcon } from "@/app/components/ui";

// Contact page image path - replace with your actual image
const contactImage = "/images/contact/profile.jpg";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row">
      {/* Hero image - visible on mobile at top, hidden on desktop (shows on right) */}
      <div className="relative h-48 w-full shrink-0 sm:h-64 lg:hidden">
        <Image
          src={contactImage}
          alt="Charlie McCormick"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Left: Contact content - full width mobile, 45% desktop */}
      <div className="flex w-full flex-col bg-background-warmest lg:h-screen lg:w-[45%]">
        {/* Spacer for nav - smaller on mobile since image is above */}
        <div className="h-8 shrink-0 sm:h-12 lg:h-24" />

        {/* Main content */}
        <div className="flex flex-1 flex-col px-8 py-6 sm:px-10 lg:justify-center lg:px-12 lg:py-0">
          {/* Big expressive headline */}
          <h1 className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Let&apos;s build
            <br />
            <span className="text-accent">something</span>
            <br />
            together.
          </h1>

          <p className="mt-6 max-w-sm text-foreground-muted">
            I like meeting people who are curious about the work. If you have a role, a project, or just want to swap ideas over coffee, let&apos;s talk.
          </p>

          {/* Contact links - clean and bold */}
          <div className="mt-10 space-y-4">
            {/* Email */}
            <div className="group">
              <button
                onClick={copyEmail}
                className="flex w-full items-center justify-between border-b border-border py-4 text-left transition-colors hover:border-accent hover:bg-accent/5"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground-muted">Email</p>
                  <p className="mt-1 font-[family-name:var(--font-syne)] text-lg font-medium text-foreground">
                    {siteConfig.email}
                  </p>
                </div>
                <span className="text-sm text-accent transition-transform duration-300 group-hover:translate-x-1">
                  {emailCopied ? (
                    <span className="flex items-center gap-2">
                      Copied
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Copy
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </span>
                  )}
                </span>
              </button>
            </div>

            {/* LinkedIn */}
            {siteConfig.social.linkedin && (
              <div className="group">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between border-b border-border py-4 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground-muted">LinkedIn</p>
                    <p className="mt-1 font-[family-name:var(--font-syne)] text-lg font-medium text-foreground">
                      Let&apos;s connect
                    </p>
                  </div>
                  <span className="text-sm text-accent transition-transform duration-300 group-hover:translate-x-1">
                    <span className="flex items-center gap-2">
                      Visit
                      <ArrowIcon direction="right" className="h-4 w-4" />
                    </span>
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-border px-8 py-3 sm:px-10 lg:px-12">
          <p className="text-[10px] text-foreground-subtle">
            Based in {siteConfig.location} · © {new Date().getFullYear()} Charlie McCormick
          </p>
        </div>
      </div>

      {/* Right: Full bleed image - 55% on desktop only */}
      <div className="relative hidden w-[55%] lg:block">
        <Image
          src={contactImage}
          alt="Charlie McCormick"
          fill
          className="object-cover"
          sizes="55vw"
        />
        {/* Fallback placeholder if image doesn't load */}
        <div className="absolute inset-0 bg-placeholder -z-10" />
      </div>
    </div>
  );
}
