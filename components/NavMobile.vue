<template>
    <nav class="flex">
        <h2 v-text="'Mobile navigation'" class="sr-only"/>
        <ul class="grid grid-cols-2 md:grid-cols-3 h-full w-full gap-3 sm:gap-5">
            <NavList mobile :list="routes"/>
        </ul>
    </nav>
</template>

<script setup>
const { data: routes, pending, error, refresh } = await $fetch(`/api/routes`)
</script>