'use client'

import { motion } from 'framer-motion'

export default function BookCall() {
  return (
    <section id="book-call" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Supporting color decorative shapes */}
      {/* Large blue blob — bottom right */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-brand-blue/[0.08] rounded-full blur-[80px]" />
      {/* Orange accent — top left */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-brand-orange/[0.06] rounded-full blur-[80px]" />
      {/* Yellow highlight — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-brand-yellow/[0.04] rounded-full blur-[100px]" />
      {/* Green accent — bottom left */}
      <div className="absolute bottom-10 left-1/4 w-[200px] h-[200px] bg-brand-green/[0.04] rounded-full blur-[80px]" />

      {/* Geometric color shapes (like the Calendly reference) */}
      <div className="absolute top-16 right-10 w-32 h-32 bg-brand-orange/[0.08] rounded-3xl rotate-12" />
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-brand-blue/[0.06] rounded-full" />
      <div className="absolute top-1/3 left-8 w-20 h-20 bg-brand-yellow/[0.07] rounded-2xl -rotate-6" />
      <div className="absolute bottom-12 left-10 w-16 h-16 bg-brand-green/[0.06] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:sticky md:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-orange to-brand-sunkissed" />
              <p className="text-brand-orange text-sm font-semibold tracking-wider uppercase">
                Let&apos;s Talk
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight mb-5">
              Book a 1:1 Call
            </h2>
            <p className="text-brand-gray text-base leading-relaxed mb-6">
              If you&apos;re a founder or operator building a CPG brand and want a focused conversation on your biggest challenge — book a call.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { text: 'Come with a specific problem', color: 'bg-brand-orange/10 text-brand-orange' },
                { text: 'Leave with a clear direction', color: 'bg-brand-green/10 text-brand-green' },
                { text: 'No pitch, just strategy', color: 'bg-brand-blue/10 text-brand-blue' },
              ].map((point) => (
                <div key={point.text} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full ${point.color} flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-brand-dark/70 text-sm">{point.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-brand-gray">
              Prefer email? Reach out at{' '}
              <a href="mailto:admin@madhavan.com" className="text-brand-blue hover:text-brand-orange transition-colors font-medium">
                admin@madhavan.com
              </a>
            </p>
          </motion.div>

          {/* Right — Calendly embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
          >
            <div className="rounded-2xl overflow-hidden bg-white shadow-xl shadow-brand-blue/[0.06] border border-gray-100">
              <iframe
                src="https://calendly.com/madhavanunni/new-meeting"
                width="100%"
                height="650"
                frameBorder="0"
                title="Schedule a call with Madhavan"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
