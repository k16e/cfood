<template>
    <div class="flex items-center justify-between h-full">
        <div class="flex items-center ">
            <div>
                <NuxtLink to="/">
                    Home
                </NuxtLink>
            </div>
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
        <ProductsCartLink/>
    </div>
</template>

<script setup>

</script>