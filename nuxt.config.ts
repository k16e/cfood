// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'c.food - Food research, design, experiments, and results.',
            meta: [
                { name: 'description', content: 'c.food is on a mission to make food make sense and taste great while at it.' }
            ]
        }
    }
})
