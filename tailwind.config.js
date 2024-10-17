/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        myblack: 'var(--myblack)',
        mywhite: 'var(--mywhite)',
        colorA: 'var(--color-a)',
        colorB: 'var(--color-b)',
        colorC: 'var(--color-c)',
        colorD: 'var(--color-d)',
        colorE: 'var(--color-e)',
        colorF: 'var(--color-f)',
        pdfBg: 'var(--pdfbackground)',
      },
      spacing: {
        navHeight: 'var(--nav-height)',
      }
    },
  },
  plugins: [],
};
