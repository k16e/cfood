<template>
    <NuxtLink
        :to="user ? '/customer/account' : '/customer/sign-in'"
        @click="$closeMobileNavIfOpen()"
        class="luna-btn _is-padless _is-borderless"
        aria-label="Access to your account">
        <Icon name="ri:user-smile-fill" size="36" class="text-orange-700"/>
    </NuxtLink>
</template>

<script setup>
const user = useSupabaseUser()
</script>