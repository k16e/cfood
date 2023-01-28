<template>
    <Reveal>
        <Container center padX padTGrow>
            <PageHeader tag="h1" content="Our products">
                <ClientOnly>
                    <Transition name="slide-up" mode="out-in">
                        <div v-if="cart.length">
                            <NuxtLink
                                to="/shop/cart"
                                class="luna-btn _is-primary _is-square luna-turn-off-active">
                                <span v-text="`Go to cart`" class="hidden"/>
                                <Icon name="material-symbols:arrow-outward-rounded" size="22"/>
                            </NuxtLink>
                        </div>
                    </Transition>
                </ClientOnly>
            </PageHeader>
            <ul class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                <li v-for="product in products" :key="product.uuid">
                    <ProductsCard :product="product"/>
                </li>
            </ul>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
await productsStore.fetchProducts()
const { products, cart } = productsStore


useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>