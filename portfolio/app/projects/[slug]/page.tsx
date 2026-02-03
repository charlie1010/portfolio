import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getNextProject, projects } from "@/app/lib/data";
import { ArrowIcon, PageFooter } from "@/app/components/ui";
import { notFound } from "next/navigation";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Section icons as simple components
function ChallengeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.41L18.59 12 12 18.59 5.41 12 12 5.41z" />
    </svg>
  );
}

function SolutionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OutcomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

function LessonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
    </svg>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <div className="flex min-h-screen flex-col bg-background pt-16">
      {/* Main Content */}
      <main className="flex flex-1 flex-col lg:flex-row lg:overflow-hidden">
        {/* Left Column - Context (warmer background) */}
        <div className="flex w-full flex-col bg-background-warmest lg:w-[40%]">
          <div className="flex flex-col p-6 sm:p-8 lg:h-full">
            {/* Back Link */}
            <Link
              href="/"
              className="back-link inline-flex w-fit items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent-dark"
            >
              <ArrowIcon direction="left" className="h-4 w-4" />
              Back
            </Link>

            {/* Title & Meta */}
            <div className="mt-4">
              <span className="text-caption text-accent-dark">{project.category}</span>
              <h1 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold leading-tight text-foreground lg:text-2xl">
                {project.title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-foreground-muted">
                <span>{project.role}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
              {project.description}
            </p>

            {/* Skills Tags */}
            {project.skills && project.skills.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border bg-background-warm px-2 py-1 text-xs text-foreground-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Project Image */}
            <div className="relative mt-4 aspect-[4/3] max-h-64 overflow-hidden rounded-sm lg:max-h-80">
              {project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-accent-dark via-accent to-accent-bright/80">
                  {/* Category initial as background element */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-[family-name:var(--font-syne)] text-[10rem] font-bold text-white/10">
                    {project.category.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Story (lighter background) */}
        <div className="flex w-full flex-col bg-background lg:w-[60%]">
          {/* Challenge */}
          <div className="group flex flex-1 flex-col justify-center border-b border-border px-6 py-4 transition-colors hover:bg-accent-bright/5 sm:px-8">
            <div className="flex items-center gap-2">
              <ChallengeIcon className="h-4 w-4 text-accent-dark" />
              <h2 className="font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-accent-dark">
                Challenge
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="group flex flex-1 flex-col justify-center border-b border-border px-6 py-4 transition-colors hover:bg-accent-bright/5 sm:px-8">
            <div className="flex items-center gap-2">
              <SolutionIcon className="h-4 w-4 text-accent-dark" />
              <h2 className="font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-accent-dark">
                Solution
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              {project.solution}
            </p>
          </div>

          {/* Outcome */}
          <div className="group flex flex-1 flex-col justify-center border-b border-border px-6 py-4 transition-colors hover:bg-accent-bright/5 sm:px-8">
            <div className="flex items-center gap-2">
              <OutcomeIcon className="h-4 w-4 text-accent-dark" />
              <h2 className="font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-accent-dark">
                Outcome
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              {project.outcome}
            </p>
          </div>

          {/* Lesson */}
          {project.lesson && (
            <div className="group flex flex-1 flex-col justify-center px-6 py-4 transition-colors hover:bg-accent-bright/5 sm:px-8">
              <div className="flex items-center gap-2">
                <LessonIcon className="h-4 w-4 text-accent-dark" />
                <h2 className="font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-accent-dark">
                  What I Learned
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {project.lesson}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-border px-6 py-3 sm:px-8">
        <PageFooter />
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="next-link group inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent-dark"
          >
            Next: {nextProject.title}
            <ArrowIcon direction="right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </footer>
    </div>
  );
}
