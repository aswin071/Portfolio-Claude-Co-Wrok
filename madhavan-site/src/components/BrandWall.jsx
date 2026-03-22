'use client'

const brands = [
  { name: 'Twinings', logo: '/assets/brands/twinings.png' },
  { name: 'Dorset Cereals', logo: '/assets/brands/dorset-cereals.png' },
  { name: 'Lamb Weston', logo: '/assets/brands/lamb-weston.jpeg' },
  { name: 'Bateel International', logo: '/assets/brands/bateel.jpeg' },
  { name: 'Pure Harvest Smart Farms', logo: '/assets/brands/pure-harvest.jpeg' },
  { name: 'Jomara Premium Organic Dates', logo: '/assets/brands/jomara.png' },
]

import { motion } from 'framer-motion'

export default function BrandWall() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-xs md:text-sm font-medium text-brand-gray tracking-wider uppercase mb-8"
        >
          Trusted by leading CPG brands
        </motion.p>

        {/* Logo marquee — infinite scroll */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {/* First set */}
            <div className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="group flex items-center justify-center h-14 md:h-16 px-2"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16">
              {brands.map((brand) => (
                <div
                  key={`dup-${brand.name}`}
                  className="group flex items-center justify-center h-14 md:h-16 px-2"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
