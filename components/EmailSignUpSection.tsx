'use client'

import { useState } from 'react'

export default function EmailSignupSection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setName('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-teal-light to-warm-cream rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-serif-display text-heading-md text-charcoal mb-3">
              Weekly Recipes + Practical Tips in Your Inbox
            </h2>
            <p className="text-lg text-text-secondary">
              One email per week. No spam, no diet culture.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div>
              <input
                type="text"
                placeholder="First name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-charcoal"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-charcoal"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-charcoal">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-border-light cursor-pointer"
              />
              I want free recipes and meal planning tips
            </label>

            <button
              type="submit"
              className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              {submitted ? '✓ Check Your Email' : 'Send Me Recipes'}
            </button>

            <p className="text-xs text-text-secondary text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}