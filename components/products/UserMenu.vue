<template>
    <button
        class="luna-btn _is-padless border-none relative">
        <Icon name="ri:user-smile-fill" size="32"/>
        <span class="flex items-center">
            <span v-text="`Hey, me!`" class="hidden lg:block ml-1"/>
            <Icon name="ic:baseline-arrow-drop-down" size="22" class="-mr-1.5"/>
        </span>
    </button>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const wishlist = store.wishlist
</script>