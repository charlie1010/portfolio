"use client";

import { useState } from "react";
import Image from "next/image";
import { feedbackContent, roadmap, changelog } from "@/app/lib/data";
import { PageFooter } from "@/app/components/ui";

// Feedback page doodle
const feedbackDoodle = "/images/feedback/doodle_V2.png";

export default function Feedback() {
  const [formData, setFormData] = useState({
    type: "",
    message: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      // Build form data - only include email if provided
      const submitData: { type: string; message: string; email?: string } = {
        type: formData.type,
        message: formData.message,
      };
      if (formData.email) {
        submitData.email = formData.email;
      }

      // Formspree endpoint
      const response = await fetch("https://formspree.io/f/xdadyjla", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ type: "", message: "", email: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background-warm">
      {/* Header Section with Doodle Space */}
      <section className="relative bg-accent px-6 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-12 lg:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* Text Content */}
            <div className="max-w-lg">
              <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {feedbackContent.headline}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {feedbackContent.intro}
              </p>
            </div>

            {/* Doodle Space */}
            <div className="relative h-48 w-full shrink-0 sm:h-56 lg:h-64 lg:w-96">
              <Image
                src={feedbackDoodle}
                alt="Feedback illustration"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Roadmap + Changelog */}
          <div className="space-y-10">
            {/* Roadmap */}
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-foreground sm:text-2xl">
                What's Happening
              </h2>
              <div className="mt-6 space-y-6">
                {/* Now */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                      N
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                      Now
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-8">
                    {roadmap.now.map((item, i) => (
                      <li key={i} className="text-sm text-foreground-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/40 text-xs font-bold text-white">
                      N
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent/60">
                      Next
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-8">
                    {roadmap.next.map((item, i) => (
                      <li key={i} className="text-sm text-foreground-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Later */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/20 text-xs font-bold text-foreground-muted">
                      L
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                      Later
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-8">
                    {roadmap.later.map((item, i) => (
                      <li key={i} className="text-sm text-foreground-subtle">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Changelog */}
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-foreground sm:text-2xl">
                Recently Shipped
              </h2>
              <ul className="mt-6 space-y-3">
                {changelog.map((entry, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 text-sm text-foreground-subtle">
                      {entry.date}
                    </span>
                    <span className="text-sm text-foreground-muted">
                      {entry.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Feedback Form */}
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-foreground sm:text-2xl">
              Share Your Thoughts
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              What's working? What's not? Your feedback helps me make this better.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-8 text-center">
                {/* Success checkmark */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-4 font-[family-name:var(--font-syne)] text-xl font-semibold text-accent">
                  Thanks for your feedback!
                </p>
                <p className="mt-2 text-sm text-foreground-muted">
                  This is now in my backlog. I'll review it and see how it can improve the site.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-accent hover:underline"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Feedback Type */}
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-foreground"
                  >
                    What kind of feedback?
                  </label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    required
                    className="mt-2 w-full rounded border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">Select one...</option>
                    {feedbackContent.formCategories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your feedback
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder="Tell me what you think..."
                    className="mt-2 w-full resize-none rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email{" "}
                    <span className="font-normal text-foreground-muted">
                      (optional, if you want a reply)
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {submitting ? "Sending..." : "Send Feedback"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <PageFooter />
        </div>
      </footer>
    </div>
  );
}
