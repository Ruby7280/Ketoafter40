import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../recipe-data";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) return {};

  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) notFound();

  return (
    <main className="min-h-screen bg-[#f7f8f6] px-6 py-16 sm:py-20">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-black/[0.06] bg-white shadow-xl shadow-black/[0.05]">
        <header className="bg-[#e8f2f2] px-8 py-12 sm:px-12">
          <span className="text-6xl" aria-hidden="true">
            {recipe.emoji}
          </span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
            {recipe.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2c2c2c] sm:text-5xl">
            {recipe.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6666]">
            {recipe.description}
          </p>
          <dl className="mt-8 flex flex-wrap gap-3 text-sm text-[#315f61]">
            <div className="rounded-full bg-white px-4 py-2">
              <dt className="sr-only">Prep time</dt>
              <dd>Prep: {recipe.prepTime}</dd>
            </div>
            <div className="rounded-full bg-white px-4 py-2">
              <dt className="sr-only">Cook time</dt>
              <dd>Cook: {recipe.cookTime}</dd>
            </div>
            <div className="rounded-full bg-white px-4 py-2">
              <dt className="sr-only">Servings</dt>
              <dd>Serves: {recipe.servings}</dd>
            </div>
          </dl>
        </header>

        <div className="grid gap-12 px-8 py-12 sm:px-12 md:grid-cols-[0.9fr_1.1fr]">
          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#2c2c2c]">
              Ingredients
            </h2>
            <ul className="mt-6 space-y-3 text-[#5f6666]">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-3">
                  <span className="text-[#4a7c7e]" aria-hidden="true">✓</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold text-[#2c2c2c]">
              Method
            </h2>
            <ol className="mt-6 space-y-5 text-[#5f6666]">
              {recipe.steps.map((step, index) => (
                <li key={step} className="flex gap-4 leading-7">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f2f2] font-semibold text-[#315f61]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>

      <div className="mx-auto mt-8 max-w-4xl">
        <Link href="/recipes" className="font-semibold text-[#4a7c7e] hover:underline">
          ← View all recipes
        </Link>
      </div>
    </main>
  );
}
