'use client'

import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative py-20 md:py-28 bg-brand-blue text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Weekly Insights
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The CPG
              <br />
              <span className="text-brand-orange">Insider</span>
            </h2>

            <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed">
              No fluff. Just real insights from someone who has built and scaled CPG brands across the Middle East and India.
            </p>
            <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed">
              Every week I share what&apos;s actually working in-market — on pricing, distribution, margins, and retail.
            </p>

            {/* Value points */}
            <div className="mt-8 space-y-4">
              {[
                'Pricing & margin strategies that work',
                'Distribution insights from real markets',
                'Retail execution playbooks',
                'Category trends in Middle East & India',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Author strip */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                <img
                  src="/assets/madhavan-photo.jpeg"
                  alt="Madhavan Unni"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-white/50 text-sm">
                Written by <span className="text-white/80 font-medium">Madhavan Unni</span> every week.
              </p>
            </div>
          </motion.div>

          {/* Right — ConvertKit embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-orange/20 via-brand-yellow/10 to-brand-blue-surf/10 rounded-[2rem] blur-xl" />

            <div className="relative rounded-[1.75rem] overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-brand-orange/20 to-white/5 rounded-[1.75rem]" />

              <div className="relative m-[1px] bg-gradient-to-br from-[#1a2d6d] to-[#152154] rounded-[1.7rem] p-6 md:p-8">
                {/* Top decorative bar */}
                <div className="flex gap-1.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green/40" />
                </div>

                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-sunkissed flex items-center justify-center shadow-lg shadow-brand-orange/30">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Subscribe for Free</h3>
                      <p className="text-white/40 text-xs">Join founders who read it every week</p>
                    </div>
                  </div>
                </div>

                {/* Embed — extra width to push scrollbar out of view */}
                <div className="rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.06] p-1">
                  <div className="overflow-hidden rounded-xl">
                    <iframe
                      src="https://madhavan-unni.kit.com/6d2dca988c"
                      height="500"
                      frameBorder="0"
                      title="Subscribe to The CPG Insider"
                      className="rounded-xl"
                      style={{ background: 'transparent', width: 'calc(100% + 20px)' }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-white/25 text-xs">
                    No spam. Unsubscribe anytime.
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-brand-green" />
                    <p className="text-white/30 text-[10px] uppercase tracking-wider">Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
