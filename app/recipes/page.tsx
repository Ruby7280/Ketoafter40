import type { Metadata } from "next";
import Link from "next/link";
import { recipes } from "./recipe-data";

export const metadata: Metadata = {
  title: "Low-Carb Recipes",
  description:
    "Easy low-carb and keto-friendly recipes for adults over 40, with simple meal ideas for breakfast, lunch and dinner.",
};

export default function RecipesPage() {
  return (
    <>

    <main className="min-h-screen bg-[#f9f8f7] px-6 py-20">
           
      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a7c7e]">
          Keto After 40
        </p>

        <h1 className="mt-3 font-serif text-5xl font-semibold text-[#333333]">
          Low-Carb Recipes
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#666666]">
          Simple, satisfying recipes designed to make low-carb eating
          easier for everyday life.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recipes.map((recipe) => (
            <article key={recipe.slug} className="flex rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex flex-1 flex-col">
                <div className="text-5xl" aria-hidden="true">{recipe.emoji}</div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#4a7c7e]">
                  {recipe.category}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-[#333333]">
                  {recipe.title}
                </h2>
                <p className="mt-3 flex-1 leading-7 text-[#666666]">
                  {recipe.description}
                </p>
                <Link href={`/recipes/${recipe.slug}`} className="mt-6 font-semibold text-[#4a7c7e] hover:underline">
                  View recipe →
                </Link>
              </div>
            </article>
          ))}
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
  )
}
