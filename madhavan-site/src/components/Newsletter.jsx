'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const iframeRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    if (iframeRef.current) observer.observe(iframeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="newsletter" className="relative py-20 md:py-28 bg-brand-blue text-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Weekly Newsletter
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The CPG
              <br />
              <span className="text-brand-orange">Insider</span>
            </h2>

            <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed">
              A weekly newsletter for CPG founders and operators who want real insights — not recycled advice.
            </p>

            {/* What's inside — simple list with left border */}
            <div className="mt-8 border-l-2 border-brand-orange/40 pl-5 space-y-5">
              <div>
                <p className="text-white font-semibold text-sm">Industry Insights</p>
                <p className="text-white/45 text-sm mt-0.5">Trends, shifts, and what they mean for your brand</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Top CPG Products of the Week</p>
                <p className="text-white/45 text-sm mt-0.5">What&apos;s winning on shelves and why</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Top Marketing Campaigns</p>
                <p className="text-white/45 text-sm mt-0.5">Breakdowns of campaigns that actually moved the needle</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Pricing & Margin Strategies</p>
                <p className="text-white/45 text-sm mt-0.5">Real plays from real markets — not textbook theory</p>
              </div>
            </div>

            {/* Recent newsletters */}
            {/* Recent editions */}
            <div className="mt-10">
              <h3 className="text-white font-semibold text-base mb-5">
                Read past editions
              </h3>
              <div className="space-y-2.5">
                {[
                  { title: 'Why 80% of new CPG brands fail in Year 2', date: 'March 20, 2026', tag: 'Strategy', link: '#' },
                  { title: 'The shelf placement hack no one talks about', date: 'March 13, 2026', tag: 'Retail', link: '#' },
                  { title: 'How one Dubai brand 3x\'d margins in 6 months', date: 'March 6, 2026', tag: 'Case Study', link: '#' },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="group flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] rounded-xl px-5 py-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md bg-brand-orange/15 text-brand-orange text-[10px] font-semibold uppercase tracking-wider flex-shrink-0">
                        {item.tag}
                      </span>
                      <p className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                      <span className="text-white/30 text-xs hidden md:block">{item.date}</span>
                      <svg className="w-4 h-4 text-white/20 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Author + subscribers */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white/[0.06] border border-white/[0.08] rounded-full pl-1.5 pr-5 py-1.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-brand-orange/50 flex-shrink-0">
                <img
                  src="/assets/madhavan-photo.jpeg"
                  alt="Madhavan Unni"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-white font-medium">Madhavan Unni</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-brand-orange font-semibold">2K+ readers</span>
              </div>
            </div>
          </motion.div>

          {/* Right — ConvertKit embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-orange/15 to-brand-blue-surf/10 rounded-[2rem] blur-xl" />

            <div className="relative rounded-[1.75rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-brand-orange/15 to-white/5 rounded-[1.75rem]" />

              <div className="relative m-[1px] bg-gradient-to-br from-[#1a2d6d] to-[#152154] rounded-[1.7rem] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-sunkissed flex items-center justify-center shadow-lg shadow-brand-orange/30">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Subscribe for Free</h3>
                    <p className="text-white/40 text-xs">Join 2K+ founders who read it every week</p>
                  </div>
                </div>

                <div ref={iframeRef} className="rounded-xl overflow-hidden min-h-[500px]">
                  {loaded ? (
                    <div className="overflow-hidden rounded-xl">
                      <iframe
                        src="https://madhavan-unni.kit.com/6d2dca988c"
                        height="500"
                        frameBorder="0"
                        loading="lazy"
                        title="Subscribe to The CPG Insider"
                        className="rounded-xl"
                        style={{ background: 'transparent', width: 'calc(100% + 20px)' }}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[500px] text-white/30 text-sm">
                      Loading newsletter...
                    </div>
                  )}
                </div>

                <p className="text-white/20 text-xs text-center mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
