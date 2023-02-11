export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        'nuxt-icon',
        'nuxt-lodash',
        ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
        '@pinia-plugin-persistedstate/nuxt',
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        ['@storyblok/nuxt', {
            accessToken: process.env.STORYBLOK_KEY,
            bridge: true,
            apiOptions: {},
            useApiClient: true,
            cache: { clear: 'auto', type: 'memory' }
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
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
        storyblokKey: process.env.STORYBLOK_KEY,
        serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        supabaseUrl: process.env.SUPABASE_URL,
        public: {
            paystackKey: process.env.PAYSTACK_KEY,
            storyblokVersion: process.env.STORYBLOK_VERSION
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
            thumbnail: { modifiers: { width: 150, height: 150 } },
            medium: { modifiers: { width: 768, height: 768 } },
            small: { modifiers: { width: 576, height: 576 } },
        },
        quality: 100,
        preload: true,
        loading: 'lazy',
        format: 'webp'
    },
    imports: {
        dirs: ['stores']
    },
    routeRules: {
        '/shop': { redirect: '/products' }
    }
})
