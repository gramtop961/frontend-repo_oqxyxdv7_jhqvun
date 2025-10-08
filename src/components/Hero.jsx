export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-10 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-indigo-700 to-fuchsia-700 dark:from-white dark:via-indigo-200 dark:to-fuchsia-300">
            Hello, World!
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            A minimal, beautiful starter powered by Vite, React, and Tailwind CSS. Explore the components below.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#features"
              className="inline-flex items-center rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition"
            >
              View Features
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-600 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
