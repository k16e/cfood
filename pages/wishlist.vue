<template>
    <div class="p-3 sm:p-5 pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12 flex items-center justify-between">
        <h1 class="font-light text-orange-700 text-3xl sm:text-5xl lg:text-5xl truncate">Your wishlist!</h1>
    </div>
    <div v-if="products.length >= 1" class="px-3">
        <ul class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            <li v-for="product in products" :key="product.uuid" class="flex">
                <ProductsCard :product="product"/>
            </li>
        </ul>
    </div>
    <p v-else class="px-3 sm:px-5">
        You have yet to add any item to your wishlist. Please continue shopping at
        <NuxtLink to="/products">the Products page.</NuxtLink>
    </p>
</template>

<script setup>
    import { useProductsStore } from '~/stores/products'

    const store = useProductsStore()
    const products = await store.wishlist

    useHead({
        title: 'c.food Products (All Condiments & foodstuff)',
        meta: [
            { name: 'description', content: 'All condiments and foodstuff from c.food' }
        ]
    })
</script>