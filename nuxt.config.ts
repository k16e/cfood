export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/supabase'
    ],
    app: {
        head: {
            title: 'c.food - Food research, design, experiments, and results.',
            meta: [
                { name: 'description', content: 'c.food is on a mission to make food make sense and taste great while at it.' }
            ]
        }
    },
    runtimeConfig: { // configs (key) exposed to server routes
        currencyKey: process.env.CURRENCY_API_KEY,
        // supabaseUrl: process.env.SUPABASE_URL,
        // supabaseKey: process.env.SUPABASE_KEY,
        public: { // Keys that may/can be exposed to public routes

        }
    }
})
