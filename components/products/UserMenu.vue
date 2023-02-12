<template>
    <button
        @click="$closeMobileNavIfOpen()"
        class="luna-btn _is-padless _is-borderless"
        aria-label="Access to your account">
        <Icon name="ri:user-smile-fill" size="32" class="text-orange-700"/>
    </button>
</template>

<script setup>
const { wishlist } = useProductsStore()
</script>