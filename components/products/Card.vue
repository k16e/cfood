<template>
    <div class="r-card bg-white border border-gray-200 rounded-xl relative">
        <NuxtLink
            :to="`/products/${$slugify(product.name)}-${product.sku}`">
            <div>
                <img :src="product.image" :alt="product.name" class="r-thumb w-full">
            </div>
            <div class="p-3 border-t border-gray-100">
                <div class="pr-14">
                    <span v-text="product.sku" class="uppercase block text-xs font-medium tracking-wider text-gray-600"/>
                    <h2 v-text="product.name" class="leading-tight text-2xl sm:text-xl truncate pb-1.5 text-orange-800"/>
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
        <button
            class="flex items-center p-3 sm:p-2 rounded-full bg-green-500 text-white absolute top-3 right-3 z-10">
            <Icon name="ri:heart-2-fill" size="18" class="pointer-events-none"/>
            <span v-text="'Add to wishlist'" class="sr-only"/>
        </button>
        <button
            @click="addToCart(product)"
            class="flex items-center p-3 sm:p-2 rounded-full bg-orange-600 text-white absolute bottom-3 right-3 z-10">
            <Icon name="ri:shopping-cart-fill" size="18" class="pointer-events-none"/>
            <span v-text="'Add to cart'" class="sr-only"/>
        </button>
    </div>
</template>

<script setup>
import { useProductsStore } from '../../store/products'

const { product } = defineProps(['product'])
const store = useProductsStore()
const addToCart = await store.addToCart

</script>