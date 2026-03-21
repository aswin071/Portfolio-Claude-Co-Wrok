export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-brand-light to-amber-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center pt-20">
        {/* Small tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          CPG Brand Strategy
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight">
          Helping CPG Brands
          <br />
          <span className="text-brand-orange">Launch & Scale.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
          I work with founders and operators building consumer brands in the
          Middle East & India.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://madhavan-unni.kit.com/6d2dca988c"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join Newsletter
          </a>
          <a href="#book-call" className="btn-outline">
            Book a Call
          </a>
        </div>

        {/* Anchor buttons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="#who-this-is-for"
            className="group flex items-center gap-2 text-sm font-medium text-brand-dark/70 hover:text-brand-orange transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange/10 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            Who This Is For
          </a>
          <a
            href="#what-i-do"
            className="group flex items-center gap-2 text-sm font-medium text-brand-dark/70 hover:text-brand-orange transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange/10 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            What I Do
          </a>
        </div>
      </div>
    </section>
  )
}
