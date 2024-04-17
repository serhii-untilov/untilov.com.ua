import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                bottom: '0 0 10px rgba(0, 0, 0, .09);',
            },
            keyframes: {
                morph: {
                    '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
                    '25%': { borderRadius: '40% 60% 70% 30%/70% 60% 40% 70%' },
                    '50%': { borderRadius: '30% 70% 40% 60%/30% 40% 60% 60%' },
                    '75%': { borderRadius: '70% 30% 60% 40%/40% 70% 30% 30%' },
                    '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
                },
            },
            animation: {
                morph: 'morph 8s ease-in-out infinite',
                spinSlow: 'spin 24s linear infinite',
            },
            slantContainer: {
                transform: 'skew(14deg)',
            },
        },
    },
    plugins: [],
};
export default config;
