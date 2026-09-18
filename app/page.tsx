
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
