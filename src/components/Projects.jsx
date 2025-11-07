import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Holographic Portfolio',
    desc: 'A 3D interactive portfolio with Spline + Framer Motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'A data-rich dashboard with animated charts and live updates.',
    tags: ['React', 'WebSockets', 'Charts'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Art Studio',
    desc: 'Generate and curate artworks with AI and subtle micro-interactions.',
    tags: ['AI', 'Next.js', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">A selection of work that blends design, code, and motion.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-xl hover:shadow-indigo-600/10 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">{t}</span>
                  ))}
                </div>
                <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500">
                  View <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
