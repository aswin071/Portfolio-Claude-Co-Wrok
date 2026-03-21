const brands = [
  { name: 'Twinings', logo: '/assets/brands/twinings.png' },
  { name: 'Dorset Cereals', logo: '/assets/brands/dorset-cereals.png' },
  { name: 'Lamb Weston', logo: '/assets/brands/lamb-weston.jpeg' },
  { name: 'Bateel International', logo: '/assets/brands/bateel.jpeg' },
  { name: 'Pure Harvest Smart Farms', logo: '/assets/brands/pure-harvest.jpeg' },
  { name: 'Jomara Premium Organic Dates', logo: '/assets/brands/jomara.png' },
]

function BrandCard({ brand, size = 'normal' }) {
  const isLarge = size === 'large'
  return (
    <div className={`group relative flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
      isLarge
        ? 'p-8 h-36 bg-white border-2 border-brand-orange/10 shadow-md hover:shadow-2xl hover:shadow-brand-orange/15 hover:border-brand-orange/40'
        : 'w-44 md:w-52 h-28 md:h-32 mx-4 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-orange/10 hover:border-brand-orange/30'
    }`}>
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-brand-orange/0 to-orange-50/0 group-hover:from-amber-50/60 group-hover:via-brand-orange/5 group-hover:to-orange-50/60 transition-all duration-500 rounded-2xl" />

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-orange/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <img
        src={brand.logo}
        alt={brand.name}
        className={`relative w-auto max-w-[80%] object-contain transition-all duration-500 group-hover:scale-110 ${
          isLarge ? 'h-16 md:h-20' : 'h-12 md:h-16'
        }`}
      />

      {/* Brand name label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/60 to-transparent py-3 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 rounded-b-2xl">
        <p className="text-white text-xs font-semibold text-center tracking-wide">{brand.name}</p>
      </div>
    </div>
  )
}

export default function BrandWall() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Full background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-white" />

      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-orange/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-orange/5 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Trusted Partners
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Brands That Trust
            <br />
            <span className="text-brand-orange">My Expertise</span>
          </h2>
          <p className="text-brand-gray text-base md:text-lg mt-4 max-w-xl mx-auto">
            A selection of leading CPG partners across the Middle East & India
          </p>
        </div>

        {/* Desktop — Premium grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} size="large" />
          ))}
        </div>

        {/* Mobile/Tablet — Marquee scroll */}
        <div className="lg:hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-amber-50 to-transparent z-10 pointer-events-none" />

          <div className="flex marquee-left">
            <div className="flex animate-marquee-left">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <BrandCard key={`a-${i}`} brand={brand} />
              ))}
            </div>
            <div className="flex animate-marquee-left" aria-hidden="true">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <BrandCard key={`b-${i}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-brand-orange/10 shadow-sm">
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-brand-orange/20 border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-brand-dark/70 text-sm font-medium">
              Partnering with premium brands across <span className="text-brand-orange font-semibold">6+ categories</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-left {
          display: flex;
          width: max-content;
        }
        .marquee-left:hover .animate-marquee-left {
          animation-play-state: paused;
        }
        .animate-marquee-left {
          display: flex;
          animation: scroll-left 25s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  )
}
