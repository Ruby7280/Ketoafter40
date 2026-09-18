import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  alternates: {
  canonical: "https://ketoafter40.com",
},
  metadataBase: new URL("https://ketoafter40.com"),

  title: {
    default: "Keto After 40 | Low-Carb Recipes, Guides & Weight Loss Tips",
    template: "%s | Keto After 40",
  },

  description:
    "Practical keto and low-carb recipes, beginner guides, meal planning ideas and sustainable healthy habits for life after 40.",

  keywords: [
    "keto after 40",
    "low carb after 40",
    "keto recipes",
    "low carb recipes",
    "weight loss after 40",
    "keto beginner guide",
  ],

  openGraph: {
    title: "Keto After 40",
    description:
      "Practical keto and low-carb recipes, guides and sustainable healthy habits for life after 40.",
    url: "https://ketoafter40.com",
    siteName: "Keto After 40",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Keto After 40",
    description:
      "Practical keto and low-carb recipes, guides and sustainable healthy habits for life after 40.",
  },

 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    
    lang="en"
    data-scroll-behavior="smooth"
    className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col">
      <Header />

      <div className="flex-1">
  {children}
</div>

      <Footer />
    </body>
  </html>
  );
}