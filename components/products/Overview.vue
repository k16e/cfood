<template>
    <Container padX center>
        <!-- Product title -->
        <div class="pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12 flex items-center justify-between">
            <Heading tag="h1" :content="product.name"/>
            <button
                @click="addToCart(product)"
                class="luna-btn _is-primary">
                <Icon name="ri:shopping-cart-fill" size="18" class="pointer-events-none mr-1.5"/>
                <span v-text="'Add to cart'"/>
            </button>
        </div>
        <section class="px-3 bg-white lg:bg-transparent rounded-xl border border-gray-200 lg:border-0">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <!-- Product details -->
                <div class="lg:max-w-lg lg:self-end">
                    <section aria-labelledby="information-heading" class="mt-4">
                        <h2 id="information-heading" class="sr-only">Product information</h2>
                        <div class="pt-2 sm:pt-3">
                            <p
                                v-text="$formatPrice(product.price)"
                                class="font-medium text-gray-800 text-2xl sm:text-xl"
                            />
                        </div>
                        <div class="mt-4 space-y-6">
                            <p v-text="product.description" class="text-sm opacity-70"/>
                        </div>
                        <div class="mt-6 flex items-center">
                            <Icon name="ic:round-check-circle" size="18" class="flex-shrink-0 text-green-700" aria-hidden="true"/>
                            <p class="ml-2 text-sm text-gray-500">In stock, ready to ship</p>
                        </div>
                    </section>
                </div>
                <!-- Product image -->
                <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                        <NuxtImg
                            :src="product.image"
                            :alt="product.name"
                            sizes="sm:576px md:768px lg:1024px"
                        />
                    </div>
                </div>
            </div>
        </section>
    </Container>
</template>

<script setup>
import { useProductsStore } from '../../stores/products'

const { product } = defineProps(['product'])
const store = useProductsStore()
const addToCart = await store.addToCart
const addToWishlist = await store.addToWishlist
const wishlist = store.wishlist
</script>