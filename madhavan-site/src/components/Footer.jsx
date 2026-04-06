'use client'

import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Let\'s Talk', id: 'book-call' },
  { label: 'About Me', id: 'about' },
  { label: 'Newsletter', id: 'newsletter' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src="/assets/logo/logo-dark.png"
              alt="Madhavan Consulting"
              className="h-[140px] md:h-[170px] w-auto"
            />
            <p className="text-white/40 text-sm">
              CPG Brand Strategy & Consulting
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="mailto:admin@madhavanunni.com"
            className="text-sm text-white/60 hover:text-brand-orange transition-colors"
          >
            admin@madhavanunni.com
          </a>
        </motion.div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Madhavan Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
