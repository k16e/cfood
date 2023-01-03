<template>
    <NuxtLink
        to="/cart"
        class="p-2 px-3.5 flex items-center rounded-full bg-white border border-gray-200">
        <Icon name="ri:shopping-cart-fill" size="18" class="mr-1.5 text-orange-700"/>
        <span>
            Cart <span v-text="`(${cart.length})`"/>
        </span>
    </NuxtLink>
</template>

<script setup>
import { useProductsStore } from '../../store/products'

const store = useProductsStore()
const cart = store.cart
</script>