export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        products: [],
        cart: [],
        wishlist: []
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
        addToCart(payload) {
            const existingItem = this.cart.find(item => item.id === payload.sku)

            if (existingItem) {
                let existingItemIndex = this.cart.findIndex(item => item.id === existingItem.id)

                existingItem.qty = existingItem.qty + 1
                existingItem.subTotal = payload.price * existingItem.qty
                this.cart[existingItemIndex] = existingItem
            } else {
                this.cart.push({
                    id: payload.sku,
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
            const existingItem = this.wishlist.find(item => item.id === payload.sku)

            if (existingItem) this.wishlist.splice(existingItem, 1)
            else {
                this.wishlist.push({
                    id: payload.sku,
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