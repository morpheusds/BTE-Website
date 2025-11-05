/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#0f3d20',
        },
        earth: {
          50: '#faf8f5',
          100: '#f5f1e8',
          200: '#e8dfc9',
          300: '#d4c5a0',
          400: '#b8a077',
          500: '#9d7f54',
          600: '#7d6443',
          700: '#5d4a32',
          800: '#3e3122',
          900: '#2a2116',
        },
        sage: {
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#d1dbc9',
          300: '#b0c09f',
          400: '#8a9f75',
          500: '#6b7f56',
          600: '#546543',
          700: '#3e4c32',
          800: '#2a3322',
          900: '#1a2015',
        },
        natural: {
          50: '#fdfcfb',
          100: '#f9f7f4',
          200: '#f1ede7',
          300: '#e3dcd2',
          400: '#cec3b5',
          500: '#b3a593',
          600: '#958776',
          700: '#766b5d',
          800: '#5a5047',
          900: '#3d3731',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        natural: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 30s ease-in-out infinite',
        'float-slower': 'float 40s ease-in-out infinite',
        'sway': 'sway 8s ease-in-out infinite',
        'grow': 'grow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20px) rotate(5deg)' },
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
