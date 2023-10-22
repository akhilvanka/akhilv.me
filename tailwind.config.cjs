/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'darkGrey': '#1E1E1E',
			'offWhite': '#F0F0F0', 
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
