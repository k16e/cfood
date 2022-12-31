export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            formatPrice: price => {
                const formattedPrice = new Intl.NumberFormat('en-NG',
                    {
                        style: 'currency',
                        currency: 'NGN',
                        maximumFractionDigits: 0
                    })
                    .format(price)
                return formattedPrice
            },
            slugify: str => _kebabCase(str.replace(/&/g, '-and-'))
        }
    }
})