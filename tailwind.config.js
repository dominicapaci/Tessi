/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: 'rgb(var(--color-background))',
          foreground: 'rgb(var(--color-foreground))',
          muted: {
            DEFAULT: 'rgb(var(--color-muted))',
            foreground: 'rgb(var(--color-muted-foreground))',
          },
          accent: 'rgb(var(--color-accent))',
          secondary: 'rgb(var(--color-secondary))',
          border: 'rgb(var(--color-border))',
        },
        fontFamily: {
          serif: ['Cormorant Garamond', 'Times New Roman', 'serif'],
          sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }