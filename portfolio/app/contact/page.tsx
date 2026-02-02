"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/app/lib/data";
import { ArrowIcon, PageFooter } from "@/app/components/ui";

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
    <div className="flex h-screen">
      {/* Left: Contact content - 45% */}
      <div className="flex w-full flex-col bg-background-warmest lg:w-[45%]">
        {/* Spacer for nav */}
        <div className="h-20 shrink-0 sm:h-24" />

        {/* Main content */}
        <div className="flex flex-1 flex-col justify-center px-8 sm:px-10 lg:px-12">
          {/* Big expressive headline */}
          <h1 className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Let&apos;s build
            <br />
            <span className="text-accent-dark">something</span>
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
                className="flex w-full items-center justify-between border-b border-border py-4 text-left transition-colors hover:border-accent-bright hover:bg-accent-bright/5"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground-muted">Email</p>
                  <p className="mt-1 font-[family-name:var(--font-syne)] text-lg font-medium text-foreground">
                    {siteConfig.email}
                  </p>
                </div>
                <span className="text-sm text-accent-dark transition-transform duration-300 group-hover:translate-x-1">
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
                  className="flex w-full items-center justify-between border-b border-border py-4 transition-colors hover:border-accent-bright hover:bg-accent-bright/5"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground-muted">LinkedIn</p>
                    <p className="mt-1 font-[family-name:var(--font-syne)] text-lg font-medium text-foreground">
                      Let&apos;s connect
                    </p>
                  </div>
                  <span className="text-sm text-accent-dark transition-transform duration-300 group-hover:translate-x-1">
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
        <div className="flex shrink-0 items-center justify-between border-t border-border px-8 py-4 sm:px-10 lg:px-12">
          <p className="text-xs text-foreground-muted">
            Based in {siteConfig.location}
          </p>
          <PageFooter />
        </div>
      </div>

      {/* Right: Full bleed image - 55% */}
      <div className="relative hidden w-[55%] lg:block">
        <Image
          src={contactImage}
          alt="Charlie McCormick"
          fill
          className="object-cover"
          sizes="45vw"
          priority
        />
        {/* Fallback placeholder if image doesn't load */}
        <div className="absolute inset-0 bg-placeholder -z-10" />
      </div>
    </div>
  );
}
