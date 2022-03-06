module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {},
	variants: {},
	plugins: [require('tailwind-scrollbar-hide')],
};
