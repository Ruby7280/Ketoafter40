import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Keto After 40 with questions about our low-carb recipes, keto guides, free resources and healthy living content for adults over 40.",
};

export default function ContactPage() {
  return (
    <>
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Contact
        </p>

        <h1 className="mt-3 font-serif text-5xl font-semibold text-[#333333]">
          We&apos;d Love to Hear From You
        </h1>

        <p className="mt-5 text-lg leading-8 text-[#666666]">
          Have a question, suggestion or partnership idea?
          Get in touch with us.
        </p>

        <div className="mt-10 rounded-3xl bg-[#f9f8f7] p-8">

          <p className="text-[#666666]">
            Email:
          </p>

          <a className="mt-2 inline-block font-semibold text-[#4a7c7e] hover:underline" href="mailto:hello@ketoafter40.com">
            hello@ketoafter40.com
          </a>

        </div>

        <Link
          href="/"
          className="mt-12 inline-block font-semibold text-[#4a7c7e]"
        >
          ← Back to Home
        </Link>

      </div>
    </main>
    </>
  );
}
