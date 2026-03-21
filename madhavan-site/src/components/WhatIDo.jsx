const services = [
  {
    number: '01',
    title: 'Build the $10M to $100M Blueprint',
    description: 'A structured growth roadmap tailored to your brand, market, and channel mix.',
  },
  {
    number: '02',
    title: 'Identify Category & Pricing Gaps',
    description: 'Spot where the market is underserved and where your pricing leaves money on the table.',
  },
  {
    number: '03',
    title: 'Achieve Category Benchmark Gross Margins',
    description: 'Restructure your cost base and trade terms to hit industry-leading margins.',
  },
  {
    number: '04',
    title: 'Scale Without Breaking Fundamentals',
    description: 'Grow distribution, velocity, and revenue without compromising brand equity.',
  },
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding bg-brand-dark text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What I Do
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-3 max-w-2xl mx-auto">
            Strategic clarity for CPG brands that want to scale profitably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-brand-orange font-display text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                {service.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-white/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
