<template>
    <div>
        <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:grid-cols-4">
            <li v-for="i in products" :key="i.id">
                <NuxtLink :to="`/products/${i.id}`">
                    <CardProduct :product="i" />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'c.food Products (All Condiments & foodstuff)',
        meta: [
            { name: 'description', content: 'All condiments and foodstuff from c.food' }
        ]
    })
</script>

<style lang="scss" scoped>

</style>