import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#262b2b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4a7c7e] font-serif text-xl font-bold text-white">
                K
              </div>

              <div>
                <p className="font-serif text-2xl font-semibold">
                  Keto After 40
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Simple low-carb living after 40
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-white/65">
              Practical low-carb recipes, beginner-friendly guides and
              realistic ideas for building healthier everyday habits after 40.
            </p>

            <Link
              href="/#free-plan"
              className="mt-7 inline-flex rounded-full bg-[#4a7c7e] px-6 py-3 font-semibold text-white transition hover:bg-[#3d696b]"
            >
              Get the Free 7-Day Plan
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/recipes"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Recipes
              </Link>

              <Link
                href="/blog"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/keto-guide"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Keto Beginner Guide
              </Link>

              <Link
                href="/weight-loss"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Weight Loss
              </Link>

              <Link
                href="/faq"
                className="w-fit text-white/75 transition hover:text-white"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Company
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="w-fit text-white/75 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="w-fit text-white/75 transition hover:text-white"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Keto After 40. All rights reserved.
          </p>

          <p>
            For general educational and informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}