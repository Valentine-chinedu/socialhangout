module.exports = {
	purge: [
		"./src/components/feed/Feed.jsx",
		"./src/components/form/MessageForm.jsx",
		"./src/components/navbar/NavbarTop.jsx",
		"./src/components/navbar/SideBar.jsx",
		"./src/components/layout/Layout.jsx",
		"./src/components/posts/post/Post.jsx",
		"./src/components/posts/post/PostButton.jsx",
		"./src/components/posts/Posts.jsx",
		"./src/components/profile/Profile.jsx",
		"./src/components/LoginWithPopup.jsx",
		"./src/contextProviders/Auth.jsx",
		"./src/App.js",
	],
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
		extend: {
			opacity: ["disabled"],
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
