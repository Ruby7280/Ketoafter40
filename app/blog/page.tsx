import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keto & Low-Carb Blog",
  description:
    "Practical keto and low-carb articles for adults over 40, including beginner guides, weight-loss tips, meal ideas and sustainable healthy habits.",
};

const articles = [
  {
    category: "Keto Basics",
    title: "Is Keto Still a Good Idea After 40?",
    description:
      "Learn what a practical low-carb approach can look like when your lifestyle, priorities and routines change.",
    href: "/blog/keto-after-40",
  },
  {
    category: "Meal Planning",
    title: "10 Easy Low-Carb Foods to Keep in Your Kitchen",
    description:
      "Discover practical foods that can make everyday meal preparation easier.",
    href: "/blog/easy-low-carb-foods",
  },
  {
    category: "Weight Loss",
    title: "Why Weight Loss Can Feel Different After 40",
    description:
      "Explore lifestyle factors that can influence weight management as we get older.",
    href: "/blog/weight-loss-after-40",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f6]">
      {/* Hero */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#e8f2f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
              Keto After 40 Blog
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#272727] sm:text-5xl lg:text-6xl">
              Practical guidance for healthier low-carb living after 40
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666666]">
              Evidence-informed articles, simple meal ideas and realistic
              strategies designed to make low-carb living feel easier to
              understand and maintain.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
              Latest articles
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#2c2c2c] sm:text-4xl">
              Start with something practical
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.href}
              className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]"
            >
              <span className="w-fit rounded-full bg-[#f0f6f5] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e]">
                {article.category}
              </span>

              <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#365f61]"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#315f61] px-8 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Free 7-Day Plan
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
            Make your first week of low-carb eating simpler
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Get practical meal ideas designed to help you spend less time
            wondering what to eat.
          </p>

          <Link
            href="/#free-plan"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-[#315f61] transition hover:scale-[1.02]"
          >
            Get the Free Plan
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-16">
        <Link
          href="/"
          className="font-semibold text-[#4a7c7e] transition hover:text-[#315f61]"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}