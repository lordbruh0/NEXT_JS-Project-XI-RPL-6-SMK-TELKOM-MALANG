import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'home' : "url('/image/background2.jpg')",
      },
      backgroundColor : {
        'black': "rgba(0,0,0,0.5)",
      },
      borderColor :{
        "brown": "#5c3d31",
        "soft-brown": "f2c2ad",
      },
      textColor : {
        "brown" : "#5c3d31",
        "soft-brown" : "#f2c2ad",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
