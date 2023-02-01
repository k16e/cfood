<template>
    <nav class="flex relative z-10 p-3">
        <h2 v-text="'Mobile navigation'" class="sr-only"/>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-1 h-full w-full">
            <NavList mobile :list="routes"/>
        </ul>
    </nav>
</template>

<script setup>
const { data: routes, pending, error, refresh } = await $fetch(`/api/routes`)
</script>