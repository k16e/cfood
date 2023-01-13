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
                'display': ['Yellowtail', 'cursive']
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
                'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}