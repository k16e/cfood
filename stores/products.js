export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        cart: [],
        wishlist: [],
        shippingRates: [],
        order: []
    }),
    actions: {
        async fetchProducts() {
            const supabase = useSupabaseClient()
            const { data } = await supabase
                .from('products')
                .select('*')
                .order('id')
            this.products = data
        },
        async fetchShippingRates() {
            const supabase = useSupabaseClient()
            const { data } = await supabase
                .from('shipping_rates')
                .select('*')
                .order('id')
            this.shippingRates = data
        },
        addToCart(payload) {
            const existingItem = this.cart.find(item => item.sku === payload.sku)
            const isInWishlist = this.wishlist.find(item => item.sku === payload.sku)
            if (isInWishlist) {
                this.wishlist.splice(this.wishlist.indexOf(isInWishlist), 1)
            }

            if (existingItem) {
                let existingItemIndex = this.cart.findIndex(item => item.sku === existingItem.sku)

                existingItem.qty = existingItem.qty + 1
                existingItem.subTotal = payload.price * existingItem.qty
                this.cart[existingItemIndex] = existingItem
            } else {
                this.cart.push({
                    sku: payload.sku,
                    name: payload.name,
                    image: payload.image,
                    description: payload.description,
                    price: payload.price,
                    qty: 1,
                    subTotal: payload.price
                })
            }
        },
        addToWishlist(payload) {
            const existingItem = this.wishlist.find(item => item.sku === payload.sku)

            if (existingItem) this.wishlist.splice(existingItem, 1)
            else {
                this.wishlist.push({
                    sku: payload.sku,
                    name: payload.name,
                    image: payload.image,
                    description: payload.description,
                    price: payload.price,
                    subTotal: payload.price
                })
            }
        }
    },
    persist: { storage: persistedState.localStorage }
})