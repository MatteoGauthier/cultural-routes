module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Poppins']
        },
        extend: {
            screens: {
                '3xl': '1600px',
              },
            colors: {
                'gray-a': '#B9B9B9',
                sky: '#24CCF1',
                'sky-2': '#43BBFF'
            },
            typography: theme => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.300'),
                        'h1, h2, h3, h4': {
                            color: theme('colors.white')
                        },
                        a: {
                            color: '#3182ce',
                            '&:hover': {
                                color: '#2c5282'
                            }
                        }
                    }
                }
            })
        }
    },

    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens'),]
};
