<template>
    <Container center :max-width="'max-w-screen-2xl'"
        class="flex items-center justify-between h-full">
        <div class="flex items-center h-full">
            <NuxtLink to="/" class="flex items-center justify-center rounded-full mr-5">
                <HeaderLogo/>
            </NuxtLink>
            <nav class="sr-only md:not-sr-only flex !h-[95%] items-center space-x-3">
                <h2 v-text="'Main navigation'" class="sr-only"/>
                <ul class="flex items-center h-full w-full">
                    <li v-for="(route, idx) in routes" :key="route.title + idx" class="flex items-center h-full">
                        <NuxtLink
                            :to="route.path"
                            class="flex items-center h-full px-3 rounded-full focus:bg-orange-50 hover:bg-orange-50">
                            {{ route.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="flex items-center space-x-1.5">
            <ProductsWishlistLink/>
            <ProductsCartLink/>
        </div>
    </Container>
</template>

<script setup>
const routes = [
    { title: 'Products', path: '/products' },
    { title: 'Research', path: '/research' },
    { title: 'Studio', path: '/studio' },
    { title: 'Meet c.food', path: '/about' }
]
const route = useRoute()
</script>