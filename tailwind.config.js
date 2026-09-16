/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F2EA',
        ink: '#050505',
        dark: '#111111',
        darkSurface: '#1A1A1A',
        primary: {
          DEFAULT: '#2F6BFF',
          hover: '#1B54E0',
          light: '#EBF1FF'
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          hover: '#733DE6',
          light: '#F4EFFE'
        },
        accent: {
          DEFAULT: '#B8FF00',
          hover: '#A3E600',
          light: '#F8FFE5'
        },
        warm: {
          DEFAULT: '#FF4FD8',
          hover: '#E536BC',
          light: '#FFF0FA'
        }
      },
      fontFamily: {
        mono: ['"Space Mono"', '"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px #050505',
        'brutal': '5px 5px 0px #050505',
        'brutal-lg': '8px 8px 0px #050505',
        'brutal-xl': '12px 12px 0px #050505',
        'brutal-accent': '5px 5px 0px #B8FF00',
        'brutal-warm': '5px 5px 0px #FF4FD8',
        'brutal-primary': '5px 5px 0px #2F6BFF',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
