'use client'

import { useState } from 'react'

const faqItems = [
  {
    id: 1,
    question: 'Is low-carb safe for women over 40?',
    answer: 'Yes. When done properly, low-carb eating is safe for women over 40 and can actually work well with your changing metabolism. That said, every body is different. If you have specific health conditions, consult with your doctor.',
  },
  {
    id: 2,
    question: 'How long does it take to see results?',
    answer: 'Most people notice changes within 2-4 weeks, but this varies. Some experience better energy within days. Weight changes depend on many factors beyond eating patterns. We focus on sustainable lifestyle shifts, not quick fixes.',
  },
  {
    id: 3,
    question: 'Can I adapt these recipes if I don\'t like certain ingredients?',
    answer: 'Absolutely. The recipes are starting points. Most low-carb recipes are flexible—you can swap proteins, vegetables, and seasonings based on your preferences and what you have on hand.',
  },
  {
    id: 4,
    question: 'Do I need to count calories or macros?',
    answer: 'Not necessarily. Many people find that low-carb eating naturally regulates appetite without obsessive tracking. That said, some prefer tracking for clarity. We provide the info so you can decide what works for you.',
  },
]

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20 bg-warm-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif-display text-heading-lg text-charcoal mb-4">
            Questions About Low-Carb?
          </h2>
          <p className="text-lg text-text-secondary">
            Answers to common questions from our community.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-border-light overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-warm-cream transition text-left"
              >
                <h3 className="font-semibold text-charcoal">
                  {item.question}
                </h3>
                <span className={`text-brand-teal transition transform ${openId === item.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 border-t border-border-light bg-white">
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-brand-teal font-semibold hover:text-brand-teal-dark transition inline-flex items-center gap-2">
            See All FAQs →
          </button>
        </div>
      </div>
    </section>
  )
}