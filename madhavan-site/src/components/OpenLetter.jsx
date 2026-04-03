'use client'

import { motion } from 'framer-motion'

export default function OpenLetter() {
  return (
    <section className="relative bg-brand-blue py-20 md:py-32 overflow-hidden">
      {/* Soft overlay gradients instead of harsh tech glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FAF8F5]/[0.04] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* The Asymmetric Grid */}
        <div className="relative grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Central Vertical Line (Visible on md and up) */}
          <motion.div 
             initial={{ scaleY: 0 }}
             whileInView={{ scaleY: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.2, ease: "easeInOut" }}
             className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-white/[0.15] -translate-x-1/2 origin-top" 
          />

          {/* COLUMN 1 */}
          <div className="space-y-16 md:space-y-24">
            
            {/* Title Area */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="pt-4 pb-8"
            >
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.15] tracking-tight mb-6">
                The CPG <br />
                <span className="relative inline-block text-white">
                  Reality
                  {/* Handwritten swoosh simulation */}
                  <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-auto text-brand-orange" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M5,15 Q30,5 50,15 T95,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-medium max-w-sm mt-8 leading-relaxed">
                As long as humanity exists, we will need food, clothing, and everyday essentials.
              </p>
            </motion.div>

            {/* Block 1: Build something real */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ x: 5 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
               className="group cursor-pointer pr-0 md:pr-8"
            >
               {/* Icon */}
               <div className="mb-6 opacity-80">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:border-[#FBBF24]/50 group-hover:bg-[#FBBF24]/10">
                    <svg className="w-6 h-6 text-white/70 group-hover:text-[#FBBF24] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
               </div>
               <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight text-white group-hover:text-[#FBBF24] transition-colors duration-300">
                 Build something real.
               </h3>
               <p className="text-white/60 group-hover:text-white/90 text-base leading-relaxed font-sans transition-colors duration-300">
                 Move it, price it, earn its space. CPG remains grounded in physical reality and tangibility. It's about what you can hold in your hands.
               </p>
            </motion.div>

            {/* Block 2: Understand behaviour */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ x: 5 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
               className="group cursor-pointer pr-0 md:pr-8"
            >
               <div className="mb-6 opacity-80">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:border-[#10B981]/50 group-hover:bg-[#10B981]/10">
                    <svg className="w-6 h-6 text-white/70 group-hover:text-[#10B981] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
               </div>
               <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight text-white group-hover:text-[#10B981] transition-colors duration-300">
                 Understand behaviour.
               </h3>
               <p className="text-white/60 group-hover:text-white/90 text-base leading-relaxed font-sans transition-colors duration-300">
                 Margins, velocity, and figuring out exactly why someone picks your product over the 20 others sitting right next to it on the shelf.
               </p>
            </motion.div>

          </div>


          {/* COLUMN 2 */}
          <div className="space-y-16 md:space-y-24 md:mt-32">
            
            {/* Block 3: Highlighted AI Section */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ x: 5 }}
               viewport={{ once: true }}
               transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
               className="group cursor-pointer pl-0 md:pl-8"
            >
               <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#38bdf8] bg-[#38bdf8]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#38bdf8]/20">
                    <svg className="w-6 h-6 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
               </div>
               <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight text-[#38bdf8]">
                 The AI Disruption
               </h3>
               <p className="text-white/70 text-base leading-relaxed mb-6 font-sans group-hover:text-white/90 transition-colors">
                 AI will change how we work, forecast, market, and optimize.
               </p>
               <div className="pt-6 border-t border-white/10">
                  <p className="font-serif font-bold text-xl md:text-2xl tracking-tight text-white">
                    But AI cannot be eaten.<br />AI cannot be worn.
                  </p>
               </div>
            </motion.div>

            {/* Block 4: Earn repeat purchase */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ x: 5 }}
               viewport={{ once: true }}
               transition={{ delay: 0.25, type: "spring", stiffness: 300 }}
               className="group cursor-pointer pl-0 md:pl-8"
            >
               <div className="mb-6 opacity-80">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:border-[#EF4444]/50 group-hover:bg-[#EF4444]/10">
                    <svg className="w-6 h-6 text-white/70 group-hover:text-[#EF4444] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
               </div>
               <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight text-white group-hover:text-[#EF4444] transition-colors duration-300">
                 Earn repeat purchase.
               </h3>
               <p className="text-white/60 group-hover:text-white/90 text-base leading-relaxed font-sans transition-colors duration-300">
                 We don't build for clicks, vanity metrics, or fleeting hype. We build for habit, trust, and the long game.
               </p>
            </motion.div>

            {/* Animated Logo Box */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.35, type: "spring", stiffness: 100 }}
               className="flex flex-col items-center justify-center pt-8 pb-4 pl-0 md:pl-8"
            >
               <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="/assets/logo/logo-dark.png" 
                  alt="Madhavan" 
                  className="w-[200px] md:w-[260px] opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer" 
               />
            </motion.div>

          </div>
        </div>

        {/* Bottom Banner Area */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/[0.05] text-center flex flex-col items-center"
        >
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
             Welcome to <span className="text-[var(--brand-orange,#F97316)]">CPG.</span>
           </h3>
           <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
             If you understand shelves, you understand people. <br/>
             And if you understand people, you understand business.
           </p>
        </motion.div>

      </div>
    </section>
  )
}
