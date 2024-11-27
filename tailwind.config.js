module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 8s linear infinite', // Faster rotation for a decorative effect
        'bounce': 'bounce 13s infinite',        // Bouncing effect for hover
      },
    },
  },
  plugins: [],
};

