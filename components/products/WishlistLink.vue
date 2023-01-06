<template>
    <NuxtLink
        to="/shop/wishlist"
        class="luna-btn _is-neutral luna-turn-off-active">
        <Icon name="ri:heart-2-fill" size="20" class="text-red-600"/>
        <span v-text="`Wishlist`" class="sr-only sm:not-sr-only sm:ml-1.5"/>
    </NuxtLink>
</template>