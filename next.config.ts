import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  outputFileTracingIncludes: {
    "/api/meal-plan": ["./private/free-7-day-low-carb-meal-plan.pdf.enc"],
  },
};

export default nextConfig;
