import { useLocalStorage } from '@vueuse/core'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        cart: useLocalStorage('cartItems', [])
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
        // getCart: state => state.cart
    }
})