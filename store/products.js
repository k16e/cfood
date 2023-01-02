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
        addToCart(e) {
            console.log(e)
        }
    },
    getters: {}
})