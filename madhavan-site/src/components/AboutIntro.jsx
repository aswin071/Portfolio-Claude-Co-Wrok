export default function AboutIntro() {
  return (
    <section className="section-padding bg-brand-blue text-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile photo — round */}
        <div className="mb-8 flex justify-center">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-xl shadow-black/20">
            <img
              src="/assets/madhavan-photo.jpeg"
              alt="Madhavan Unni"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 text-white/80 text-base md:text-lg leading-relaxed">
          <p>
            I&apos;m <strong className="text-brand-orange">Madhavan Unni</strong> — a CPG expert with deep experience built over many years of operating in complex, fast-evolving markets across East Asia and Dubai.
          </p>
          <p>
            Everything I share revolves around insights, market dissection, strategic clarity, sharp opinions, and point-of-view-driven commentary.
          </p>
          <p>
            You&apos;ll find informed perspectives, data-backed opinions, and direct takes — all shaped by real-world experience.
          </p>
        </div>
      </div>
    </section>
  )
}
