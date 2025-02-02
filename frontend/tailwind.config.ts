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
        floating_y: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floating_x: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)', 'transform-origin': 'bottom' },
          '25%': { transform: 'rotate(-5deg)', 'transform-origin': 'bottom' },
          '75%': { transform: 'rotate(5deg)', 'transform-origin': 'bottom' }
        }
      },
      animation: {
        floating_y: 'floating_y 4s ease-in-out infinite',
        floating_x: 'floating_x 4s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
