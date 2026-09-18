'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-[82px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315f61] font-serif text-xl font-bold text-white shadow-sm transition duration-300 group-hover:scale-105">
              K
            </div>

            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-xl font-semibold tracking-tight text-[#272727]">
                Keto After 40
              </span>

              <span className="mt-0.5 text-[11px] font-medium tracking-wide text-[#777777]">
                Simple low-carb living after 40
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex lg:gap-3">
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-sm font-medium text-[#444444] transition hover:bg-[#f3f6f5] hover:text-[#315f61] lg:px-4"
            >
              Home
            </Link>

            <Link
              href="/recipes"
              className="rounded-full px-3 py-2 text-sm font-medium text-[#444444] transition hover:bg-[#f3f6f5] hover:text-[#315f61] lg:px-4"
            >
              Recipes
            </Link>

            <Link
              href="/blog"
              className="rounded-full px-3 py-2 text-sm font-medium text-[#444444] transition hover:bg-[#f3f6f5] hover:text-[#315f61] lg:px-4"
            >
              Blog
            </Link>

            <Link
              href="/weight-loss"
             className="rounded-full px-3 py-2 text-sm font-medium text-[#444444] transition hover:bg-[#f3f6f5] hover:text-[#315f61] lg:px-4"
            >
              Weight Loss
            </Link>

            <Link
              href="/about"
              className="rounded-full px-3 py-2 text-sm font-medium text-[#444444] transition hover:bg-[#f3f6f5] hover:text-[#315f61] lg:px-4"
            >
              About
            </Link>

            <Link
              href="/contact"
             className="rounded-full px-3 py-2 text-sm font-medium text-[#444444] transition hover:bg-[#f3f6f5] hover:text-[#315f61] lg:px-4"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/#free-plan"
           className="hidden min-h-11 items-center justify-center rounded-full bg-[#315f61] px-5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#294f51] md:inline-flex"
          >
            Get Free Plan
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-[#f8faf9] text-[#333333] transition hover:bg-[#eef3f2] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="border-t border-black/[0.05] py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-[#333333] hover:bg-[#f5f7f6]"
              >
                Home
              </Link>

              <Link
                href="/recipes"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-[#333333] hover:bg-[#f5f7f6]"
              >
                Recipes
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-[#333333] hover:bg-[#f5f7f6]"
              >
                Blog
              </Link>

              <Link
                href="/weight-loss"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-[#333333] hover:bg-[#f5f7f6]"
              >
                Weight Loss
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-[#333333] hover:bg-[#f5f7f6]"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-[#333333] hover:bg-[#f5f7f6]"
              >
                Contact
              </Link>

              <Link
                href="/#free-plan"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-[#315f61] px-6 font-semibold text-white"
              >
                Get Free 7-Day Plan
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}