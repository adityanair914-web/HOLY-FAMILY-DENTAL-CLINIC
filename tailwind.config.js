/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f2c5c',
                secondary: '#1a4a8a',
                accent: '#0ea5e9',
                success: '#25D366',
                light: '#f0f7ff',
                dark: '#1e293b',
                muted: '#64748b',
                border: '#e2e8f0',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
