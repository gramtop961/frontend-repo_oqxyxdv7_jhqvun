const features = [
  {
    title: 'Fast Dev',
    description: 'Instant HMR with Vite for a delightful developer experience.',
  },
  {
    title: 'Modern Stack',
    description: 'React 18, Tailwind CSS, and sensible component structure.',
  },
  {
    title: 'Aesthetic UI',
    description: 'Clean, accessible design with responsive layouts.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 text-center">
          Features
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{f.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
