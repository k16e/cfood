<template>
    <Container padX center>
        <!-- Product title -->
        <HeaderPage tag="h1" :content="product.name" isChildPage>
            <button @click="addToCart(product)" class="luna-btn _is-primary">
                <Icon name="ri:shopping-cart-fill" size="20"/>
                <span v-text="'Add to cart'" class="hidden lg:block ml-1.5"/>
            </button>
        </HeaderPage>
        <div class="pt-5 grid md:grid-cols-2 gap-5">
            <!-- Product image -->
            <NuxtImg
                :src="product.image"
                :alt="product.name"
                sizes="sm:576px md:768px lg:960px"
            />
            <!-- Product details -->
            <section
                aria-labelledby="information-heading"
                class="bg-white p-5 rounded-xl border border-gray-200 relative">
                <h2 id="information-heading" class="sr-only">Product information</h2>
                <p
                    v-text="$formatPrice(product.price)"
                    class="font-medium text-gray-800 text-2xl sm:text-3xl"
                />
                <div class="mt-5">
                    <p v-text="product.description" class="text-xl opacity-70"/>
                </div>
                <div class="mt-6 flex items-center">
                    <Icon name="ic:round-check-circle" size="18" class="flex-shrink-0 text-green-700" aria-hidden="true"/>
                    <p class="ml-2 text-sm text-gray-500">In stock, ready to ship</p>
                </div>
                <!-- Add to wishlist -->
                <ClientOnly>
                    <button
                        @click="addToWishlist(product)"
                        class="flex items-center p-3 rounded-full bg-gray-50 border border-gray-200 absolute top-3 right-3 z-10"
                        :class="wishlist.some(el => el.sku === product.sku) ? 'text-red-600' : 'text-gray-500'">
                        <Icon name="ri:heart-2-fill" size="18"/>
                        <span v-text="'Add to wishlist'" class="sr-only"/>
                    </button>
                </ClientOnly>
            </section>
        </div>
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