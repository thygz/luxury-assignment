/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: 'url(./assets/hero-image.jpg)',
                decor1: 'url(./assets/decor1.png)',
                decor2: 'url(./assets/decor2.png)',
                intentional1: 'url(./assets/intentional1.png)',
                intentional2: 'url(./assets/intentional2.png)',
                buying: 'url(./assets/buying-image.png)',
                selling: 'url(./assets/selling-image.png)',
                work: 'url(./assets/work-with-us.png)',
            },
            fontFamily: {
                jost: ['Jost', 'sans-serif'],
                crimson: ['Crimson Text', 'serif'],
            },
        },
    },
    plugins: [],
};
