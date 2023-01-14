import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        'nuxt-icon',
        'nuxt-lodash',
        ['@pinia/nuxt', { autoImports: ['defineStore'] }],
        '@pinia-plugin-persistedstate/nuxt',
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        ['@storyblok/nuxt', {
            accessToken: process.env.STORYBLOK_KEY
        }]
    ],
    app: {
        head: {
            title: 'c.food - Food research, design, experiments, and results.',
            meta: [
                { name: 'description', content: 'c.food is on a mission to make food make sense and taste great while at it.' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    runtimeConfig: { // configs (key) exposed to server routes
        currencyKey: process.env.CURRENCY_API_KEY,
        public: { // Keys that may/can be exposed to public routes
            pKey: process.env.P_KEY
        }
    },
    lodash: {
        prefix: '_',
        prefixSkip: ['string'],
        upperAfterPrefix: false
    },
    css: ['@/assets/css/fonts.css'],
    image: {
        domains: [
            'https://spidltwerguofvsjkzqn.supabase.co',
            'https://a.storyblok.com'
        ],
        presets: {
            thumbnail: { modifiers: { width: 360, height: 360 } },
            medium: { modifiers: { width: 960, height: 960 } },
        },
        quality: 100,
        preload: true,
        loading: 'lazy',
        format: 'webp'
    }
})
