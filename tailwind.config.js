/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4F7FFF',
                secondary: '#6B7280',
                success: '#10B981',
                danger: '#EF4444',
                background: '#E5E9F2',
            },
            boxShadow: {
                'neumorphism': '8px 8px 16px #c5c9d1, -8px -8px 16px #ffffff',
                'neumorphism-inset': 'inset 8px 8px 16px #c5c9d1, inset -8px -8px 16px #ffffff',
                'neumorphism-sm': '4px 4px 8px #c5c9d1, -4px -4px 8px #ffffff',
            }
        },
    },
    plugins: [],
}
