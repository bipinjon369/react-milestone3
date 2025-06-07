/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-green': '#007272',
        'task-date-text-color': '#7D7878',
        'task-bg-color': '#7F7F7F1A',
        'placeholder-text-color': '#A5A5A5',
        'completed-task-color': '#757575'
      },
      fontSize: {
        'nav-header-text': ['22.93px', { lineHeight: '22.93px', fontWeight: '600' }],
        'task-header-text': ['24px', { lineHeight: '24px', fontWeight: '700' }],
        'task-date-text': ['18px', { lineHeight: '18px', fontWeight: '400' }],
        'button-text': ['16px', { lineHeight: '16px', fontWeight: '600' }],
        'task-text': ['19.37px', { lineHeight: '19.37px', fontWeight: '400' }],
        'placeholder-text': ['36px', { lineHeight: '36px', fontWeight: '500' }],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      screens: {
        'max-318': { max: '318px' },
      },
    },
  },
  plugins: [],
}

