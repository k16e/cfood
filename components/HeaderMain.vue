<template>
    <Container center :max-width="'max-w-screen-2xl'"
        class="flex items-center justify-between h-full">
        <div class="flex items-center h-full">
            <NuxtLink to="/" class="flex items-center justify-center rounded-full mr-5">
                <HeaderLogo/>
            </NuxtLink>
            <nav class="sr-only md:not-sr-only flex !h-[95%] items-center space-x-3">
                <h2 v-text="'Main navigation'" class="sr-only"/>
                <NuxtLink
                    v-for="(item, idx) in mainnav" :key="item.title + idx"
                    :to="item.link"
                    class="flex items-center h-full px-3 rounded-full focus:bg-orange-50 hover:bg-orange-50">
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