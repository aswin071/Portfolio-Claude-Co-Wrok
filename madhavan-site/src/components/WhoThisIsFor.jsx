'use client'

import { motion } from 'framer-motion'

const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    text: "You're launching a CPG brand and want to cross 7-8 figures in revenue.",
    color: 'bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    text: "You're at $1M in revenue and want a structured path to $10M then $100M.",
    color: 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Your gross margin shows 45-60%, but after trade terms, promos, and returns — EBITDA is low.",
    color: 'bg-brand-yellow/10 text-brand-yellow group-hover:bg-brand-yellow',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="relative section-padding bg-white overflow-hidden">
      {/* Supporting color blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/[0.04] rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-brand-blue/[0.04] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">I work best with founders who are ready to build global brands.</h2>
          <p className="section-subheading mx-auto">
            I bring strategic clarity for CPG founders who want to scale — not just brainstorm.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {points.map((point, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl bg-brand-light border border-gray-100 hover:border-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/[0.04] transition-shadow duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${point.color} flex items-center justify-center mb-5 group-hover:text-white transition-all duration-300`}>
                {point.icon}
              </div>
              <p className="text-brand-dark font-medium leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
