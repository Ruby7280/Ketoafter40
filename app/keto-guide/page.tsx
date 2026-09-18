import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keto After 40 Beginner Guide",
  description:
    "A simple beginner guide to keto and low-carb eating after 40, including meal planning, food choices and practical habits for getting started.",
};

export default function KetoGuidePage() {
  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
            Beginner Guide
          </p>

          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#333333] sm:text-5xl">
            Keto & Low-Carb After 40: A Simple Beginner Guide
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#666666]">
            A practical introduction to low-carb eating, meal planning and
            sustainable habits for adults over 40.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              What Does Low-Carb Mean?
            </h2>

            <p className="mt-4 leading-8 text-[#666666]">
              Low-carb eating generally means reducing foods that are high in
              carbohydrates and building meals around foods such as protein,
              vegetables, healthy fats and minimally processed ingredients.
            </p>

            <p className="mt-4 leading-8 text-[#666666]">
              There is no single approach that works for everyone. Some people
              prefer a stricter ketogenic approach while others simply reduce
              refined carbohydrates and focus on balanced low-carb meals.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              A Simple Way to Build Your Plate
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-[#e8f2f2] p-6">
                <div className="text-4xl">🍗</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#333333]">
                  Protein
                </h3>
                <p className="mt-2 leading-7 text-[#666666]">
                  Examples include eggs, chicken, fish, meat, tofu and other
                  protein-rich foods that fit your needs.
                </p>
              </div>

              <div className="rounded-2xl bg-[#edf1e9] p-6">
                <div className="text-4xl">🥦</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#333333]">
                  Vegetables
                </h3>
                <p className="mt-2 leading-7 text-[#666666]">
                  Build meals around a variety of non-starchy vegetables such
                  as leafy greens, broccoli, cauliflower and zucchini.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f3eee8] p-6">
                <div className="text-4xl">🥑</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#333333]">
                  Fats
                </h3>
                <p className="mt-2 leading-7 text-[#666666]">
                  Foods such as avocado, olive oil, nuts and seeds can be used
                  as part of balanced meals.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Foods People Often Reduce
            </h2>

            <p className="mt-4 leading-8 text-[#666666]">
              A low-carb approach often involves reducing foods such as sugary
              drinks, sweets, refined breads, pastries and other highly
              processed carbohydrate-rich foods.
            </p>

            <p className="mt-4 leading-8 text-[#666666]">
              The goal does not have to be perfection. A more useful starting
              point is to make meals simpler and choose foods you can
              realistically continue eating.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Why Meal Planning Helps
            </h2>

            <p className="mt-4 leading-8 text-[#666666]">
              Planning a few meals in advance can make it easier to avoid
              last-minute food decisions. Start with a short list of breakfasts,
              lunches and dinners that you already enjoy.
            </p>

            <Link
              href="/recipes"
              className="mt-6 inline-block font-semibold text-[#4a7c7e]"
            >
              Explore our recipes →
            </Link>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              What Changes After 40?
            </h2>

            <p className="mt-4 leading-8 text-[#666666]">
              Lifestyle, activity levels, sleep, stress, health needs and daily
              routines can change over time. Instead of relying on extreme
              short-term plans, it can be more practical to focus on meal
              quality, consistency and habits that fit your life.
            </p>
          </section>

          <section className="rounded-3xl bg-[#e8f2f2] p-8 md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Start With These 5 Simple Steps
            </h2>

            <ol className="mt-6 space-y-4 leading-8 text-[#555555]">
              <li>
                <strong>1.</strong> Choose a source of protein for each main
                meal.
              </li>
              <li>
                <strong>2.</strong> Add vegetables you actually enjoy eating.
              </li>
              <li>
                <strong>3.</strong> Reduce sugary drinks and heavily processed
                snack foods.
              </li>
              <li>
                <strong>4.</strong> Plan a few simple meals before grocery
                shopping.
              </li>
              <li>
                <strong>5.</strong> Focus on consistency rather than trying to
                make every meal perfect.
              </li>
            </ol>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              A Note About Health
            </h2>

            <p className="mt-4 leading-8 text-[#666666]">
              Keto and low-carb diets are not appropriate for everyone. Talk
              with a qualified healthcare professional before making
              significant dietary changes, particularly if you have a medical
              condition, take medication, are pregnant or have specific
              nutritional needs.
            </p>
          </section>

          <section className="rounded-3xl bg-[#4a7c7e] p-8 text-center text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Ready to Begin?
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold">
              Start with the free 7-day low-carb meal plan
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/90">
              Get simple meal ideas designed to make your first week easier.
            </p>

            <Link
              href="/#free-plan"
              className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#4a7c7e] transition hover:bg-[#f4f4f4]"
            >
              Get the Free Plan
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
