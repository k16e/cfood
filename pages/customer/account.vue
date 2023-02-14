<template>
    <UserWelcome/>
    <SiteFooter/>
</template>

<script setup>
definePageMeta({
    middleware: 'auth-signed-out'
})
</script>