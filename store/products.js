export const useProductStore = defineStore('products', {
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
        addToCart(e, sku) {
            e.preventDefault()
            const localCart = JSON.parse(localStorage.getItem('cartItems')) || []
            localCart.push(sku)
            localStorage.setItem('cartItems', JSON.stringify(localCart))
            this.cart = [ ...localCart ]
        }
    },
    getters: {
        getCart: (state) => {
            let cartedProducts
            state.cart.forEach(item => {
                cartedProducts = [...state.products.filter(product => product.sku === item)]
            })
            return cartedProducts
        }
    },
    persist: {
        storage: persistedState.localStorage
    }
})