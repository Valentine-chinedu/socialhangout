module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				width: "width",
			},

			backgroundColor: {
				primary: "var(--color-bg-primary)",
				secondary: "var(--color-bg-secondary)",
			},
			textColor: {
				accent: "var(--color-text-accent)",
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
			},

			borderColor: {
				primary: "var(--color-border-primary)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
