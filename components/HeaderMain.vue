<template>
    <Container center :max-width="'max-w-screen-2xl'"
        class="flex items-center justify-between h-full">
        <div class="flex items-center h-full">
            <NuxtLink to="/" class="flex items-center justify-center rounded-full mr-5">
                <HeaderLogo/>
            </NuxtLink>
            <nav class="sr-only md:not-sr-only flex !h-full items-center">
                <h2 v-text="'Main navigation'" class="sr-only"/>
                <NuxtLink
                    v-for="(item, idx) in mainnav" :key="item.title + idx"
                    :to="item.link"
                    class="flex items-center h-full px-5 rounded-full">
                    {{ item.title }}
                </NuxtLink>
            </nav>
        </div>
        <div class="flex items-center space-x-1.5">
            <ProductsWishlistLink/>
            <ProductsCartLink/>
        </div>
    </Container>
</template>

<script setup>
const mainnav = [
    { title: 'Products', link: '/products' },
    { title: 'Research', link: '/research' },
    { title: 'Studio', link: '/studio' },
    { title: 'Meet c.food', link: '/about' }
]
</script>