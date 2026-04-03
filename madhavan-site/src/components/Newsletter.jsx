'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Newsletter() {
  const iframeRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const newsletters = [
    {
      title: 'Oh no! you missed this 😥',
      desc: 'A deep dive into why some CPG campaigns convert instantly, while others burn cash without generating repeat purchase.',
      tag: 'Newsletter',
      date: 'October 24, 2024',
      published: true,
      link: 'https://madhavan-unni.kit.com/posts/oh-no-you-missed-this'
    },
    {
      title: 'Retail Velocity Playbook',
      desc: 'Supercharge your retail strategy with a complete toolkit to understand shelf dynamics and rapidly scale your growth.',
      tag: 'Insights',
      date: 'October 31, 2024',
      published: false,
      link: 'coming_soon'
    },
    {
      title: 'The 1% Margin Challenge',
      desc: 'Stop guessing, start optimizing. Learn how a tiny adjustment in retail pricing strategy completely revolutionized the bottom line.',
      tag: 'Case Study',
      date: 'November 7, 2024',
      published: false,
      link: 'coming_soon'
    }
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % newsletters.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + newsletters.length) % newsletters.length)

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
            {/* Authentic Typography-Driven Carousel (No Boxes) */}
            <div className="mt-16 w-full max-w-md">
              {/* Header + Minimal Arrows */}
              <div className="flex items-end justify-between mb-8 border-b border-white/[0.08] pb-4">
                <h3 className="text-white/80 text-sm font-bold tracking-[0.2em] uppercase">
                  Past Editions
                </h3>
                <div className="flex items-center gap-3">
                  <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFC107] text-[#1A202C] hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg" aria-label="Previous">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFC107] text-[#1A202C] hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg" aria-label="Next">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Single Item Framer Motion Viewport */}
              <div className="relative h-[290px] md:h-[280px] w-full overflow-hidden">
                {newsletters.map((item, idx) => (
                  <motion.div 
                     key={idx} 
                     initial={false}
                     animate={{ 
                       opacity: currentSlide === idx ? 1 : 0,
                       x: `${(idx - currentSlide) * 100}%`
                     }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     className="absolute inset-0 w-full flex flex-col justify-start"
                     style={{ pointerEvents: currentSlide === idx ? 'auto' : 'none' }}
                  >
                     <div className="bg-[#1e2f5d]/40 hover:bg-[#1e2f5d]/60 border border-white/5 hover:border-white/10 rounded-[1.5rem] p-6 md:p-8 h-full flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden group">
                       {/* Subtle accent glow top right */}
                       <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                       
                       <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-5">
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-md ${item.published ? 'bg-brand-orange/20 text-brand-orange' : 'bg-white/5 text-white/40'}`}>
                              {item.tag}
                            </span>
                            <span className="text-white/40 text-xs font-semibold">{item.date}</span>
                         </div>
                         
                         <h4 
                           onClick={() => item.published ? setSelectedPost(item.link) : setSelectedPost('coming_soon')}
                           className="font-serif font-bold text-white text-xl md:text-2xl leading-snug mb-3 cursor-pointer hover:text-brand-orange transition-colors"
                         >
                           {item.title}
                         </h4>
                         
                         <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                           {item.desc}
                         </p>
                       </div>
                       
                       <button 
                         onClick={() => item.published ? setSelectedPost(item.link) : setSelectedPost('coming_soon')}
                         className={`flex items-center text-sm font-bold tracking-wide transition-colors w-max relative z-10 group/btn ${item.published ? 'text-brand-orange hover:text-white' : 'text-white/30 hover:text-white/50 cursor-not-allowed'}`}
                       >
                         {item.published ? 'Read Edition' : 'Coming Soon'} 
                         <svg className={`w-4 h-4 ml-1.5 transition-transform ${item.published ? 'group-hover/btn:translate-x-1.5' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                       </button>
                     </div>
                  </motion.div>
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
      {/* Post Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1A202C]/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl h-[85vh] md:h-[90vh] flex flex-col"
            >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white shadow-sm z-10">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-brand-blue">
                The CPG Insider <span className="font-sans text-brand-orange font-medium text-lg ml-2 border-l border-gray-200 pl-2">Past Edition</span>
              </h3>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2.5 rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-100"
              >
                <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Modal Content - iFrame */}
            <div className="flex-1 w-full relative">
              {selectedPost === 'coming_soon' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF8F5] p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4">Edition Coming Soon</h2>
                  <p className="text-brand-blue/60 text-lg max-w-sm mx-auto">This newsletter edition hasn't been published yet. Subscribe to the CPG Insider to get it directly in your inbox.</p>
                </div>
              ) : (
                <div className="absolute inset-0 bg-white">
                  <div className="absolute inset-0 flex items-center justify-center text-brand-blue/30 text-lg font-medium">
                    Loading ...
                  </div>
                  <iframe 
                    src={selectedPost}
                    className="relative z-10 w-full h-full bg-white"
                    frameBorder="0"
                    title="Newsletter Post"
                  />
                </div>
              )}
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
