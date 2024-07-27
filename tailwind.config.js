/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"ngo-primary": "#4CAF50",
				"ngo-secondary": "#FFC107",
			},
		},
	},
	plugins: [],
};
