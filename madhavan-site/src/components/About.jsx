export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-light">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Decorative side */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                <img
                  src="/assets/logo/logo-light.png"
                  alt="Madhavan"
                  className="w-32 md:w-40"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-48 h-48 md:w-56 md:h-56 rounded-2xl border-2 border-brand-orange/20 -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <h2 className="section-heading mb-6">About Me</h2>

            <div className="space-y-4 text-brand-dark/80 leading-relaxed">
              <p>
                Friends and colleagues call me <strong className="text-brand-dark">Maddy</strong>.
              </p>
              <p>
                I grew up in my father&apos;s grocery store — around brands, distribution, and merchandising. That early exposure shaped how I see consumer businesses. I didn&apos;t know it then, but I was learning merchandising, velocity, and margin before I understood the terminology.
              </p>
              <p>
                <strong className="text-brand-dark">Markets changed. I evolved with them.</strong>
              </p>
              <p>
                Over the years, I&apos;ve worked across complex, fast-moving markets in East Asia and Dubai — operating at the intersection of brand, retail, and commercial strategy.
              </p>
              <p>
                I&apos;ve collaborated with international brands like{' '}
                <span className="text-brand-orange font-medium">Twinings Tea</span>,{' '}
                <span className="text-brand-orange font-medium">Dorset Cereals</span>,{' '}
                <span className="text-brand-orange font-medium">Lamb Weston</span>,{' '}
                <span className="text-brand-orange font-medium">Bateel Dates</span>, and{' '}
                <span className="text-brand-orange font-medium">Pure Harvest Smart Farms</span>{' '}
                while engaging closely with major regional retailers.
              </p>
              <p>
                Today, I help founders launch their FMCG brands across both online and offline channels — and build the systems required to scale exponentially.
              </p>
              <p className="font-semibold text-brand-dark italic">
                Everything I share is shaped by execution, not theory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
