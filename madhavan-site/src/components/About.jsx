'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Supporting color background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/[0.05] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-orange/[0.05] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-brand-yellow/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-brand-green/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16">
        {/* Section header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-orange to-brand-sunkissed" />
            <p className="text-brand-orange text-sm font-semibold tracking-wider uppercase">About Me</p>
            <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-sunkissed to-brand-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight">
            Madhavan Unni
          </h2>
          <p className="text-brand-gray text-base mt-2">
            CPG Brand Strategist — Middle East & India
          </p>
        </motion.div>

        {/* Content grid — no box */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left — Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="space-y-5 text-brand-dark/70 text-[15px] leading-[1.8]">
              <p>
                Friends and colleagues call me <strong className="text-brand-orange">Maddy</strong>.
              </p>
              <p>
                I grew up in my father&apos;s grocery store around brands, distribution, and merchandising. That early exposure shaped how I see consumer businesses. I didn&apos;t know it then, but I was learning merchandising, velocity, and margin before I understood the terminology.
              </p>
              <p>
                <strong className="text-brand-blue text-base">Markets changed. I evolved with them.</strong>
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

            {/* Quote highlight */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pl-5 border-l-[3px] border-gradient border-brand-orange"
            >
              <p className="text-brand-blue font-semibold italic text-base leading-relaxed">
                Everything I share is shaped by execution, not theory.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:admin@madhavan.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue/90 transition-all shadow-md shadow-brand-blue/15"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                admin@madhavan.com
              </a>
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-blue/15 text-brand-blue text-sm font-medium rounded-lg hover:bg-brand-blue/[0.04] transition-all"
              >
                Book a Call
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
                { number: '2', label: 'Continents', color: 'from-brand-blue/[0.06] to-brand-blue-surf/[0.03]', textColor: 'text-brand-blue' },
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
