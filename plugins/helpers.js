import md from 'markdown-it'
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
            slugify: str => _kebabCase(str.replace(/&/g, '-and-')),
            isEmpty: str => _isEmpty(str),
            mdRender: md(),
            mediaType: (file, type) => {
                const imageRegexp = /[\/.](gif|jpg|jpeg|tiff|png)$/i
                type = type.toLowerCase()
                if (imageRegexp.test(file)) return (type = 'image')
            },
            year: () => new Date().getFullYear()
        }
    }
})