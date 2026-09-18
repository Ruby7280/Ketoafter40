import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weight Loss After 40",
  description:
    "Practical guidance for weight loss after 40, with simple low-carb meal ideas, realistic habits and sustainable lifestyle strategies.",
};

export default function WeightLossPage() {
  return (
    <>
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Keto After 40
        </p>

        <h1 className="mt-3 font-serif text-5xl font-semibold text-[#333333]">
          Weight Loss After 40
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#666666]">
          Practical information about nutrition, meal planning, movement
          and sustainable habits for adults over 40.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl bg-[#e8f2f2] p-8">
            <h2 className="font-serif text-2xl text-[#333333]">
              Start With Your Food
            </h2>

            <p className="mt-3 leading-7 text-[#666666]">
              Learn how to build simple meals around whole foods,
              protein, vegetables and appropriate portions.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f9f8f7] p-8">
            <h2 className="font-serif text-2xl text-[#333333]">
              Build Sustainable Habits
            </h2>

            <p className="mt-3 leading-7 text-[#666666]">
              Small consistent changes can be easier to maintain than
              extreme short-term approaches.
            </p>
          </div>

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
