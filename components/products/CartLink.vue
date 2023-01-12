<template>
    <NuxtLink
        to="/shop/cart"
        class="luna-btn luna-turn-off-active">
        <Icon name="ri:shopping-cart-fill" size="22" class="mr-1.5 text-orange-700"/>
        <span class="flex items-center">
            <span v-text="`Cart`" class="hidden lg:block mr-1"/>
            <ClientOnly>
                <sup v-text="`(${cart.length})`" class="font-medium text-orange-700"/>
            </ClientOnly>
        </span>
    </NuxtLink>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const cart = store.cart
</script>