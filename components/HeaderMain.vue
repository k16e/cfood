<template>
    <Container center :max-width="'max-w-screen-2xl'"
        class="flex items-center justify-between h-full">
        <div class="flex items-center ">
            <NuxtLink to="/" class="flex items-center justify-center">
                <HeaderLogo/>
            </NuxtLink>
            <nav class="sr-only md:not-sr-only">
                <h2 v-text="'Main navigation'" class="sr-only"/>
                <NuxtLink to="/products">
                    Products
                </NuxtLink>
                <NuxtLink to="/research">
                    Research
                </NuxtLink>
                <NuxtLink to="/studio">
                    Studio
                </NuxtLink>
                <NuxtLink to="/about">
                    Meet c.food
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

</script>