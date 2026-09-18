export type Recipe = {
  slug: string;
  title: string;
  category: string;
  emoji: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "creamy-low-carb-egg-breakfast",
    title: "Creamy Low-Carb Egg Breakfast",
    category: "Breakfast",
    emoji: "🍳",
    description:
      "Soft scrambled eggs with spinach and avocado for a quick, satisfying start to the day.",
    prepTime: "5 minutes",
    cookTime: "8 minutes",
    servings: 1,
    ingredients: [
      "2 large eggs",
      "1 tablespoon cream cheese",
      "1 teaspoon butter or olive oil",
      "1 handful baby spinach",
      "1/2 avocado, sliced",
      "Salt and black pepper, to taste",
    ],
    steps: [
      "Whisk the eggs with the cream cheese, salt and pepper.",
      "Warm the butter in a small pan over medium-low heat and wilt the spinach.",
      "Add the egg mixture and stir gently until softly set.",
      "Serve immediately with the sliced avocado.",
    ],
  },
  {
    slug: "easy-chicken-avocado-salad",
    title: "Easy Chicken Avocado Salad",
    category: "Lunch",
    emoji: "🥗",
    description:
      "A fresh make-ahead salad with chicken, avocado, crisp vegetables and a simple lemon dressing.",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: 2,
    ingredients: [
      "2 cups cooked chicken, sliced",
      "1 ripe avocado, cubed",
      "3 cups mixed salad leaves",
      "1/2 cucumber, sliced",
      "8 cherry tomatoes, halved",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "Salt and black pepper, to taste",
    ],
    steps: [
      "Arrange the salad leaves, cucumber and tomatoes in a large bowl.",
      "Add the chicken and avocado.",
      "Whisk the olive oil, lemon juice, salt and pepper together.",
      "Pour over the salad, toss gently and serve.",
    ],
  },
  {
    slug: "one-pan-herb-chicken",
    title: "One-Pan Herb Chicken",
    category: "Dinner",
    emoji: "🍗",
    description:
      "A simple herb chicken dinner with roasted low-carb vegetables and minimal cleanup.",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    servings: 4,
    ingredients: [
      "4 boneless chicken thighs",
      "2 cups broccoli florets",
      "1 zucchini, sliced",
      "1 red capsicum, sliced",
      "2 tablespoons olive oil",
      "1 teaspoon dried oregano",
      "1 teaspoon garlic powder",
      "Salt and black pepper, to taste",
    ],
    steps: [
      "Heat the oven to 200°C and line a large tray.",
      "Place the chicken and vegetables on the tray.",
      "Drizzle with olive oil, then season with oregano, garlic powder, salt and pepper.",
      "Roast for 25–30 minutes, until the chicken is cooked through and the vegetables are tender.",
    ],
  },
];

export function getRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}
