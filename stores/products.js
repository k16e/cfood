export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        products: [],
        cart: []
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
        async addToCart(payload) {
            const existingItem = this.cart.find(item => item.id === payload.sku)
            if (existingItem) {
                let existingItemIndex = this.cart.findIndex(
                    item => item.id === existingItem.id
                )

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
        }
    },
    persist: {
        storage: persistedState.localStorage
    }
})