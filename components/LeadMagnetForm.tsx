"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function LeadMagnetForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          website: formData.get("website"),
        }),
      });
      const result = (await response.json()) as { message?: string; downloadUrl?: string };

      if (!response.ok || !result.downloadUrl) {
        throw new Error(result.message || "Unable to submit your email right now.");
      }

      setDownloadUrl(result.downloadUrl);
      setState("success");
      setMessage("Thank you! Your free meal plan is ready.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="mx-auto mt-9 max-w-xl rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
        <p className="font-semibold text-white" role="status">{message}</p>
        <a
          href={downloadUrl}
          className="mx-auto mt-5 inline-flex min-h-14 items-center justify-center rounded-full bg-[#1f3839] px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#172d2e] focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          Download Your Meal Plan
        </a>
        <p className="mt-3 text-xs text-white/70">This private download link expires in 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-9 max-w-2xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <label htmlFor="lead-email" className="sr-only">Email address</label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Enter your email address"
          className="min-h-14 w-full rounded-full border border-white/30 bg-white px-6 text-[#1f3839] outline-none placeholder:text-[#6d7e7f] focus:border-white focus:ring-4 focus:ring-white/20 sm:max-w-md"
        />
        <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="min-h-14 shrink-0 rounded-full bg-[#1f3839] px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#172d2e] focus:outline-none focus:ring-4 focus:ring-white/30 disabled:cursor-wait disabled:opacity-70"
        >
          {state === "submitting" ? "Sending…" : "Send Me the Free Plan"}
        </button>
      </div>
      <label className="mx-auto mt-4 flex max-w-xl items-start justify-center gap-3 text-left text-sm text-white/80">
        <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#1f3839]" />
        <span>Send me the meal plan and occasional low-carb tips. I can unsubscribe at any time.</span>
      </label>
      {message && <p className="mt-4 text-sm font-medium text-white" role={state === "error" ? "alert" : "status"}>{message}</p>}
    </form>
  );
}
