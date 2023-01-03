<template>
    <NuxtLink
        to="/cart"
        class="p-2 px-3.5 flex items-center rounded-full bg-white border border-gray-200">
        <Icon name="ri:shopping-cart-fill" size="20" class="mr-1.5 text-orange-700"/>
        <span class="flex items-center">
            <span v-text="`Cart`"/>
            <span v-if="$isEmpty(cart)" v-text="`(0)`"/>
            <ClientOnly v-else>
                <span v-text="`(${cart.length})`"/>
            </ClientOnly>
        </span>
    </NuxtLink>
</template>

<script setup>
import { useProductsStore } from '../../stores/products'

const store = useProductsStore()
const cart = store.cart
</script>