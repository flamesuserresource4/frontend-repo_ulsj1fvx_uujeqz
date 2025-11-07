import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Rocket, Layers, Mail } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${
      scrolled ? 'bg-white/70 dark:bg-slate-900/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800 dark:text-white group-hover:text-indigo-500 transition">My Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            <a href="#projects" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 text-slate-800 dark:text-slate-100">
              <Layers size={18} /> Projects
            </a>
            <a href="#services" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 text-slate-800 dark:text-slate-100">
              Services
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 text-slate-800 dark:text-slate-100">
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
