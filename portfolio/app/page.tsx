export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Portal */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
          Test1 Name
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          One line that captures what you do.
        </p>

        {/* Navigation Tiles */}
        <nav className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a
            href="#projects"
            className="group flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
          >
            <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
              Projects
            </span>
          </a>
          <a
            href="#about"
            className="group flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
          >
            <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
              About
            </span>
          </a>
          <a
            href="/resume.pdf"
            className="group flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
          >
            <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
              Resume
            </span>
          </a>
          <a
            href="#contact"
            className="group flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
          >
            <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
              Contact
            </span>
          </a>
        </nav>
      </section>

      {/* Content Sections */}
      <main className="mx-auto max-w-2xl px-6 py-24">
        {/* Projects */}
        <section id="projects" className="scroll-mt-16 py-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Projects
          </h2>
          <div className="mt-8 space-y-12">
            {/* Project 1 */}
            <article>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                Project Title
              </h3>
              <p className="mt-1 text-sm text-zinc-500">Role / Tools</p>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Brief description of the project.
              </p>
            </article>

            {/* Project 2 */}
            <article>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                Project Title
              </h3>
              <p className="mt-1 text-sm text-zinc-500">Role / Tools</p>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Brief description of the project.
              </p>
            </article>

            {/* Project 3 */}
            <article>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                Project Title
              </h3>
              <p className="mt-1 text-sm text-zinc-500">Role / Tools</p>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Brief description of the project.
              </p>
            </article>
          </div>
          <a
            href="/portfolio.pdf"
            className="mt-12 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
          >
            View full portfolio
          </a>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 py-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            About
          </h2>
          <div className="mt-8 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>First paragraph about yourself.</p>
            <p>Second paragraph about yourself.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 py-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Contact
          </h2>
          <div className="mt-8 space-y-2 text-zinc-600 dark:text-zinc-400">
            <p>
              <a
                href="mailto:your@email.com"
                className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                your@email.com
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/you"
                className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-zinc-400 dark:text-zinc-600">
        © 2025
      </footer>
    </div>
  );
}
