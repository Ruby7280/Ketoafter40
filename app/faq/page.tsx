import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about keto and low-carb eating after 40, recipes, weight loss, health information and the Keto After 40 free meal plan.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Keto After 40?",
      answer:
        "Keto After 40 is a practical resource for adults who want simpler low-carb meal ideas, recipes and sustainable lifestyle guidance after age 40.",
    },
    {
      question: "Do I need to follow a strict keto diet?",
      answer:
        "No. The site focuses on practical keto and low-carb ideas rather than requiring everyone to follow one strict approach. Different people may prefer different levels of carbohydrate intake.",
    },
    {
      question: "Is the information on this website medical advice?",
      answer:
        "No. The content is for general educational and informational purposes only and is not a substitute for professional medical or nutritional advice.",
    },
    {
      question: "Should I talk to a healthcare professional before changing my diet?",
      answer:
        "It is a good idea to speak with a qualified healthcare professional before making significant dietary changes, especially if you have a medical condition, take medication or have specific nutritional needs.",
    },
    {
      question: "Are the recipes suitable for beginners?",
      answer:
        "Yes. The goal is to make recipes straightforward, practical and easy to prepare, including options for people who are new to low-carb eating.",
    },
    {
      question: "Will Keto After 40 guarantee weight loss?",
      answer:
        "No. Weight change is influenced by many factors and individual results vary. The site focuses on practical meal planning, consistent habits and sustainable lifestyle choices rather than guaranteed outcomes.",
    },
    {
      question: "What is included in the free 7-day meal plan?",
      answer:
        "The free plan is intended to provide simple low-carb meal ideas for seven days so you can spend less time deciding what to eat and more time building a routine that works for you.",
    },
    {
      question: "How do I get the free meal plan?",
      answer:
        "Go to the Free 7-Day Plan section on the homepage and enter your email address. The email delivery system will be connected as we continue building the website.",
    },
    {
      question: "Will there be more recipes and guides?",
      answer:
        "Yes. Keto After 40 is being built to include a growing library of recipes, beginner guides, meal-planning resources and practical articles.",
    },
    {
      question: "How can I contact Keto After 40?",
      answer:
        "You can visit the Contact page using the main navigation or the link in the footer.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
            Help Center
          </p>

          <h1 className="mt-3 font-serif text-4xl font-semibold text-[#333333] sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#666666]">
            Simple answers to common questions about Keto After 40, low-carb
            eating, recipes and our free resources.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <section
              key={faq.question}
              className="rounded-3xl border border-[#e8e8e6] bg-white p-7 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-semibold text-[#333333]">
                {faq.question}
              </h2>

              <p className="mt-3 leading-8 text-[#666666]">
                {faq.answer}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-[#e8f2f2] p-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#333333]">
            Still have a question?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#666666]">
            Visit our Contact page and send us your question.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#4a7c7e] px-7 py-3 font-semibold text-white transition hover:bg-[#3a6365]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  )
}