/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#82b378',
    },
  },
};
export const plugins = [];

