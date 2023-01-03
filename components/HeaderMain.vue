<template>
    <header class="p-3">
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
                <CartLink/>
            </div>
        </div>
    </header>
</template>

<script setup>
    
</script>