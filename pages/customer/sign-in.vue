<template>
    <Reveal class="pb-24 sm:pb-28">
        <UserSignIn/>
    </Reveal>
    <SiteFooter/>
</template>

<script setup>
definePageMeta({
    middleware: 'auth-signed-in'
})
</script>