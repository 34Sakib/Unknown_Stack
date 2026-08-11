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
          deep: '#07080B',
          mid: '#0F1116',
          elevated: '#161921',
          glass: 'rgba(15, 17, 22, 0.75)',
        },
        card: {
          DEFAULT: '#12141A',
          alt: '#171921',
          glass: 'rgba(21, 23, 29, 0.65)',
        },
        gold: {
          1: '#8E6F3E',
          2: '#E7C783',
          3: '#FBF0D2',
          glow: 'rgba(231, 199, 131, 0.18)',
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
          hairline: '#2B303C',
          gold: 'rgba(231, 199, 131, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        bengali: ['"Noto Sans Bengali"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(231, 199, 131, 0.22)',
        'glow-gold-lg': '0 0 50px rgba(231, 199, 131, 0.35)',
        'card-luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px rgba(231, 199, 131, 0.05)',
        'glass-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #8E6F3E 0%, #E7C783 28%, #FBF0D2 50%, #E7C783 72%, #8E6F3E 100%)',
        'gold-gradient-vertical': 'linear-gradient(180deg, #8E6F3E 0%, #E7C783 50%, #FBF0D2 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(231,199,131,0.18) 0%, rgba(7,8,11,0) 70%)',
        'mesh-glow': 'radial-gradient(at 40% 20%, rgba(142, 111, 62, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(231, 199, 131, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(26, 28, 34, 0.5) 0px, transparent 50%)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite linear',
        'glow-pulse': 'glowPulse 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
