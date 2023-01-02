<template>
    <pre>
        {{ cart }}
    </pre>
</template>

<script setup>
    import { useProductsStore } from '~/store/products'

    const { product } = defineProps(['product'])
    const store = useProductsStore()
    const products = await store.products
    const cart = store.cart


</script>