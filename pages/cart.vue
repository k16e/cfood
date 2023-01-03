<template>
    <div>
        <pre>
            {{ cart }}
        </pre>
    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/products'

    const store = useProductsStore()
    const cart = computed(() => store.cart)


</script>