'use client'

import { useState, useEffect, useCallback } from 'react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'The CPG Insider', href: 'newsletter' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled
          ? 'w-[92%] max-w-5xl bg-white/80 backdrop-blur-xl shadow-lg shadow-brand-dark/[0.04] border border-gray-200/60 rounded-2xl'
          : 'w-[92%] max-w-6xl bg-white/40 backdrop-blur-sm border border-transparent rounded-2xl'
        }`}
    >
      <div className="px-5 md:px-8 flex items-center justify-between h-14 md:h-16">
        <button onClick={() => scrollTo('home')} className="flex-shrink-0">
          <img
            src="/assets/logo/logo-light.png"
            alt="Madhavan"
            className="h-[140px] md:h-[170px] w-auto object-contain"
          />
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-brand-dark/70 hover:text-brand-blue hover:bg-brand-blue/[0.05] rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://madhavan-unni.kit.com/6d2dca988c"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue/90 rounded-xl transition-all duration-200 shadow-sm shadow-brand-blue/20"
          >
            Join 2K+ Subscribers
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100/50 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block w-full h-[2px] bg-brand-dark rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-full h-[2px] bg-brand-dark rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block w-full h-[2px] bg-brand-dark rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-5 pb-5 pt-2 border-t border-gray-100/50">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-brand-dark/70 hover:text-brand-blue hover:bg-brand-blue/[0.05] rounded-xl transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="https://madhavan-unni.kit.com/6d2dca988c"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue/90 rounded-xl transition-all shadow-sm shadow-brand-blue/20"
          >
            Join 2K+ Subscribers
          </a>
        </div>
      </div>
    </nav>
  )
}
