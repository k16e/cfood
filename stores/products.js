export const useProductsStore = defineStore('products', {
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
        }
    },
    getters: {}
})