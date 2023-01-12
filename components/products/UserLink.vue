<template>
    <button
        class="luna-btn _is-padless border-none relative">
        <Icon name="ri:user-smile-fill" size="32" class="text-red-600"/>
        <span class="flex items-center p-1.5">
            <span v-text="`Hey, me!`" class="sr-only lg:not-sr-only"/>
            <Icon name="ic:baseline-arrow-drop-down" size="22" class="text-red-600 -mr-1.5"/>
        </span>
    </button>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const wishlist = store.wishlist
</script>