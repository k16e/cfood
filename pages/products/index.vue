<template>
    <Reveal>
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
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
const products = productsStore.products
console.log(products)


useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>