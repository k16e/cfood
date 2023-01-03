<template>
    <div class="pt-3 sm:pt-5 lg:pt-7 pb-7 sm:pb-9 lg:pb-12 flex items-center justify-between">
        <h1 class="font-light text-orange-700 text-3xl sm:text-5xl lg:text-7xl truncate">Your Cart</h1>
        <NuxtLink to="/products" class="luna-btn">
            <Icon name="ic:baseline-arrow-back" size="22" class="mr-1.5 text-orange-700"/>
            <span>Products</span>
        </NuxtLink>
    </div>
    <ClientOnly>
        <div>
            <p v-if="cart.length >= 1">
                You have {{ cart.length }} items in your cart.
            </p>
            <p v-else>
                You have yet to add any item to your cart. Please continue shopping at the Products page.
            </p>
        </div>
    </ClientOnly>
    <div>
        <pre>
            {{ cart }}
        </pre>
    </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

const store = useProductsStore()
const cart = store.cart
</script>