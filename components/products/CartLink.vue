<template>
    <NuxtLink
        to="/shop/cart"
        class="luna-btn luna-turn-off-active">
        <Icon name="ri:shopping-cart-fill" size="22" class="mr-1.5 text-orange-700"/>
        <span class="flex items-center">
            <span v-text="`Cart`" class="hidden lg:block mr-1"/>
            <sup v-text="`(${cartLength})`" class="font-medium text-orange-700"/>
        </span>
    </NuxtLink>
</template>

<script setup>
const productStore = useProductsStore()
const cartLength = computed(() => productStore.cart.length)
</script>