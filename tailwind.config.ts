/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }: { addComponents: (components: Record<string, any>) => void }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '580px',
          },
          '@screen md': {
            maxWidth: '780px',
          },
          '@screen lg': {
            maxWidth: '980px',
          },
          '@screen xl': {
            maxWidth: '1080px',
          },
          '@screen 2xl': {
            maxWidth: '1380px',
          },
        }
      })
    }
  ],
};
