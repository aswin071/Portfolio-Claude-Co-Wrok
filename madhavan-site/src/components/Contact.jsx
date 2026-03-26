'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SmoothLink from './SmoothLink'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(null), 4000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Supporting color blobs */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-brand-blue/[0.04] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-orange/[0.04] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-brand-yellow/[0.03] rounded-full blur-[80px]" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:sticky md:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-surf" />
              <p className="text-brand-blue font-semibold text-sm tracking-wider uppercase">
                Get in Touch
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-brand-gray text-base leading-relaxed mb-8">
              Have a question or want to explore working together? Drop me a message and I&apos;ll get back to you.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:admin@madhavanunni.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-brand-orange/[0.05] to-brand-sunkissed/[0.02] border border-brand-orange/10 hover:border-brand-orange/25 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-brand-sunkissed flex items-center justify-center shadow-md shadow-brand-orange/20 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-brand-gray uppercase tracking-wider font-medium">Email</p>
                  <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">admin@madhavanunni.com</p>
                </div>
              </a>

              <SmoothLink
                to="book-call"
                className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-brand-blue/[0.05] to-brand-blue-surf/[0.02] border border-brand-blue/10 hover:border-brand-blue/25 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-blue-surf flex items-center justify-center shadow-md shadow-brand-blue/20 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-brand-gray uppercase tracking-wider font-medium">Prefer a call?</p>
                  <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">Let&apos;s Talk</p>
                </div>
              </SmoothLink>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === 'name' || formData.name
                      ? '-top-2.5 text-[11px] font-semibold text-brand-orange bg-white px-1'
                      : 'top-3.5 text-sm text-brand-gray'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-gray-100 focus:border-brand-orange outline-none transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === 'email' || formData.email
                      ? '-top-2.5 text-[11px] font-semibold text-brand-orange bg-white px-1'
                      : 'top-3.5 text-sm text-brand-gray'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-gray-100 focus:border-brand-orange outline-none transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === 'message' || formData.message
                      ? '-top-2.5 text-[11px] font-semibold text-brand-orange bg-white px-1'
                      : 'top-3.5 text-sm text-brand-gray'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-gray-100 focus:border-brand-orange outline-none transition-all text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                  status === 'sent'
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20'
                    : 'bg-gradient-to-r from-brand-blue to-brand-blue-surf text-white shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'sent' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </span>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-brand-red text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
