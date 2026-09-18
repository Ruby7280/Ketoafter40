export default function WeightLossSection() {
  return (
    <section id="weight-loss" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Placeholder */}
          <div className="hidden md:block">
            <div className="relative aspect-square bg-gradient-to-br from-muted-terracotta to-warm-cream rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-muted-terracotta opacity-30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-text-secondary">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <h2 className="font-serif-display text-heading-lg text-charcoal mb-6">
              Weight Loss After 40
            </h2>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              Your metabolism is different now. Your body has changed. That&apos;s not a setback—it&apos;s just information.
            </p>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Low-carb eating works with your body&apos;s natural rhythms after 40, not against them.
            </p>

            {/* Key benefits */}
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-soft-sage font-bold">✓</span>
                <span className="text-charcoal">Stable energy throughout the day</span>
              </li>
              <li className="flex gap-3">
                <span className="text-soft-sage font-bold">✓</span>
                <span className="text-charcoal">Natural appetite control without restriction</span>
              </li>
              <li className="flex gap-3">
                <span className="text-soft-sage font-bold">✓</span>
                <span className="text-charcoal">Support for hormonal changes</span>
              </li>
            </ul>

            {/* CTA */}
            <button className="bg-brand-teal hover:bg-brand-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition transform hover:translate-y-[-2px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
