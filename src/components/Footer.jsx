export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/" className="hover:text-slate-900 dark:hover:text-white">Home</a>
          <a href="https://tailwindcss.com" className="hover:text-slate-900 dark:hover:text-white" target="_blank" rel="noreferrer">Tailwind</a>
          <a href="https://vercel.com" className="hover:text-slate-900 dark:hover:text-white" target="_blank" rel="noreferrer">Vercel</a>
        </div>
      </div>
    </footer>
  );
}
