<template>
    <NuxtLink
        to="/shop/wishlist"
        @click="$closeMobileNavIfOpen()"
        class="luna-btn _is-neutral _is-borderless luna-turn-off-active relative">
        <Icon name="ri:heart-2-fill" size="22" class="!text-red-600"/>
        <span v-text="`Wishlist`" class="sr-only lg:not-sr-only lg:ml-1.5"/>
        <ClientOnly>
            <span v-if="productsStore.wishlist.length" class="flex h-2 w-2 absolute top-1 right-1">
                <span class="animate-ping-slow absolute flex h-full w-full rounded-full bg-red-400 opacity-75"/>
                <span class="relative flex rounded-full h-2 w-2 bg-red-500"/>
            </span>
        </ClientOnly>
    </NuxtLink>
</template>

<script setup>
const productsStore = useProductsStore()
</script>