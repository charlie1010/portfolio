"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Determine which section is active
  const isWorkActive = pathname === "/" || pathname.startsWith("/projects");
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const snapContainer = document.querySelector("div.snap-y");
      if (snapContainer) {
        const scrollTop = snapContainer.scrollTop;
        const scrollHeight = snapContainer.scrollHeight - snapContainer.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(progress);
      } else {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(progress);
      }
    };

    // Listen to both window and snap container scroll
    const snapContainer = document.querySelector("div.snap-y");
    if (snapContainer) {
      snapContainer.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (snapContainer) {
        snapContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    const snapContainer = document.querySelector("div.snap-y");
    if (snapContainer) {
      snapContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToTop();
    }
    setMobileMenuOpen(false);
  };

  const handleCategoryClick = (e: React.MouseEvent, categoryId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(categoryId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleAboutSectionClick = (e: React.MouseEvent, sectionId: string) => {
    if (pathname === "/about") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-accent-bright transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

        <div className="flex items-center justify-between px-6 py-4 sm:px-8">
          {/* Left: Icon + Name */}
          <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-[family-name:var(--font-syne)] text-base font-bold">Charlie McCormick</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Work with dropdown */}
            <div className="group relative">
              <Link
                href="/"
                onClick={handleHomeClick}
                className={`text-base font-medium transition-colors hover:text-accent ${isWorkActive ? "text-accent" : "text-foreground-muted"}`}
              >
                Work
              </Link>
              <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-48 rounded-lg border border-border/50 bg-background p-2 shadow-lg">
                  <Link
                    href="/#category-1"
                    onClick={(e) => handleCategoryClick(e, "category-1")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent-dark/10 hover:text-accent-dark"
                  >
                    Structure
                  </Link>
                  <Link
                    href="/#category-2"
                    onClick={(e) => handleCategoryClick(e, "category-2")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    Exploration
                  </Link>
                  <Link
                    href="/#category-3"
                    onClick={(e) => handleCategoryClick(e, "category-3")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent-sage/10 hover:text-accent-sage"
                  >
                    Execution
                  </Link>
                  <Link
                    href="/#category-4"
                    onClick={(e) => handleCategoryClick(e, "category-4")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent-teal/10 hover:text-accent-teal"
                  >
                    Connection
                  </Link>
                </div>
              </div>
            </div>

            {/* About with dropdown */}
            <div className="group relative">
              <Link
                href="/about"
                onClick={(e) => {
                  if (pathname === "/about") {
                    e.preventDefault();
                    scrollToTop();
                  }
                }}
                className={`text-base font-medium transition-colors hover:text-accent ${isAboutActive ? "text-accent" : "text-foreground-muted"}`}
              >
                About
              </Link>
              <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-40 rounded-lg border border-border/50 bg-background p-2 shadow-lg">
                  <Link
                    href="/about#bio"
                    onClick={(e) => handleAboutSectionClick(e, "bio")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent-dark/10 hover:text-accent-dark"
                  >
                    Bio
                  </Link>
                  <Link
                    href="/about#values"
                    onClick={(e) => handleAboutSectionClick(e, "values")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent-dark/10 hover:text-accent-dark"
                  >
                    Values
                  </Link>
                  <Link
                    href="/about#interests"
                    onClick={(e) => handleAboutSectionClick(e, "interests")}
                    className="block rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-accent-dark/10 hover:text-accent-dark"
                  >
                    Interests
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors hover:text-accent ${isContactActive ? "text-accent" : "text-foreground-muted"}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger button - 48x48 touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-background-subtle active:bg-background-warm md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-background/95 backdrop-blur-md transition-transform md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pt-20">
          <Link
            href="/"
            onClick={handleHomeClick}
            className={`min-h-[48px] flex items-center rounded-lg px-4 py-3 text-lg font-medium transition-colors active:bg-accent/20 ${
              isWorkActive ? "text-accent" : "text-foreground"
            }`}
          >
            Work
          </Link>

          {/* Work sub-links - 48px touch targets */}
          <div className="ml-2 flex flex-col">
            <Link
              href="/#category-1"
              onClick={(e) => handleCategoryClick(e, "category-1")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent-dark/10 active:text-accent-dark"
            >
              Structure
            </Link>
            <Link
              href="/#category-2"
              onClick={(e) => handleCategoryClick(e, "category-2")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent/10 active:text-accent"
            >
              Exploration
            </Link>
            <Link
              href="/#category-3"
              onClick={(e) => handleCategoryClick(e, "category-3")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent-sage/10 active:text-accent-sage"
            >
              Execution
            </Link>
            <Link
              href="/#category-4"
              onClick={(e) => handleCategoryClick(e, "category-4")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent-teal/10 active:text-accent-teal"
            >
              Connection
            </Link>
          </div>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[48px] flex items-center rounded-lg px-4 py-3 text-lg font-medium transition-colors active:bg-accent/20 ${
              isAboutActive ? "text-accent" : "text-foreground"
            }`}
          >
            About
          </Link>

          {/* About sub-links - 48px touch targets */}
          <div className="ml-2 flex flex-col">
            <Link
              href="/about#bio"
              onClick={(e) => handleAboutSectionClick(e, "bio")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent/10 active:text-accent"
            >
              Bio
            </Link>
            <Link
              href="/about#values"
              onClick={(e) => handleAboutSectionClick(e, "values")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent/10 active:text-accent"
            >
              Values
            </Link>
            <Link
              href="/about#interests"
              onClick={(e) => handleAboutSectionClick(e, "interests")}
              className="min-h-[48px] flex items-center rounded-md px-4 text-base text-foreground-muted transition-colors active:bg-accent/10 active:text-accent"
            >
              Interests
            </Link>
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`min-h-[48px] flex items-center rounded-lg px-4 py-3 text-lg font-medium transition-colors active:bg-accent/20 ${
              isContactActive ? "text-accent" : "text-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
