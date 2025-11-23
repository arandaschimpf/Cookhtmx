/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-000': '#000000',
        'gray-300': '#1a1a1a',
        'gray-400': '#2a2a2a',
        'gray-500': '#404040',
        'gray-700': '#808080',
        'white-1000': '#ffffff',
        'white-6p': 'rgba(255, 255, 255, 0.06)',
        'green-300': '#00ff00',
        'red-300': '#ff0000',
        'purple-400': '#a855f7',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'text-tertiary': '#808080',
        'icon-primary': '#ffffff',
        'icon-sencondary': '#808080',
        'icon-quaternary': '#404040',
        'button-ghost-bg-default': 'rgba(255, 255, 255, 0.05)',
        'button-ghost-bg-hover': 'rgba(255, 255, 255, 0.1)',
        'button-ghost-bg-disabled': 'rgba(255, 255, 255, 0.03)',
        'button-ghost-bg-selected': 'rgba(255, 255, 255, 0.15)',
        'button-ghost-stroke': 'rgba(255, 255, 255, 0.1)',
        'button-primary-bg-default': '#8b5cf6',
        'button-primary-bg-hover': '#7c3aed',
        'button-primary-bg-disabled': '#4c1d95',
        'button-primary-bg-selected': '#6d28d9',
      },
      fontSize: {
        '3.25': '0.8125rem',
        '3.5': '0.875rem',
      },
      spacing: {
        '0.25': '0.0625rem',
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '1.75': '0.4375rem',
        '4.5': '1.125rem',
        '8.5': '2.125rem',
      },
      borderRadius: {
        '1.5': '0.375rem',
        '2': '0.5rem',
        'xs': '0.25rem',
      },
      lineHeight: {
        '4.5': '1.125rem',
        '5': '1.25rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.15s ease-in',
        'scale-in': 'scale-in 0.2s ease-out 0.05s both',
      },
    },
  },
  plugins: [],
};
