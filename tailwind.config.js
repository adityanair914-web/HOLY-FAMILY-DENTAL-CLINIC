/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // New Dental Palette
                primary: '#2F3E3C',   // deep teal-green (headings, navbar)
                secondary: '#BDDBD1',   // sage mint (highlights, borders)
                accent: '#C7E7EC',   // sky blue (CTA highlights)
                teal: '#4A7C74',   // mid teal (icons, hover)
                light: '#FBF9F1',   // warm white (page bg)
                mint: '#E8F0F1',   // cool mint (cards, alternating sections)
                mist: '#E7E9E3',   // soft grey-green
                success: '#25D366',   // WhatsApp green
                dark: '#1C2B29',   // near-black teal
                muted: '#6B8C88',   // muted teal-grey
                border: '#D4E8E3',   // soft border teal
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-dental': 'linear-gradient(135deg, #2F3E3C 0%, #4A7C74 100%)',
                'gradient-mint': 'linear-gradient(135deg, #E8F0F1 0%, #FBF9F1 100%)',
                'gradient-hero': 'linear-gradient(150deg, #2F3E3C 0%, #3D5C58 50%, #4A7C74 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            boxShadow: {
                'teal-sm': '0 2px 12px rgba(47,62,60,0.12)',
                'teal-md': '0 8px 30px rgba(47,62,60,0.18)',
                'teal-lg': '0 20px 60px rgba(47,62,60,0.22)',
                'mint': '0 8px 30px rgba(189,219,209,0.35)',
            },
        },
    },
    plugins: [],
}
