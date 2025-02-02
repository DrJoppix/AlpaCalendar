import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)', 'transform-origin': 'bottom' },
          '25%': { transform: 'rotate(-5deg)', 'transform-origin': 'bottom' },
          '75%': { transform: 'rotate(5deg)', 'transform-origin': 'bottom' }
        }
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
