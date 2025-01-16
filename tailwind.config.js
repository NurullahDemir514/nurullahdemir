/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#030712', // En koyu arka plan
                    light: '#0F172A',   // Koyu arka plan
                },
                accent: {
                    DEFAULT: '#10B981', // Ana vurgu rengi (yeşil)
                    light: '#34D399',   // Açık yeşil
                    dark: '#059669',    // Koyu yeşil
                },
                surface: {
                    DEFAULT: '#1F2937', // Kartlar için
                    light: '#374151',   // Açık yüzey
                    dark: '#111827',    // Koyu yüzey
                },
                text: {
                    primary: '#F9FAFB',   // Ana metin
                    secondary: '#E5E7EB', // İkincil metin
                    muted: '#9CA3AF',    // Soluk metin
                }
            },
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'matrix': 'matrix 20s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
                glow: {
                    '0%, 100%': {
                        opacity: 1,
                    },
                    '50%': {
                        opacity: 0.5,
                    },
                },
                matrix: {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
            },
        },
    },
    plugins: [],
} 