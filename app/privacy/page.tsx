import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Keto After 40 Privacy Policy to learn how information may be collected, used and protected when you visit our website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Legal
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-[#333333] sm:text-5xl">
          Privacy Policy
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
              Keto After 40 respects your privacy. This Privacy Policy explains
              how information may be collected, used and protected when you
              visit this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Information We May Collect
            </h2>
            <p className="mt-4">
              We may collect information that you voluntarily provide, such as
              your email address when you sign up for a free resource,
              newsletter or other service.
            </p>
            <p className="mt-4">
              We may also collect basic technical information such as browser
              type, device information, pages visited and general website usage
              data through analytics or similar technologies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              How We May Use Information
            </h2>
            <p className="mt-4">
              Information may be used to provide requested resources, improve
              the website, communicate with subscribers, understand website
              usage and maintain the security and operation of the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Cookies and Analytics
            </h2>
            <p className="mt-4">
              This website may use cookies and analytics tools to understand how
              visitors use the site and to improve the visitor experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Advertising
            </h2>
            <p className="mt-4">
              We may use third-party advertising services in the future. These
              providers may use cookies or similar technologies to display and
              measure advertisements in accordance with their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Email Communications
            </h2>
            <p className="mt-4">
              If you subscribe to our email list, we may send you requested
              resources, website updates and relevant content. You may
              unsubscribe from marketing emails at any time using the
              unsubscribe option provided in those emails.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Third-Party Services
            </h2>
            <p className="mt-4">
              We may use third-party services for website hosting, analytics,
              email delivery, advertising or other business functions. Those
              services may process information according to their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              External Links
            </h2>
            <p className="mt-4">
              This website may contain links to other websites. Keto After 40
              is not responsible for the privacy practices or content of
              third-party websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Changes to This Policy
            </h2>
            <p className="mt-4">
              This Privacy Policy may be updated as the website, services and
              technologies we use change. The updated date at the top of this
              page will indicate the latest revision.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#333333]">
              Contact
            </h2>
            <p className="mt-4">
              If you have questions about this Privacy Policy, please contact us
              through the Contact page on this website.
            </p>
          </section>

          <p className="rounded-2xl bg-[#e8f2f2] p-6 text-sm leading-7 text-[#555555]">
            This page provides a general starting point for the website and is
            not legal advice. It should be reviewed and updated as Keto After 40
            adds services such as email marketing, analytics, advertising,
            ecommerce or mobile applications.
          </p>
        </div>
      </div>
    </main>
  )
}