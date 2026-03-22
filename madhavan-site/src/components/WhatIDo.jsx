'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Build the $10M to $100M Blueprint',
    description: 'A structured growth roadmap tailored to your brand, market, and channel mix.',
    accent: 'from-brand-orange to-brand-sunkissed',
    bg: 'bg-gradient-to-br from-brand-orange/[0.04] to-brand-sunkissed/[0.02]',
  },
  {
    number: '02',
    title: 'Identify Category & Pricing Gaps',
    description: 'Spot where the market is underserved and where your pricing leaves money on the table.',
    accent: 'from-brand-blue to-brand-blue-surf',
    bg: 'bg-gradient-to-br from-brand-blue/[0.04] to-brand-blue-surf/[0.02]',
  },
  {
    number: '03',
    title: 'Achieve Category Benchmark Gross Margins',
    description: 'Restructure your cost base and trade terms to hit industry-leading margins.',
    accent: 'from-brand-green to-emerald-400',
    bg: 'bg-gradient-to-br from-brand-green/[0.04] to-emerald-400/[0.02]',
  },
  {
    number: '04',
    title: 'Scale Without Breaking Fundamentals',
    description: 'Grow distribution, velocity, and revenue without compromising brand equity.',
    accent: 'from-brand-yellow to-amber-400',
    bg: 'bg-gradient-to-br from-brand-yellow/[0.04] to-amber-400/[0.02]',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative section-padding bg-brand-light overflow-hidden">
      {/* Supporting color background blobs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-brand-blue/[0.05] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange/[0.05] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-brand-yellow/[0.04] rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-surf" />
            <p className="text-brand-blue font-semibold text-sm tracking-wider uppercase">
              Services
            </p>
            <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-blue-surf to-brand-blue" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue">
            What I Do
          </h2>
          <p className="text-brand-gray text-base md:text-lg mt-3 max-w-2xl mx-auto">
            Strategic clarity for CPG brands that want to scale profitably.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative ${service.bg} border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-brand-dark/[0.05] hover:border-transparent transition-shadow duration-400 overflow-hidden cursor-default`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              <span className={`font-heading text-4xl font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300`}>
                {service.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-brand-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-brand-gray leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
