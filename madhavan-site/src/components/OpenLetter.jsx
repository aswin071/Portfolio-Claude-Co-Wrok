'use client'

import { motion } from 'framer-motion'

export default function OpenLetter() {
  return (
    <section className="relative bg-brand-blue pt-20 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Premium ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-orange/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight mb-16"
        >
          The CPG <span className="text-brand-orange">Reality</span>
        </motion.h2>

        {/* Narrative Content */}
        <div className="space-y-10 md:space-y-14 text-white/80 font-serif text-lg md:text-xl leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            As long as humanity exists, we will need food, clothing, and everyday essentials.
            CPG remains grounded in physical reality and tangibility. It's about what you can hold in your hands.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            But to build something real, you must understand behavior.
            Margins and velocity matter, but so does figuring out exactly why someone picks your product over the 20 others sitting right next to it on the shelf.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="py-8"
          >
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              AI will change how we work, forecast, and optimize.
            </p>
            <p className="text-brand-orange font-bold text-xl">
              But AI cannot be eaten. AI cannot be worn.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We don't build for clicks, vanity metrics, or fleeting hype.
            We build for repeat purchase, habit, trust, and the long game.
          </motion.p>

          {/* Welcome to CPG Section Integrated at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="pt-20 md:pt-28 border-t border-white/10"
          >
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Welcome to <span className="text-brand-orange">CPG.</span>
            </h3>
            <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto italic">
              "If you understand shelves, you understand people. <br className="hidden md:block" />
              And if you understand people, you understand business."
            </p>
          </motion.div>

          {/* Signature Logo Area - Tighter layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
            className="mt-12 flex flex-col items-center"
          >
            <motion.img
              src="/assets/logo/logo-dark.png"
              alt="Madhavan"
              className="w-[240px] md:w-[320px] drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
