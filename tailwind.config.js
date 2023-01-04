module.exports = {
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700')
                    }
                }
            })
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}