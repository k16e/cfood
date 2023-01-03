<template>
    <ClientOnly>
        <pre>
            {{ cart }}
        </pre>
    </ClientOnly>
</template>

<script setup>
    import { useProductsStore } from '~/store/products'

    const { product } = defineProps(['product'])

    const store = useProductsStore()
    const cart = store.cart


</script>