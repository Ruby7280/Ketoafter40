import type { MetadataRoute } from "next";
import { recipes } from "./recipes/recipe-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ketoafter40.com";

  return [
    ...recipes.map((recipe) => ({
      url: `${baseUrl}/recipes/${recipe.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
  url: `${baseUrl}/blog/keto-after-40`,
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/easy-low-carb-foods`,
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/weight-loss-after-40`,
  changeFrequency: "monthly",
  priority: 0.8,
},
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/recipes`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/weight-loss`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/keto-guide`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
