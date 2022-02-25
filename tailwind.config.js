module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			transitionProperty: {
				width: 'width',
			},
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
		},
	},
};
