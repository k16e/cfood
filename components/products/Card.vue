<template>
    <div class="r-card bg-white border border-gray-200 rounded-xl relative">
        <NuxtLink
            :to="`/products/${$slugify(product.name)}-${product.sku}`"
            class="flex flex-col rounded-xl">
            <img :src="product.image" :alt="product.name" class="r-thumb w-full">
            <div class="p-3 border-t border-gray-100">
                <div class="pr-14">
                    <Heading tag="h2" v-text="product.name"/>
                    <p v-text="product.description" class="text-sm line-clamp-2 opacity-70"/>
                </div>
                <div class="pt-2 sm:pt-3">
                    <p
                        v-text="$formatPrice(product.price)"
                        class="font-medium text-gray-800 text-2xl sm:text-xl"
                    />
                </div>
            </div>
        </NuxtLink>
        <ClientOnly>
            <button
                @click="addToWishlist(product)"
                class="flex items-center p-3 sm:p-2 rounded-full bg-gray-50 border border-gray-200 absolute top-3 right-3 z-10"
                :class="wishlist.some(el => el.id === product.sku) ? 'text-red-600' : 'text-gray-500'">
                <Icon name="ri:heart-2-fill" size="18" class="pointer-events-none"/>
                <span v-text="'Add to wishlist'" class="sr-only"/>
            </button>
        </ClientOnly>
        <button
            @click="addToCart(product)"
            class="flex items-center p-3 sm:p-2 rounded-full bg-orange-600 text-white absolute bottom-3 right-3 z-10">
            <Icon name="ri:shopping-cart-fill" size="18" class="pointer-events-none"/>
            <span v-text="'Add to cart'" class="sr-only"/>
        </button>
    </div>
</template>

<script setup>
import { useProductsStore } from '../../stores/products'

const { product } = defineProps(['product'])

const store = useProductsStore()
const addToCart = await store.addToCart
const addToWishlist = await store.addToWishlist
const wishlist = store.wishlist
</script>