import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Creative Developer • Designer • Innovator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl"
          >
            I craft immersive digital experiences with cutting-edge animations, performant code, and meticulous design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-cyan-500 text-white font-medium shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-fuchsia-600/25 transition"
            >
              View My Work
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.12),transparent_40%)]" />
    </section>
  );
};

export default Hero;
