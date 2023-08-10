/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    // make sure to safelist these classes when using purge
    safelist: [
        'w-64',
        'w-1/2',
        'rounded-l-lg',
        'rounded-r-lg',
        'bg-gray-200',
        'grid-cols-4',
        'grid-cols-7',
        'h-6',
        'leading-6',
        'h-9',
        'leading-9',
        'shadow-lg',
    ],

    // enable dark mode via class strategy
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
          },
        colors: {
           primaryBg:"#111827",
           secondaryBg:"#1F2937",
           thirthBg:"#374151",
           "color-main-dark":"#D61F69",
           "color-main":"#E74694",
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            tilt: ['Tilt Neon'],
            poppins: ['Poppins'],
            
        },
        extend: {
            spacing: {
               
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
