export const useProductsStore = defineStore('products', {
    state: () => ({
        products: []
    }),
    actions: {
        async fetchProducts() {
            const
                supabase = useSupabaseClient(),
                { data } = await supabase
                    .from('products')
                    .select('*')
                    .order('id')
            this.products = data
            return data
        }
    },
    getters: {}
})