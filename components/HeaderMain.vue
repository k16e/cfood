<template>
    <header class="p-3" :key="refreshCart">
        <div class="flex items-center justify-between">
            <div class="sr-only md:not-sr-only">
                <NuxtLink to="/">
                    Home
                </NuxtLink>
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
            </div>
            <div>
                <ProductsCartLink/>
            </div>
        </div>
    </header>
</template>

<script setup>
const cartRef = ref(0)
const refreshCart = () => cartRef += 1
</script>