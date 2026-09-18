import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Weight Loss Can Feel Different After 40",
  description:
    "Explore why weight management can feel different after 40 and learn practical approaches to meals, activity, sleep and sustainable healthy habits.",
};

export default function WeightLossAfter40ArticlePage() {
  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Weight Loss After 40
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#333333] sm:text-5xl">
          Why Weight Loss Can Feel Different After 40
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#666666]">
          Weight management can feel different as we get older. Changes in
          daily routines, activity, sleep, stress and individual health needs
          can all affect the habits that influence body weight.
        </p>

        <p className="mt-5 text-lg leading-8 text-[#666666]">
          Instead of looking for a quick fix, it can be more practical to
          build eating and lifestyle habits that you can maintain over time.
        </p>

        <div className="mt-12 space-y-10 leading-8 text-[#555555]">
          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              1. Your Daily Routine May Have Changed
            </h2>

            <p className="mt-4">
              Life after 40 may look very different from your twenties or
              thirties. Work, family responsibilities and busy schedules can
              affect when you eat, what you prepare and how much time you have
              for physical activity.
            </p>

            <p className="mt-4">
              Looking at your current routine can be more useful than trying
              to follow a plan designed for a completely different lifestyle.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              2. Activity Levels Can Change
            </h2>

            <p className="mt-4">
              Some people become less active as their work or lifestyle
              changes. Long periods of sitting and fewer opportunities for
              everyday movement can make activity easier to overlook.
            </p>

            <p className="mt-4">
              Walking, resistance exercise and other forms of movement can be
              incorporated gradually according to your abilities, preferences
              and health circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              3. Sleep Deserves Attention
            </h2>

            <p className="mt-4">
              Sleep is an important part of overall health, yet busy schedules
              can make consistent sleep difficult. Rather than focusing only
              on food, it can be helpful to consider whether your daily routine
              allows enough time for rest.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              4. Stress Can Affect Everyday Habits
            </h2>

            <p className="mt-4">
              Stress can influence routines around food, sleep and physical
              activity. It can also make planning and preparing meals feel
              harder during particularly busy periods.
            </p>

            <p className="mt-4">
              Simple routines can reduce some of the daily decision-making
              involved in maintaining healthier habits.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              5. Meal Planning Can Make Consistency Easier
            </h2>

            <p className="mt-4">
              You do not need a complicated menu for every day of the week.
              Keeping a few reliable meals available can make it easier to
              choose foods that fit your goals.
            </p>

            <p className="mt-4">
              Try building meals around a protein source, vegetables and other
              foods that suit your nutritional needs and preferred approach to
              eating.
            </p>

            <Link
              href="/blog/easy-low-carb-foods"
              className="mt-6 inline-block font-semibold text-[#4a7c7e] hover:text-[#3a6365]"
            >
              See 10 easy low-carb foods →
            </Link>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              6. You Do Not Need to Be Perfect
            </h2>

            <p className="mt-4">
              One meal or one difficult day does not define your overall
              routine. Sustainable habits are built through repeated choices
              over time rather than trying to make every day perfect.
            </p>

            <p className="mt-4">
              A realistic plan should leave room for normal life while helping
              you return to your usual habits afterward.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Start With a Few Practical Changes
            </h2>

            <p className="mt-4">
              Instead of changing everything at once, choose a few actions that
              are realistic for your current routine.
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>Plan a few simple meals before grocery shopping.</li>
              <li>Keep convenient protein and vegetables available.</li>
              <li>Reduce sugary drinks if they are a regular part of your diet.</li>
              <li>Look for realistic opportunities to move during the day.</li>
              <li>Give sleep and recovery a place in your routine.</li>
              <li>Focus on habits you can repeat rather than extreme changes.</li>
            </ul>
          </section>

          <section className="rounded-3xl bg-[#e8f2f2] p-8">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Important Health Note
            </h2>

            <p className="mt-4">
              Body weight and weight changes can be influenced by many factors,
              including medical conditions and medications. If you have
              concerns about your weight or health, or plan to make significant
              changes to your diet or activity, speak with an appropriate
              qualified healthcare professional.
            </p>
          </section>

          <section className="rounded-3xl bg-[#4a7c7e] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">
              Keep your next step simple
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-white/90">
              Explore practical low-carb recipes and meal ideas designed to
              make everyday planning easier.
            </p>

            <Link
              href="/recipes"
              className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#4a7c7e]"
            >
              Explore Recipes
            </Link>
          </section>

          <Link
            href="/blog"
            className="inline-block font-semibold text-[#4a7c7e] hover:text-[#3a6365]"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}