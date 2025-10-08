import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">Vite</a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">React</a>
        </nav>
      </div>
    </header>
  );
}
