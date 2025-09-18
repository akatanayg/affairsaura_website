module.exports = {
  content: [
    './index.html',
    './**/*.{js,jsx,ts,tsx}',
    '!./node_modules/**'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#5b3a2e',
        accent2: '#a66a4e',
        muted: '#8b857b',
        glass: 'rgba(255,255,255,0.6)'
      },
      borderRadius: { xl: '1rem' },
      maxWidth: { 'screen-xxl': '1200px' }
    }
  },
  plugins: []
}
