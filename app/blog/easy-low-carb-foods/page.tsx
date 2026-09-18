import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Easy Low-Carb Foods to Keep in Your Kitchen",
  description:
    "Discover 10 practical low-carb foods to keep in your kitchen for easier meal planning, simple recipes and everyday low-carb eating after 40.",
};

export default function EasyLowCarbFoodsPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Meal Planning
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#333333] sm:text-5xl">
          10 Easy Low-Carb Foods to Keep in Your Kitchen
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#666666]">
          Low-carb eating becomes much easier when you have simple ingredients
          ready to use. Keeping a few reliable foods in your kitchen can help
          you put meals together quickly without overthinking every choice.
        </p>

        <div className="mt-12 space-y-10 leading-8 text-[#555555]">
          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              1. Eggs
            </h2>

            <p className="mt-4">
              Eggs are versatile and easy to prepare for breakfast, lunch or a
              quick meal. You can boil them in advance, scramble them with
              vegetables or use them in simple omelets.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              2. Leafy Greens
            </h2>

            <p className="mt-4">
              Spinach, lettuce, kale and other leafy greens make an easy base
              for salads, side dishes and cooked meals. Keeping washed greens
              available can make meal preparation faster.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              3. Avocado
            </h2>

            <p className="mt-4">
              Avocado can be added to salads, eggs and simple protein-based
              meals. It also works well as a quick snack when paired with
              other foods that fit your eating plan.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              4. Chicken
            </h2>

            <p className="mt-4">
              Cooked chicken can be used in salads, lettuce wraps, soups and
              simple dinner plates. Preparing extra portions can make lunches
              easier later in the week.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              5. Fish
            </h2>

            <p className="mt-4">
              Fresh, frozen or canned fish can provide a convenient protein
              option. Salmon, tuna and sardines are examples that can be used
              in a variety of simple meals.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              6. Broccoli and Cauliflower
            </h2>

            <p className="mt-4">
              These vegetables are useful for quick side dishes, roasting,
              soups and stir-fries. Frozen versions can also be convenient
              when you need something fast.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              7. Plain Greek Yogurt
            </h2>

            <p className="mt-4">
              Unsweetened Greek yogurt can work as a simple breakfast, snack
              or base for sauces. Check the nutrition label because
              carbohydrate content can vary between products.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              8. Cheese
            </h2>

            <p className="mt-4">
              Cheese can add flavor to eggs, salads and vegetables. Portion
              size and individual dietary needs still matter, so it does not
              need to be added to every meal.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              9. Nuts and Seeds
            </h2>

            <p className="mt-4">
              Almonds, walnuts, chia seeds and other nuts and seeds can be
              convenient additions to meals and snacks. Small portions are
              often enough because they are energy-dense foods.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              10. Olive Oil
            </h2>

            <p className="mt-4">
              Olive oil is useful for salad dressings, roasting vegetables and
              simple cooking. Keeping a basic cooking fat available makes it
              easier to prepare meals from simple ingredients.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              A Simple Shopping Strategy
            </h2>

            <p className="mt-4">
              You do not need to buy every low-carb food available. Start with
              a few proteins, several vegetables and a small number of foods
              you already know you enjoy.
            </p>

            <p className="mt-4">
              Building a repeatable grocery list can save time and make meal
              planning feel less complicated.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Keep Convenience in Mind
            </h2>

            <p className="mt-4">
              Frozen vegetables, canned fish, pre-washed salad greens and
              previously cooked protein can all make healthy meal preparation
              more realistic on busy days.
            </p>

            <p className="mt-4">
              Convenience does not have to mean highly processed food. The goal
              is to make useful ingredients easier to reach when you need them.
            </p>
          </section>

          <section className="rounded-3xl bg-[#e8f2f2] p-8">
            <h2 className="font-serif text-3xl font-semibold text-[#333333]">
              Important Health Note
            </h2>

            <p className="mt-4">
              Individual nutrition needs vary. If you have a medical
              condition, take medication, have food allergies or have specific
              nutritional requirements, speak with an appropriate qualified
              healthcare professional before making significant dietary
              changes.
            </p>
          </section>

          <section className="rounded-3xl bg-[#4a7c7e] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">
              Need simple meal ideas?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-white/90">
              Explore our low-carb recipes for practical breakfast, lunch and
              dinner inspiration.
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