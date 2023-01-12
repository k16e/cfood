<template>
    <button
        class="luna-btn luna-turn-off-active relative">
        <Icon name="ri:user-smile-fill" size="24" class="text-red-600"/>
        <span class="sr-only lg:not-sr-only lg:ml-1.5 flex items-center">
            <span v-text="`Hey, me!`"/>
            <Icon name="ic:baseline-arrow-drop-down" size="20" class="text-red-600 -mr-1.5"/>
        </span>
    </button>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const wishlist = store.wishlist
</script>