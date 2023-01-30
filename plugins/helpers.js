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
            stripLink: link => {
                if (link.includes('pages')) return link.replace(/pages/g, '')
                return link
            },
            isEmpty: str => _isEmpty(str),
            mdRender: md(),
            mediaType: (file, type) => {
                const imageRegexp = /[\/.](gif|jpg|jpeg|tiff|png)$/i
                type = type.toLowerCase()
                if (imageRegexp.test(file)) return (type = 'image')
            },
            year: () => new Date().getFullYear(),
            removeFromCart: (e, idx, cart) => cart.splice(idx, 1),
            increaseToCart: (e, item) => {
                const
                    input = e.target.previousElementSibling,
                    max = Number(input.getAttribute('max'))
                let value = Number(input.value)

                if (value == max) return
                value++
                input.value = value
                item.qty = value
                item.subTotal = value * item.price
            },
            decreaseFromCart: (e, item) => {
                const
                    input = e.target.nextElementSibling,
                    incr = input.nextElementSibling,
                    min = Number(input.getAttribute('min'))
                let value = Number(input.value)

                if (value <= 0) return
                value--
                if (incr.classList.contains('_is-disabled')) incr.classList.remove('_is-disabled')
                if (value == 0) {
                    const { cart } = useProductsStore()
                    cart.splice(cart.findIndex(i => i.sku === item.sku), 1)
                }
                input.value = value
                item.qty = value
                item.subTotal = value * item.price
            },
            itemIsIn: (obj, arr) => arr.some(el => el.sku === obj.sku)
        }
    }
})