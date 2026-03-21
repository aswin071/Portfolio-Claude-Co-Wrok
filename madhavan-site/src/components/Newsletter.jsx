export default function Newsletter() {
  return (
    <section id="newsletter" className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Weekly Insights
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The CPG
              <br />
              <span className="text-brand-orange">Insider</span>
            </h2>

            <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed">
              No fluff. Just real insights from someone who has built and scaled CPG brands across the Middle East and India.
            </p>
            <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed">
              Every week I share what&apos;s actually working in-market — on pricing, distribution, margins, and retail.
            </p>

            {/* Value points */}
            <div className="mt-8 space-y-4">
              {[
                'Pricing & margin strategies that work',
                'Distribution insights from real markets',
                'Retail execution playbooks',
                'Category trends in Middle East & India',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-white/40 text-sm italic">
              If you&apos;re building a consumer brand, this is the one newsletter worth reading.
            </p>
          </div>

          {/* Right — ConvertKit embed */}
          <div className="relative">
            {/* Card glow */}
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-3xl blur-2xl" />

            <div className="relative bg-white/[0.07] backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl shadow-brand-orange/5">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-orange/20 mb-4">
                  <svg className="w-7 h-7 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Subscribe for Free</h3>
                <p className="text-white/50 text-sm mt-1">Join founders who read it every week</p>
              </div>

              <iframe
                src="https://madhavan-unni.kit.com/6d2dca988c"
                width="100%"
                height="350"
                frameBorder="0"
                title="Subscribe to The CPG Insider"
                className="w-full rounded-xl"
                style={{ background: 'transparent' }}
              />

              <p className="text-white/30 text-xs text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
