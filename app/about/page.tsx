import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Keto After 40 and our mission to provide practical low-carb recipes, beginner-friendly guidance and sustainable healthy habits for life after 40.",
};

export default function AboutPage() {
  return (
    <>
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          About Us
        </p>

        <h1 className="mt-3 font-serif text-5xl font-semibold text-[#333333]">
          Welcome to Keto After 40
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-[#666666]">
          <p>
            Keto After 40 is being created to make low-carb eating,
            meal planning and healthier habits easier to understand.
          </p>

          <p>
            We focus on practical recipes, educational content and
            realistic strategies that can fit into everyday life.
          </p>

          <p>
            Our goal is not perfection. It&apos;s helping people make
            informed choices and build habits they can maintain.
          </p>
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
