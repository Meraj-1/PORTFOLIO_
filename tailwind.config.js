// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '-100%' },
        },
      },
      animation: {
        'spin-fast': 'spin 8s linear infinite',    // Custom spin animation
        'bounce': 'bounce 13s infinite',           // Custom bounce animation
        'shine': 'shine 5s linear infinite',       // Shine effect using keyframes
      },
    },
  },
  plugins: [],
};
