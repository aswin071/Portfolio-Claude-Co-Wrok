import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

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
    <section id="contact" className="section-padding bg-brand-light">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading">Let&apos;s Connect</h2>
          <p className="section-subheading mx-auto">
            Have a question or want to explore working together?
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm resize-none"
                placeholder="Tell me about your brand and how I can help..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p className="mt-3 text-red-500 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <p className="text-center mt-6 text-brand-gray text-sm">
          Or email me directly at{' '}
          <a
            href="mailto:admin@madhavan.com"
            className="text-brand-orange font-medium hover:underline"
          >
            admin@madhavan.com
          </a>
        </p>
      </div>
    </section>
  )
}
