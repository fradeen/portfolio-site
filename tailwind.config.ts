import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "hover:bg-gradient-to-l hover:from-slate-700",
    "hover:bg-gradient-to-l hover:from-cyan-700",
    "hover:bg-gradient-to-l hover:from-orange-700",
    "hover:bg-gradient-to-l hover:from-red-500",
    "prose dark:prose-invert"
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ]
}

export default config;
