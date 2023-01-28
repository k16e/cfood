<template>
    <Reveal>
        <Container center padX padTGrow>
            <PageHeader tag="h1" content="Our products">
                <ClientOnly>
                    <Transition
                        enter-active-class="transition-all duration-300 ease"
                        enter-from-class="opacity-0 translate-y-4"
                        leave-to-class="opacity-0 -translate-y-4"
                        mode="out-in">
                        <div v-if="cart.length">
                            <NuxtLink
                                to="/shop/cart"
                                class="luna-btn _is-primary luna-turn-off-active">
                                <Icon name="ri:shopping-cart-fill" size="22" class="lg:mr-1.5"/>
                                <span v-text="`Go to cart`" class="hidden lg:block"/>
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