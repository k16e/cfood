<template>
    <NuxtLink
        to="/cart"
        class="luna-btn">
        <Icon name="ri:shopping-cart-fill" size="20" class="mr-1.5 text-orange-700"/>
        <span class="flex items-center">
            <span v-text="`Cart`"/>
            <sup v-if="$isEmpty(cart)" v-text="`(0)`" class="font-medium ml-1 text-orange-700"/>
            <ClientOnly v-else>
                <sup v-text="`(${cart.length})`" class="font-medium ml-1 text-orange-700"/>
            </ClientOnly>
        </span>
    </NuxtLink>
</template>

<script setup>
import { useProductsStore } from '../../stores/products'

const store = useProductsStore()
const cart = store.cart
</script>