'use client'

import { motion } from 'framer-motion'
import SmoothLink from './SmoothLink'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E3A8A08 0%, #ffffff 30%, #F9731606 60%, #ffffff 80%, #FBBF2404 100%)' }}>
      {/* Color blobs */}
      <div className="absolute -top-20 -left-20 w-[700px] h-[500px] bg-brand-blue/[0.07] rounded-[40%] blur-[100px] rotate-12" />
      <div className="absolute top-1/3 -right-10 w-[300px] h-[700px] bg-brand-orange/[0.05] rounded-[50%] blur-[80px] -rotate-12" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-yellow/[0.04] rounded-full blur-[120px]" />
      <div className="absolute -bottom-10 left-1/4 w-[350px] h-[250px] bg-brand-green/[0.04] rounded-full blur-[100px]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1E3A8A 0.8px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-16">
        {/* Top — heading like Ali Abdaal style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-blue leading-[1.1] tracking-tight">
            Hey, I&apos;m
            <br />
            <span className="text-brand-orange">Madhavan Unni</span>
          </h2>
        </motion.div>

        {/* Main grid — text left, photos right */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="space-y-5 text-brand-dark/65 text-[15px] leading-[1.85]">
              <p>
                Friends and colleagues call me <strong className="text-brand-orange">Maddy</strong>.
              </p>
              <p>
                I grew up in my father&apos;s grocery store around brands, distribution, and merchandising. That early exposure shaped how I see consumer businesses. I didn&apos;t know it then, but I was learning merchandising, velocity, and margin before I understood the terminology.
              </p>
              <p className="text-brand-blue text-base font-semibold">
                Markets changed. I evolved with them.
              </p>
              <p>
                Over the years, I&apos;ve worked across complex, fast-moving markets in East Asia and Dubai operating at the intersection of brand, retail, and commercial strategy.
              </p>
              <p>
                I&apos;ve collaborated with international brands like{' '}
                <span className="text-brand-orange font-medium">Twinings Tea</span>,{' '}
                <span className="text-brand-orange font-medium">Dorset Cereals</span>,{' '}
                <span className="text-brand-orange font-medium">Lamb Weston</span>,{' '}
                <span className="text-brand-orange font-medium">Bateel Dates</span>, and{' '}
                <span className="text-brand-orange font-medium">Pure Harvest Smart Farms</span>{' '}
                while engaging closely with major regional retailers.
              </p>
              <p>
                Today, I help founders launch their FMCG brands across both online and offline channels and build the systems required to scale exponentially.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pl-5 border-l-[3px] border-brand-orange"
            >
              <p className="text-brand-blue font-semibold italic text-base leading-relaxed">
                Everything I share is shaped by execution, not theory.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="mailto:admin@madhavanunni.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue/90 transition-all shadow-md shadow-brand-blue/15"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                admin@madhavanunni.com
              </a>
              <SmoothLink
                to="book-call"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-blue/15 text-brand-blue text-sm font-medium rounded-lg hover:bg-brand-blue/[0.04] transition-all"
              >
                Let&apos;s Talk
              </SmoothLink>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="text-brand-gray text-xs mr-1">Follow:</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-brand-blue/[0.06] hover:bg-brand-blue/[0.12] flex items-center justify-center text-brand-blue/60 hover:text-brand-blue transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-brand-orange/[0.06] hover:bg-brand-orange/[0.12] flex items-center justify-center text-brand-orange/60 hover:text-brand-orange transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-brand-red/[0.06] hover:bg-brand-red/[0.12] flex items-center justify-center text-brand-red/60 hover:text-brand-red transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Logo + stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 md:sticky md:top-32"
          >
            {/* Decorative curved line */}
            <svg className="absolute -left-8 top-1/2 -translate-y-1/2 w-[calc(100%+64px)] h-full opacity-[0.06] pointer-events-none" viewBox="0 0 400 500" fill="none">
              <path d="M380 50C300 100 100 150 50 250S100 400 200 450" stroke="#F97316" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            {/* Logo — clean, no box per brand guidelines */}
            <div className="flex justify-center mb-10">
              <img
                src="/assets/logo/logo-light.png"
                alt="Madhavan signature"
                className="w-52 md:w-60 h-auto object-contain"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '6+', label: 'Global Brands', color: 'from-brand-orange/[0.06] to-brand-sunkissed/[0.03]', textColor: 'text-brand-orange' },
                { number: '10+', label: 'Countries', color: 'from-brand-blue/[0.06] to-brand-blue-surf/[0.03]', textColor: 'text-brand-blue' },
                { number: '10+', label: 'Years in CPG', color: 'from-brand-green/[0.06] to-emerald-400/[0.03]', textColor: 'text-brand-green' },
                { number: '$100M+', label: 'Revenue Impact', color: 'from-brand-yellow/[0.06] to-amber-400/[0.03]', textColor: 'text-brand-yellow' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 border border-gray-100 text-center`}
                >
                  <p className={`text-2xl md:text-3xl font-bold ${stat.textColor}`}>{stat.number}</p>
                  <p className="text-brand-gray text-xs mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
