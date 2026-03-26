'use client'

import { motion } from 'framer-motion'

const paragraphs = [
  {
    text: 'As long as humanity exists, we will need food, clothing, and everyday essentials.\nAnd as long as that remains true, CPG will exist.\nNot as a trend. But as a fundamental layer of life.',
    highlight: false,
  },
  {
    text: 'We are in an industry that feeds people.\nThat lives inside homes, routines, and habits.\nQuietly. Daily. Consistently.',
    highlight: false,
  },
  {
    text: "There's a lot of noise about AI.\nAI will change how we work, how we forecast, market, and optimize.\nBut AI cannot be eaten. AI cannot be worn.",
    highlight: true,
  },
  {
    text: "CPG is not immune to change. But it remains grounded in reality.\nYou still have to build something real.\nMove it.\nPrice it.\nEarn its space.",
    highlight: false,
  },
  {
    text: 'This is an industry of margins, velocity, and behaviour.\nOf understanding why someone picks your product\nover the 20 others next to it.',
    highlight: false,
  },
  {
    text: "We don't build for clicks.\nWe build for repeat purchase.\nFor habit.\nFor trust.",
    highlight: true,
  },
  {
    text: "This is not easy.\nBut it is real.\nAnd that's exactly why it's worth building in.",
    highlight: false,
  },
  {
    text: 'If you understand shelves,\nyou understand people.\nAnd if you understand people,\nyou understand business.',
    highlight: true,
  },
]

export default function OpenLetter() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(160deg, #1E3A8A06 0%, #ffffff 25%, #F9731604 50%, #ffffff 75%, #FBBF2403 100%)' }}>
      {/* Color blobs */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[400px] bg-brand-blue/[0.05] rounded-[40%] blur-[100px] rotate-6" />
      <div className="absolute top-1/3 -right-10 w-[400px] h-[500px] bg-brand-orange/[0.04] rounded-[50%] blur-[80px] -rotate-12" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[250px] bg-brand-yellow/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-[200px] h-[200px] bg-brand-green/[0.03] rounded-full blur-[80px]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1E3A8A 0.8px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute top-20 bottom-20 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-brand-blue/[0.06] to-transparent hidden lg:block" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/[0.06] text-brand-blue text-xs font-semibold tracking-wider uppercase mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            An Open Letter
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-brand-blue leading-tight tracking-tight">
            To CPG Founders, Operators,
            <br />
            <span className="text-brand-orange">and the Curious</span>
          </h2>
        </motion.div>

        {/* Letter body */}
        <div className="space-y-8">
          {paragraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={p.highlight ? 'pl-5 border-l-[3px] border-brand-orange' : ''}
            >
              <p className={`whitespace-pre-line leading-[1.9] ${
                p.highlight
                  ? 'text-brand-dark/85 text-base md:text-lg font-medium'
                  : 'text-brand-dark/60 text-[15px] md:text-base'
              }`}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-brand-blue">
            Welcome to <span className="text-brand-orange">CPG.</span>
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src="/assets/logo/logo-light.png"
              alt="Madhavan"
              className="h-[104px] md:h-[120px] w-auto opacity-40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
