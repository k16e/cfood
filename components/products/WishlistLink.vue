<template>
    <NuxtLink
        to="/shop/wishlist"
        class="luna-btn _is-neutral luna-turn-off-active relative">
        <Icon name="ri:heart-2-fill" size="20" class="text-red-600"/>
        <span v-text="`Wishlist`" class="sr-only sm:not-sr-only sm:ml-1.5"/>
        <ClientOnly>
            <span v-if="wishlist.length" class="flex h-2 w-2 absolute top-1 right-1">
                <span class="animate-ping duration-300 absolute flex h-full w-full rounded-full bg-red-400 opacity-75"/>
                <span class="relative flex rounded-full h-2 w-2 bg-red-500"/>
            </span>
        </ClientOnly>
    </NuxtLink>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const wishlist = store.wishlist
</script>