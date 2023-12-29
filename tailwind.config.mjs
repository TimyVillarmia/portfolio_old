/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		colors: {
			'primary': '#7BD3EA',
			'secondary': '#A1EEBD',
			'tertiary': '#F6F7C4',
			'quaternary': '#F6D6D6',
			'dark': '#101010',
			'card': '#232323',
			'white': '#ffffff',
			'black': '#000000',
		},
		fontFamily: {
			serif: ['Space Grotesk', 'sans-serif']
		},
	},
	plugins: [],
}
