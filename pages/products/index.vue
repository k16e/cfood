<template>
    <Container center padX>
        <div class="pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12 flex items-center justify-between">
            <Heading tag="h1" content="Our products"/>
        </div>
        <ul class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            <li v-for="product in products" :key="product.uuid" class="flex">
                <ProductsCard :product="product"/>
            </li>
        </ul>
    </Container>
</template>

<script setup>
    import { useProductsStore } from '~/stores/products'

    const store = useProductsStore()
    await store.fetchProducts()
    const products = await store.products

    useHead({
        title: 'c.food Products (All Condiments & foodstuff)',
        meta: [
            { name: 'description', content: 'All condiments and foodstuff from c.food' }
        ]
    })
</script>