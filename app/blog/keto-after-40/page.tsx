import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keto After 40: A Practical Beginner Guide",
  description:
    "A practical beginner guide to keto after 40, including simple low-carb food choices, meal planning tips and sustainable habits.",
};

export default function KetoAfter40ArticlePage() {
  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Keto After 40
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#333333] sm:text-5xl">
          Keto After 40: A Practical Beginner Guide
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#666666]">
          Keto and low-carb eating can feel confusing when you are just getting
          started. The good news is that you do not need to make your diet
          complicated. A few simple food choices and consistent habits can make
          the transition easier.
        </p>

        <div className="mt-12 space-y-10 leading-8 text-[#555555]">
          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              What Does Keto Mean?
            </h2>

            <p className="mt-4">
              A ketogenic diet is a very low-carbohydrate eating pattern that
              typically emphasizes foods containing protein and fat while
              limiting foods that are high in carbohydrates.
            </p>

            <p className="mt-4">
              Some people prefer a strict ketogenic approach, while others find
              that a less restrictive low-carb eating pattern is easier to
              maintain. There is no single approach that is appropriate for
              everyone.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Why Can Eating Habits Feel Different After 40?
            </h2>

            <p className="mt-4">
              Daily routines can change over time. Activity levels, sleep,
              stress, work schedules, family responsibilities and individual
              health needs may all affect how easy it feels to maintain eating
              habits.
            </p>

            <p className="mt-4">
              Instead of relying on extreme short-term plans, it can be more
              practical to focus on meals and routines you can repeat
              consistently.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Start With Simple Low-Carb Foods
            </h2>

            <p className="mt-4">
              One of the easiest ways to begin is to build meals around a few
              basic food groups.
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>Eggs, fish, chicken, meat or other protein-rich foods</li>
              <li>Leafy greens and other non-starchy vegetables</li>
              <li>Avocado, olive oil, nuts and seeds</li>
              <li>Plain yogurt or cheese if these foods suit your needs</li>
              <li>Water and other unsweetened drinks</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Foods You May Choose to Reduce
            </h2>

            <p className="mt-4">
              A low-carb eating pattern often involves reducing foods that are
              high in refined carbohydrates and added sugars.
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>Sugary drinks</li>
              <li>Candy and sweets</li>
              <li>Pastries and desserts</li>
              <li>Refined breads and highly processed snack foods</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Keep Meal Planning Easy
            </h2>

            <p className="mt-4">
              You do not need dozens of complicated recipes. Choose a few
              breakfasts, lunches and dinners you enjoy and rotate them during
              the week.
            </p>

            <p className="mt-4">
              Keeping a short list of reliable meals can make grocery shopping
              easier and reduce last-minute decisions.
            </p>

            <Link
              href="/recipes"
              className="mt-6 inline-block font-semibold text-[#4a7c7e]"
            >
              Explore low-carb recipes →
            </Link>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Focus on Habits You Can Maintain
            </h2>

            <p className="mt-4">
              Consistency is usually more useful than trying to make every meal
              perfect. Start with small changes that fit into your normal
              routine and adjust as you learn what works for you.
            </p>
          </section>

          <section className="rounded-3xl bg-[#e8f2f2] p-8">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Important Health Note
            </h2>

            <p className="mt-4">
              Keto and very low-carbohydrate diets are not appropriate for
              everyone. Speak with a qualified healthcare professional before
              making significant dietary changes, especially if you have a
              medical condition, take medication, are pregnant or have specific
              nutritional needs.
            </p>
          </section>

          <section className="rounded-3xl bg-[#4a7c7e] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">
              Want a simpler place to start?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-white/90">
              Use our free 7-day low-carb meal plan to get simple meal ideas
              for your first week.
            </p>

            <Link
              href="/#free-plan"
              className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#4a7c7e]"
            >
              Get the Free Plan
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}