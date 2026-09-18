import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Keto After 40 Terms of Service covering website use, health information, intellectual property and other important terms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Legal
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-[#333333] sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-5 text-[#666666]">
          Last updated: September 4, 2026
        </p>

        <div className="mt-12 space-y-10 leading-8 text-[#555555]">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Introduction
            </h2>
            <p className="mt-4">
              These Terms of Service govern your use of the Keto After 40
              website. By using this website, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Informational Purpose
            </h2>
            <p className="mt-4">
              Content on Keto After 40 is provided for general informational
              and educational purposes only. It is not intended to replace
              professional medical, nutritional, legal or other professional
              advice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Health Information
            </h2>
            <p className="mt-4">
              You should consult an appropriate qualified healthcare
              professional before making significant changes to your diet,
              exercise routine or health-related habits, especially if you
              have a medical condition or take medication.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              No Guaranteed Results
            </h2>
            <p className="mt-4">
              Individual results vary. Keto After 40 does not guarantee
              specific weight-loss, health, fitness or financial outcomes from
              using information, products or services offered through this
              website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Intellectual Property
            </h2>
            <p className="mt-4">
              Unless otherwise stated, website content including articles,
              guides, branding, graphics and original materials belongs to
              Keto After 40 and may not be copied, republished or distributed
              without permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Third-Party Links and Services
            </h2>
            <p className="mt-4">
              This website may contain links to third-party websites, products
              or services. Keto After 40 is not responsible for the content,
              availability, policies or practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Future Products and Services
            </h2>
            <p className="mt-4">
              Additional terms may apply to future digital products,
              subscriptions, applications, courses or other services offered
              by Keto After 40.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Changes to These Terms
            </h2>
            <p className="mt-4">
              These Terms may be updated from time to time. Continued use of
              the website after changes are published means you accept the
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Contact
            </h2>
            <p className="mt-4">
              Questions about these Terms can be submitted through the Contact
              page on this website.
            </p>
          </section>

          <p className="rounded-2xl bg-[#e8f2f2] p-6 text-sm leading-7 text-[#555555]">
            These Terms provide a general starting point and are not legal
            advice. They should be reviewed as Keto After 40 adds ecommerce,
            subscriptions, mobile applications or other paid services.
          </p>
        </div>
      </div>
    </main>
  )
}