'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const testimonials = [
  {
    quote: "Working with Madhavan completely changed how we approached our brand in the coffee category. We weren't struggling with marketing — we were struggling with clarity. He broke down our pricing, positioning, and distribution in a way no agency ever did. Within weeks, we started seeing actual movement at retail.",
    name: 'Ahmed K.',
    location: 'Dubai',
  },
  {
    quote: "Most consultants talk about branding. Madhavan talks about what actually sells. From SKU mix to margin structure to retail strategy, everything was practical and rooted in real execution. This is the first time marketing felt like a growth lever, not an expense.",
    name: 'Rohan Mehta',
    location: 'Mumbai',
  },
  {
    quote: "We had a good product but zero traction. Madhavan helped us understand why — and it wasn't what we expected. He reworked our pricing and visibility strategy, and within 2 months, our velocity improved significantly. Simple changes. Massive impact.",
    name: 'Sara Al Mazrouei',
    location: 'Abu Dhabi',
  },
  {
    quote: "What stood out about Madhavan is that he doesn't give \"advice.\" He gives direction. Everything is backed by how the market actually works — retailers, margins, consumer behavior. If you're building a CPG brand in the Middle East, this is the perspective you need.",
    name: 'Dana Al-Rashid',
    location: 'Riyadh',
  },
  {
    quote: "We were burning money on marketing that looked good but didn't convert. Madhavan helped us rethink everything from content to channel strategy to how we show up in-store. The difference? We finally started seeing consistent sales, not just spikes.",
    name: 'Neha Gupta',
    location: 'Bangalore',
  },
  {
    quote: "I've worked with multiple growth agencies before, but this felt different. Madhavan understands both sides — brand and retail. He helped us align our product, pricing, and placement — and suddenly things started making sense.",
    name: 'Omar S.',
    location: 'Dubai',
  },
  {
    quote: "The biggest value was how he simplified things. No fluff. No jargon. Just clear thinking on what to do next and why. If you're serious about scaling a CPG brand, you should talk to Madhavan — it will save you months of trial and error.",
    name: 'Hugo Chevalier',
    location: 'Abu Dhabi',
  },
  {
    quote: "We thought we had a distribution problem. Turns out, it was a positioning problem. Madhavan helped us fix the fundamentals first — and everything downstream improved. Sales, retailer conversations, even our confidence as founders.",
    name: 'Rahul',
    location: 'Kochi',
  },
  {
    quote: "This is not theory. This is operator-level thinking. Every conversation with Madhavan feels like you're getting access to years of real market experience, compressed into actionable steps. Highly recommend if you're building in UAE or KSA.",
    name: 'Saud Al-Otaibi',
    location: 'Riyadh',
  },
  {
    quote: "The biggest shift for us was mindset. We stopped chasing trends and started building a real brand — with clear pricing, strong visibility, and a scalable structure. That came directly from working with Madhavan.",
    name: 'Anand Mishra',
    location: 'Bangalore',
  },
]

// Split testimonials into two columns
const columnOne = testimonials.filter((_, i) => i % 2 === 0)
const columnTwo = testimonials.filter((_, i) => i % 2 !== 0)

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 mb-5 transition-all duration-500 hover:border-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/[0.06] hover:scale-[1.02]">
      <div className="relative z-[1]">
        {/* Quote icon top-right */}
        <svg className="absolute -top-1 right-0 w-8 h-8 text-brand-blue/[0.07] group-hover:text-brand-orange/20 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
        </svg>

        <Stars />
        <p className="text-brand-dark/75 text-[13px] leading-relaxed mb-5 group-hover:text-brand-dark/90 transition-colors duration-300">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-surf text-white font-bold flex items-center justify-center text-xs flex-shrink-0 shadow-md shadow-brand-blue/15">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-brand-dark text-sm">{testimonial.name}</p>
            <p className="text-brand-gray text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScrollingColumn({ items, direction = 'up', duration = 30, isPaused }) {
  const columnRef = useRef(null)
  const controls = useAnimationControls()
  const heightRef = useRef(0)

  const duplicated = [...items, ...items]

  // Start/restart animation
  const startScroll = useCallback(async () => {
    const el = columnRef.current
    if (!el) return

    await new Promise((r) => setTimeout(r, 100))
    heightRef.current = el.scrollHeight / 2

    if (direction === 'up') {
      controls.set({ y: 0 })
      controls.start({
        y: -heightRef.current,
        transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
      })
    } else {
      controls.set({ y: -heightRef.current })
      controls.start({
        y: 0,
        transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
      })
    }
  }, [controls, direction, duration])

  useEffect(() => {
    startScroll()
  }, [startScroll])

  // Pause/resume on hover
  useEffect(() => {
    if (isPaused) {
      controls.stop()
    } else {
      startScroll()
    }
  }, [isPaused, controls, startScroll])

  return (
    <div className="overflow-hidden h-[550px] md:h-[700px] relative">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <motion.div ref={columnRef} animate={controls} className="flex flex-col">
        {duplicated.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Supporting color blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/[0.04] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-brand-blue/[0.04] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-yellow/[0.04] rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left side — heading + description */}
          <div className="md:sticky md:top-32 self-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-orange to-brand-sunkissed" />
              <p className="text-brand-orange font-semibold text-sm tracking-wider uppercase">
                Testimonials
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight mb-6">
              What founders<br />are saying
            </h2>
            <p className="text-brand-gray text-base leading-relaxed max-w-md mb-8">
              Real feedback from founders and operators building CPG brands across the Middle East & India. These are the people in the trenches and this is what they have to say.
            </p>
            <a
              href="#book-call"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-brand-blue/20"
            >
              Book a Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right side — two scrolling columns, pause on hover */}
          <div
            className="grid grid-cols-2 gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ScrollingColumn items={columnOne} direction="up" duration={35} isPaused={isPaused} />
            <ScrollingColumn items={columnTwo} direction="down" duration={35} isPaused={isPaused} />
          </div>
        </div>
      </div>
    </section>
  )
}
