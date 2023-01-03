<template>
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
</template>

<script setup>
    import { useProductsStore } from '../store/products'

    const store = useProductsStore()
    const cart = store.cart
</script>