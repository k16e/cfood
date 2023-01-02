<template>
    <pre>
        {{ cart }}
    </pre>
</template>

<script setup>
    import { useProductStore } from '~/store/products'

    const { product } = defineProps(['product'])
    const store = useProductStore()
    const products = await store.products
    const cart = store.getCart


</script>