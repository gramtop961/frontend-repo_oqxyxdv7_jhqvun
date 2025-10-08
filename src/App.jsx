import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/60 to-fuchsia-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
