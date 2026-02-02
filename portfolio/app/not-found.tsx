import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6">
      <span className="text-8xl font-bold text-accent/30">404</span>
      <h1 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Page not found
      </h1>
      <p className="mt-2 text-zinc-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-dark"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Work
      </Link>
    </div>
  );
}
