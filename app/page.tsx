
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/keto-hero.webp";

export default function Home() {
  return (
   
<main className="min-h-screen bg-white text-[#333333]">

      {/* HERO */}
<section className="relative overflow-hidden bg-[#f7f8f6]">
  {/* Soft decorative background */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#dcebea]/60 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#eef2e9] blur-3xl" />

 <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-12 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-16">
    {/* Hero text */}
    <div>
      <span className="inline-flex rounded-full border border-[#4a7c7e]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4a7c7e] shadow-sm">
        Low-Carb Living After 40
      </span>

      <h1 className="mt-7 max-w-2xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#272727] sm:text-5xl lg:text-[3.4rem]">
  Feel better about low-carb living after 40
</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-[#666666]">
        Simple recipes, practical meal ideas and realistic guidance to help
        make healthy low-carb eating easier to understand and maintain.
      </p>

     <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href="#free-plan"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#315f61] px-7 font-semibold text-white shadow-lg shadow-[#315f61]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#294f51]"
        >
          Get the Free 7-Day Plan
        </a>

        <Link
          href="/recipes"
          className="inline-flex min-h-14 items-center justify-center rounded-full border border-black/10 bg-white px-7 font-semibold text-[#333333] transition duration-300 hover:-translate-y-0.5 hover:border-[#4a7c7e]/30 hover:text-[#315f61]"
        >
          Explore Recipes
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {/* Trust points */}
      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#666666]">
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e2efed] text-xs font-bold text-[#315f61]">
            ✓
          </span>
          Beginner friendly
        </span>

        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e2efed] text-xs font-bold text-[#315f61]">
            ✓
          </span>
          Practical recipes
        </span>

        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e2efed] text-xs font-bold text-[#315f61]">
            ✓
          </span>
          Sustainable habits
        </span>
      </div>
    </div>

    {/* Hero visual */}
    <div className="relative lg:pl-4">
      <div className="absolute -inset-4 rounded-[40px] bg-[#dfecea]/60 blur-2xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white p-2 shadow-2xl shadow-black/10">
        <Image
          src={heroImage}
          alt="Low-carb meal with salmon, avocado, eggs and fresh vegetables"
          preload
          sizes="(min-width: 1024px) 55vw, 100vw"
         className="aspect-[4/3] w-full rounded-[26px] object-cover sm:aspect-[16/11] lg:aspect-[4/3] lg:max-h-[500px]"
        />
      </div>

      {/* Floating card */}
      <div className="absolute bottom-4 left-4 rounded-2xl border border-black/[0.06] bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:left-4">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4a7c7e]">
          Start Simple
        </p>

        <p className="mt-1 font-serif text-lg font-semibold text-[#2c2c2c]">
          Real food. Real life.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* BENEFITS */}
<section className="border-b border-black/[0.05] bg-white">
  <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-3">
    <div className="rounded-2xl border border-black/[0.05] bg-[#fbfbfa] px-6 py-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f1f0] text-[#315f61]">
        ✓
      </div>

      <h2 className="mt-4 font-serif text-2xl font-semibold text-[#2c2c2c]">
        Practical
      </h2>

      <p className="mt-2 text-[#6a6a6a]">
        Simple strategies that fit real life.
      </p>
    </div>

    <div className="rounded-2xl border border-black/[0.05] bg-[#fbfbfa] px-6 py-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f1f0] text-[#315f61]">
        ✓
      </div>

      <h2 className="mt-4 font-serif text-2xl font-semibold text-[#2c2c2c]">
        Easy
      </h2>

      <p className="mt-2 text-[#6a6a6a]">
        Straightforward recipes and meal ideas.
      </p>
    </div>

    <div className="rounded-2xl border border-black/[0.05] bg-[#fbfbfa] px-6 py-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f1f0] text-[#315f61]">
        ✓
      </div>

      <h2 className="mt-4 font-serif text-2xl font-semibold text-[#2c2c2c]">
        Sustainable
      </h2>

      <p className="mt-2 text-[#6a6a6a]">
        Habits designed for the long term.
      </p>
    </div>
  </div>
</section>
     {/* START HERE */}
<section id="guidance" className="bg-white px-6 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#e8f2f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
        Start Here
      </span>

      <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#2c2c2c] sm:text-4xl lg:text-5xl">
        A simpler way to start low-carb after 40
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a6a6a]">
        Whether you&apos;re completely new to keto or simply looking for easier
        ways to eat well, start with these practical resources.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* Card 1 */}
      <article className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-[#f8faf8] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/[0.06]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2efed] text-3xl">
          🥑
        </div>

        <h3 className="mt-6 font-serif text-2xl font-semibold text-[#2c2c2c]">
          New to Keto?
        </h3>

        <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
          Learn the basics, understand what to eat and discover a simple way
          to begin.
        </p>

        <a
          href="/keto-guide"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
        >
          Learn the basics
          <span aria-hidden="true">→</span>
        </a>
      </article>

      {/* Card 2 */}
      <article className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-[#faf8f4] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/[0.06]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2ebe2] text-3xl">
          🍳
        </div>

        <h3 className="mt-6 font-serif text-2xl font-semibold text-[#2c2c2c]">
          Need Easy Meals?
        </h3>

        <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
          Explore simple low-carb recipes that don&apos;t require hours in the
          kitchen.
        </p>

        <Link
          href="/recipes"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
        >
          Browse recipes
          <span aria-hidden="true">→</span>
        </Link>
      </article>

      {/* Card 3 */}
      <article className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-[#f6f8f3] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/[0.06]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8eee2] text-3xl">
          🌿
        </div>

        <h3 className="mt-6 font-serif text-2xl font-semibold text-[#2c2c2c]">
          Want Sustainable Habits?
        </h3>

        <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
          Build realistic habits around food, movement and everyday routines.
        </p>

        <a
          href="/weight-loss"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
        >
          Explore guidance
          <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </div>
</section>
            {/* FEATURED RECIPES */}
<section id="recipes" className="bg-[#f7f8f6] px-6 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span className="inline-flex rounded-full bg-[#e8f2f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
          Recipes
        </span>

        <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-[#2c2c2c] sm:text-4xl lg:text-5xl">
          Simple recipes for real life
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6a6a6a]">
          Easy low-carb meals designed to make everyday eating simpler,
          practical and enjoyable.
        </p>
      </div>

      <Link
        href="/recipes"
        className="inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition hover:gap-3 hover:text-[#315f61]"
      >
        View all recipes
        <span aria-hidden="true">→</span>
      </Link>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* Recipe 1 */}
      <article className="group overflow-hidden rounded-[28px] border border-black/[0.06] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#e6f1f0]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40" />
          <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[#d6e8e6]" />

          <span className="relative text-7xl transition duration-300 group-hover:scale-110">
            🍳
          </span>

          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e] shadow-sm">
            Breakfast
          </span>
        </div>

        <div className="p-7">
          <h3 className="font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
            Creamy Low-Carb Egg Breakfast
          </h3>

          <p className="mt-4 leading-7 text-[#6a6a6a]">
            A simple and satisfying breakfast idea for busy mornings.
          </p>

          <Link
            href="/recipes/creamy-low-carb-egg-breakfast"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
          >
            Explore recipe
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>

      {/* Recipe 2 */}
      <article className="group overflow-hidden rounded-[28px] border border-black/[0.06] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f4eee7]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40" />
          <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[#ebe0d2]" />

          <span className="relative text-7xl transition duration-300 group-hover:scale-110">
            🥗
          </span>

          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e] shadow-sm">
            Lunch
          </span>
        </div>

        <div className="p-7">
          <h3 className="font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
            Easy Chicken Avocado Salad
          </h3>

          <p className="mt-4 leading-7 text-[#6a6a6a]">
            Fresh, filling and easy to prepare ahead for a busy week.
          </p>

          <Link
            href="/recipes/easy-chicken-avocado-salad"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
          >
            Explore recipe
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>

      {/* Recipe 3 */}
      <article className="group overflow-hidden rounded-[28px] border border-black/[0.06] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#edf2e9]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40" />
          <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[#dee8d8]" />

          <span className="relative text-7xl transition duration-300 group-hover:scale-110">
            🍗
          </span>

          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e] shadow-sm">
            Dinner
          </span>
        </div>

        <div className="p-7">
          <h3 className="font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
            One-Pan Herb Chicken
          </h3>

          <p className="mt-4 leading-7 text-[#6a6a6a]">
            A comforting low-carb dinner idea with minimal cleanup.
          </p>

          <Link
            href="/recipes/one-pan-herb-chicken"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
          >
            Explore recipe
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>
            {/* WEIGHT LOSS AFTER 40 */}
<section id="weight-loss" className="bg-white px-6 py-20 sm:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
    {/* Main feature panel */}
    <div className="relative overflow-hidden rounded-[32px] bg-[#315f61] px-8 py-12 text-white sm:px-12 sm:py-14">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#9fc8c3]/20 blur-3xl" />

      <div className="relative">
        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
          Weight Loss After 40
        </span>

        <h2 className="mt-6 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          A practical approach to healthier habits after 40
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
          Focus on realistic meal planning, consistent habits and simple
          low-carb choices that can fit into everyday life.
        </p>

        <a
          href="/weight-loss"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 font-semibold text-[#315f61] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f7f6]"
        >
          Explore Weight Loss Guides
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>

    {/* Supporting points */}
    <div className="lg:pl-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
        Keep It Realistic
      </p>

      <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#2c2c2c] sm:text-4xl">
        Small changes can make healthy routines feel more manageable
      </h3>

      <p className="mt-5 text-lg leading-8 text-[#6a6a6a]">
        Your routines and priorities may change over time. The goal is to make
        healthy choices simpler, more practical and easier to maintain.
      </p>

      <div className="mt-9 space-y-5">
        <div className="flex gap-4 rounded-2xl border border-black/[0.05] bg-[#f8faf8] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2efed] font-semibold text-[#315f61]">
            ✓
          </div>

          <div>
            <h4 className="font-semibold text-[#2c2c2c]">
              Simple meal strategies
            </h4>
            <p className="mt-1 leading-7 text-[#6a6a6a]">
              Make everyday meals easier to plan and prepare.
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl border border-black/[0.05] bg-[#f8faf8] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2efed] font-semibold text-[#315f61]">
            ✓
          </div>

          <div>
            <h4 className="font-semibold text-[#2c2c2c]">
              Sustainable habits
            </h4>
            <p className="mt-1 leading-7 text-[#6a6a6a]">
              Focus on routines you can realistically maintain.
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl border border-black/[0.05] bg-[#f8faf8] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2efed] font-semibold text-[#315f61]">
            ✓
          </div>

          <div>
            <h4 className="font-semibold text-[#2c2c2c]">
              Practical guidance
            </h4>
            <p className="mt-1 leading-7 text-[#6a6a6a]">
              Clear information without unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
           {/* BLOG */}
<section id="blog" className="bg-[#f7f8f6] px-6 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span className="inline-flex rounded-full bg-[#e8f2f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4a7c7e]">
          From the Blog
        </span>

        <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-[#2c2c2c] sm:text-4xl lg:text-5xl">
          Practical ideas for life after 40
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6a6a6a]">
          Helpful guides, meal ideas and realistic strategies for making
          low-carb living simpler.
        </p>
      </div>

      <a
        href="/blog"
        className="inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition hover:gap-3 hover:text-[#315f61]"
      >
        View all articles
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* Article 1 */}
      <article className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]">
        <span className="w-fit rounded-full bg-[#e8f2f2] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e]">
          Keto Basics
        </span>

        <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
          Is Keto Still a Good Idea After 40?
        </h3>

        <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
          A practical introduction to what a low-carb approach can look like
          as your lifestyle and priorities change.
        </p>

        <a
          href="/blog/keto-after-40"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
        >
          Read article
          <span aria-hidden="true">→</span>
        </a>
      </article>

      {/* Article 2 */}
      <article className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]">
        <span className="w-fit rounded-full bg-[#f3eee8] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e]">
          Meal Planning
        </span>

        <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
          10 Easy Low-Carb Foods to Keep in Your Kitchen
        </h3>

        <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
          Build a kitchen that makes healthy meals easier when everyday life
          gets busy.
        </p>

        <a
          href="/blog/easy-low-carb-foods"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
        >
          Read article
          <span aria-hidden="true">→</span>
        </a>
      </article>

      {/* Article 3 */}
      <article className="group flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]">
        <span className="w-fit rounded-full bg-[#edf2e9] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7c7e]">
          Weight Loss
        </span>

        <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-[#2c2c2c]">
          Why Weight Loss Can Feel Different After 40
        </h3>

        <p className="mt-4 flex-1 leading-7 text-[#6a6a6a]">
          Explore lifestyle factors that can influence weight management as
          routines and priorities change over time.
        </p>

        <a
          href="/blog/weight-loss-after-40"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4a7c7e] transition group-hover:gap-3 group-hover:text-[#315f61]"
        >
          Read article
          <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </div>
</section>
           {/* EMAIL SIGNUP */}
<section id="free-plan" className="bg-white px-6 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[36px] bg-[#315f61] px-6 py-14 text-center text-white shadow-xl shadow-black/[0.08] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#9fc8c3]/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
          Free Resource
        </span>

        <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Get the Free 7-Day Low-Carb Meal Plan
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
          Simple meal ideas to help you get started without spending hours
          planning what to eat.
        </p>

        <a
          href="/free-7-day-low-carb-meal-plan.pdf"
          download
          className="mx-auto mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#1f3839] px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#172d2e] focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          Download the Free Plan
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <span>✓ Free 7-day plan</span>
          <span>✓ Beginner friendly</span>
          <span>✓ Instant PDF download</span>
        </div>
      </div>
    </div>
  </div>
</section>
           
    </main>
  );
}
