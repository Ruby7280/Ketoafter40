export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-warm-cream via-white to-brand-teal-light py-20 md:py-32">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal-light rounded-full opacity-20 -z-10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <h1 className="font-serif-display text-hero-lg md:text-hero-lg text-charcoal mb-6">
              Practical Low-Carb Guidance for Life After 40
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Easy recipes, sustainable habits, and the confidence to make eating changes that stick—without the diet culture stress.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-3 rounded-lg font-semibold transition transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
                Get Free 7-Day Meal Plan
              </button>
              <button className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal-light px-8 py-3 rounded-lg font-semibold transition">
                Explore Recipes
              </button>
            </div>

            {/* Trust marker */}
            <p className="text-sm text-text-secondary mt-8">
              ✓ No credit card required • Email-delivered PDF
            </p>
          </div>

          {/* Right: Image placeholder */}
          <div className="hidden md:block">
            <div className="relative aspect-square bg-gradient-to-br from-brand-teal-light to-soft-sage rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder: Replace with real image later */}
              <div className="w-full h-full flex items-center justify-center bg-brand-teal-light">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-brand-teal opacity-50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-text-secondary">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}