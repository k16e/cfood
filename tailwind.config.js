module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './storyblok/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Yellowtail', 'cursive'],
                'sans': ['Kumbh Sans', 'sans-serif']
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.orange.700'),
                            '&:hover': { color: theme('colors.orange.500') }
                        }
                    }
                }
            }),
            animation: {
                'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
            },
            keyframes: {
                'slide-in-top': {
                    '0%': { transform: 'translateY(-8px)', opacity: '0' },
                    to: { transform: 'translateY(0)', opacity: '1' }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}