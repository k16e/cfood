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
            <div class="">
                <NuxtLink to="/cart" class="p-2 px-3.5 flex items-center rounded-full bg-white border border-gray-200">
                    <Icon name="ri:shopping-cart-fill" size="18" class="mr-1.5 text-orange-700"/>
                    <span class="">
                        Cart <span>(0)</span>
                    </span>
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>