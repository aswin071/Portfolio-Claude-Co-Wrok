'use client'

import { motion } from 'framer-motion'
import SmoothLink from './SmoothLink'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const slideIn = (delay = 0, x = 0, y = 0) => ({
  initial: { opacity: 0, x, y },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden"
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1E3A8A 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-32 md:pt-40 pb-8">
        {/* Main hero grid */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          {/* Left — Content (7 cols) */}
          <div className="order-2 md:order-1 md:col-span-7">
            <motion.h1
              {...fadeUp(0.3)}
              className="text-[2.75rem] sm:text-5xl md:text-[3.25rem] lg:text-[4rem] font-bold text-brand-blue leading-[1.08] tracking-tight"
            >
              Helping CPG Brands
              <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-[1]">Launch & Scale.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1 left-0 w-full h-3 bg-brand-orange/15 -z-0 rounded-sm origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.55)}
              className="mt-7 text-base md:text-[1.1rem] text-brand-gray leading-relaxed max-w-md"
            >
              I work with founders and operators building consumer brands across the Middle East & India from strategy to scale.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.7)} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://madhavan-unni.kit.com/6d2dca988c"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-all duration-300 text-sm tracking-wide shadow-lg shadow-brand-blue/20"
              >
                Join Newsletter
                <svg className="w-4 h-4 ml-2.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <SmoothLink
                to="book-call"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-brand-blue/15 text-brand-blue font-medium rounded-lg hover:bg-brand-blue/[0.04] transition-all duration-300 text-sm tracking-wide"
              >
                Let&apos;s Talk
              </SmoothLink>
            </motion.div>

            {/* Subtle social proof line */}
            <motion.div {...fadeUp(0.85)} className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['A', 'R', 'S', 'D'].map((letter, i) => (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: ['#1E3A8A', '#3B5B8A', '#F97316', '#1E3A8A'][i],
                      zIndex: 4 - i,
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-xs text-brand-gray"
              >
                Trusted by founders in <span className="text-brand-dark font-medium">Dubai, Riyadh, Mumbai, London</span> & more
              </motion.p>
            </motion.div>
          </div>

          {/* Right — Photo composition (5 cols) */}
          <div className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              {/* Background accent — Deep Blue rectangle */}
              <motion.div
                {...fadeIn(0.2)}
                className="absolute -bottom-4 -right-4 w-full h-full bg-brand-blue rounded-3xl"
              />

              {/* Photo */}
              <motion.div
                {...fadeIn(0.4)}
                className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[440px] rounded-3xl overflow-hidden"
              >
                <img
                  src="/assets/madhavan-photo.jpg"
                  alt="Madhavan Unni — CPG Brand Strategist"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-blue/40 to-transparent" />
              </motion.div>

              {/* Floating card — top right */}
              <motion.div
                {...slideIn(0.8, 30, -20)}
                className="absolute -top-5 -right-8 md:-right-14 bg-white rounded-xl shadow-xl shadow-brand-dark/[0.06] p-3.5 flex items-center gap-3 border border-gray-50"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-brand-gray uppercase tracking-wider font-medium">Worked with</p>
                  <p className="text-sm font-bold text-brand-dark leading-tight">10+ Brands</p>
                </div>
              </motion.div>

              {/* Floating card — bottom left */}
              <motion.div
                {...slideIn(0.95, -30, 20)}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-xl shadow-xl shadow-brand-dark/[0.06] p-3.5 flex items-center gap-3 border border-gray-50"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-brand-gray uppercase tracking-wider font-medium">Markets</p>
                  <p className="text-sm font-bold text-brand-dark leading-tight">10+ Markets</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section — clean divider + newsletter + anchors */}
        <motion.div {...fadeUp(1.1)} className="mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left — anchor links */}
            <div className="flex items-center gap-8">
              <SmoothLink
                to="who-this-is-for"
                className="group flex items-center gap-2.5 text-sm text-brand-gray hover:text-brand-blue transition-colors"
              >
                <span className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-brand-blue/30 group-hover:bg-brand-blue/[0.04] transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="font-medium">Who This Is For</span>
              </SmoothLink>
              <SmoothLink
                to="what-i-do"
                className="group flex items-center gap-2.5 text-sm text-brand-gray hover:text-brand-blue transition-colors"
              >
                <span className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-brand-blue/30 group-hover:bg-brand-blue/[0.04] transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="font-medium">What I Do</span>
              </SmoothLink>
            </div>

            {/* Right — newsletter CTA */}
            <div className="flex items-center gap-6">
              <div className="hidden md:block text-right">
                <p className="text-sm font-semibold text-brand-dark">The CPG Insider</p>
                <p className="text-xs text-brand-gray">Weekly insights. No fluff.</p>
              </div>
              <a
                href="https://madhavan-unni.kit.com/6d2dca988c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-white text-sm font-medium rounded-lg hover:bg-brand-sunkissed transition-colors shadow-md shadow-brand-orange/20"
              >
                Subscribe
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
