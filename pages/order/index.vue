<template>
    <div>
        <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:grid-cols-4">
            <li v-for="i in products" :key="i.id">
                <NuxtLink :to="`/order/${i.id}`">
                    {{ i.title }}
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
</script>

<style lang="scss" scoped>

</style>