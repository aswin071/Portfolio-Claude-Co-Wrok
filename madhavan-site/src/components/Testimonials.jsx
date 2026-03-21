import { useState, useEffect, useCallback } from 'react'

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

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)

  const goNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const goPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [isPaused, goNext])

  const visibleTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  )

  return (
    <section
      className="section-padding bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="section-heading">What Founders Are Saying</h2>
          <p className="section-subheading mx-auto">
            Real feedback from founders and operators across the Middle East & India
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, i) => (
            <div
              key={currentPage * cardsPerPage + i}
              className="relative flex flex-col p-8 rounded-2xl bg-brand-light border border-gray-100 hover:border-brand-orange/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <svg className="absolute top-5 right-5 w-8 h-8 text-brand-orange/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <Stars />
              <p className="text-brand-dark/80 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 shadow-md shadow-brand-orange/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                  <p className="text-brand-gray text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors z-10"
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors z-10"
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots + counter */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? 'w-8 bg-brand-orange'
                  : 'w-2 bg-brand-dark/15 hover:bg-brand-dark/30'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
          <span className="ml-4 text-brand-gray text-xs font-medium">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>
    </section>
  )
}
