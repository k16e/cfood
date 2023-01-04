<template>
    <div>
        <pre>
            {{ wishlist }}
        </pre>
    </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

const store = useProductsStore()
const wishlist = store.wishlist
</script>