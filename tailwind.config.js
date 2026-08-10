/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0A0B0F',
          mid: '#131519',
          elevated: '#1A1C22',
        },
        card: {
          DEFAULT: '#15171D',
          alt: '#17191F',
        },
        gold: {
          1: '#8E6F3E',
          2: '#E7C783',
          3: '#FBF0D2',
        },
        steel: {
          1: '#5C6472',
          2: '#8B93A1',
        },
        content: {
          primary: '#F5F3EF',
          secondary: '#D9DCE2',
          muted: '#8B93A1',
        },
        border: {
          hairline: '#3A3F4B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bengali: ['"Noto Sans Bengali"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #8E6F3E 0%, #E7C783 28%, #FBF0D2 50%, #E7C783 72%, #8E6F3E 100%)',
        'gold-gradient-vertical': 'linear-gradient(180deg, #8E6F3E 0%, #E7C783 50%, #FBF0D2 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(231,199,131,0.15) 0%, rgba(10,11,15,0) 70%)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite linear',
        'glow-pulse': 'glowPulse 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
