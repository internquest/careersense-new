import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ['flex-grow-0', 'text-[1.4rem]', 'flex-shrink-0', 'basis-auto', 'bg-[#CEFFA5]', 'px-[2rem]', 'py-[1.5rem]', 'p-[.75rem]', 'border-b ', 'font-quanreg', 'border-solid', 'border-black', 'mx-auto', 'pl-8', 'pr-20', 'h-full', 'bg-[#FFFBF8]', '[&_p]:text-[1.125rem]', ' [&>*]:text-[#100C0ACC]/[.8]', '[&_p]:tracking-normal', 'pt-[1rem]', 'px-[2rem]', 'pb-[1.5rem]', 'gap-3', 'leading-[2]', 'w-[799px]', 'mt-[12px]', 'list-decimal', 'gap-[2px]', 'pl-2', 'mt-3', 'ml-7', 'bg-[#CEFFA5]', 'px-[2rem]', 'pt-[1.5rem]', 'p-[.75rem]', 'pb-0', 'border-b-[2.5px]', 'text-[#100C0ACC]', 'text-start', 'text-[1.4rem]', 'leading-[2.75rem]', 'font-normal', ' my-5', ' leading-[2.75rem]', 'my-5', '[&>ol]:list-decimal', '[&>ol]:ml-8', ' text-[1.065rem]', 'leading-[1.7]', 'w-auto', 'mx-5', 'my-[15px]', 'mr-8', 'py-1', 'text-[#100C0A]/[.9]', '[&>p]:mt-3', '[&>p]:mt-5 ', '[&>p:first-child]:mt-0', '[&_a]:text-[#648efc]', '[&_a]:active:text-[#cf5fff]', '[&_a]:hover:cursor-pointer', '[&_a]:underline'],
  theme: {
    extend: {
      fontFamily: {
        quanreg: ['var(--font-QuandoRegular)'],
        Dmsansreg: ['var(--font-DMSansReg)'],
        schibstedmed: ['var(--font-SchibstedGroteskMedium)'],
        schibstereg: ['var(--font-SchibstedGroteskregular)'],
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
