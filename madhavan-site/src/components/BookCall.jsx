export default function BookCall() {
  return (
    <section id="book-call" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading">Book a 1:1 Call</h2>
          <p className="section-subheading mx-auto">
            If you&apos;re a founder or operator building a CPG brand and want a focused conversation on your biggest challenge — book a call. Come with a specific problem. Leave with a clear direction.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-brand-light">
          <iframe
            src="https://calendly.com/madhavanunni/new-meeting"
            width="100%"
            height="650"
            frameBorder="0"
            title="Schedule a call with Madhavan"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
