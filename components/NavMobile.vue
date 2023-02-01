<template>
    <nav class="flex">
        <h2 v-text="'Mobile navigation'" class="sr-only"/>
        <ul class="flex items-center h-full w-full space-x-3">
            <NavList :list="routes" mobile/>
        </ul>
    </nav>
</template>

<script setup>
const { data: routes, pending, error, refresh } = await $fetch(`/api/routes`)
</script>