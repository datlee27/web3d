/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-orange': '#FF682A',
                'orange-light': '#FF9E76',
                'peach': '#FFBE9A',
                'peach-light': '#FFD8B7',
                'cream': '#FDE5CB',
                'text-gray': '#444444',
                'text-light-gray': '#AAA9A9',
            },
            fontFamily: {
                'be-vietnam-pro': ['"Be Vietnam Pro"', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-orange': 'linear-gradient(90.48deg, #FF682A 26.14%, #FDE5CB 99.59%)',
                'gradient-orange-vertical': 'linear-gradient(180deg, #FDE5CB 0%, #FF682A 100%)',
                'gradient-peach-alpha': 'linear-gradient(180deg, rgba(255, 244, 232, 0.5) 0%, rgba(253, 229, 203, 0.5) 100%)',
            },
        },
    },
    plugins: [],
}
