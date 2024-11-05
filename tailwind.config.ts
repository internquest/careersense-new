import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ['flex-grow-0', 'flex-shrink-0', 'basis-auto', 'bg-[#CEFFA5]', 'px-[2rem]', 'py-[1.5rem]', 'p-[.75rem]', 'border-b ', 'border-solid', 'border-black'],
  theme: {
    extend: {
      fontFamily: {
        quanreg: ['var(--font-QuandoRegular)'],
        Dmsansreg: ['var(--font-DMSansReg)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
};
export default config;
