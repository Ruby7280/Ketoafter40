import Link from 'next/link'

export default function StartHereSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-cream rounded-lg p-8 md:p-12 border-l-4 border-brand-teal">
          <h2 className="font-serif-display text-heading-md text-charcoal mb-4">
            New to Low-Carb?
          </h2>
          <p className="text-lg text-text-secondary mb-6">
            Start with our beginner-friendly guide. No prior knowledge required.
          </p>
          <Link href="/start-here">
            <button className="text-brand-teal font-semibold hover:text-brand-teal-dark transition inline-flex items-center gap-2">
              Read Start Here →
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}