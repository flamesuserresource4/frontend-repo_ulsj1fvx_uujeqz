import React from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Let's build something exceptional</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-prose">I’m open to freelance work, creative collaborations, and full-time roles. Drop a message and I’ll get back to you shortly.</p>

          <div className="mt-6 flex items-center gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition">
              <Mail size={16} /> Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition">
              <Github size={16} /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-6 shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Name</label>
              <input type="text" required className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Email</label>
              <input type="email" required className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Message</label>
            <textarea rows="5" required className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">
            <Send size={16} /> Send Message
          </button>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">This demo form doesn’t send yet. Hook it to your favorite service (EmailJS, Formspree, etc.).</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
