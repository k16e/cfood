<template>
    <WrapperReveal>
        <Container center padX padTGrow>
            <div class="flex items-center justify-between">
                <Heading tag="h1" content="Our products"/>
            </div>
            <ul class="pt-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                <li v-for="product in products" :key="product.uuid">
                    <ProductsCard :product="product"/>
                </li>
            </ul>
        </Container>
    </WrapperReveal>
</template>

<script setup>
import { useStateStore } from '@/states'

const store = useStateStore()
await store.fetchProducts()
const products = store.products

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>