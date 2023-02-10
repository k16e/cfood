<template>
    <nav class="flex relative p-3">
        <h2 v-text="'Mobile navigation'" class="sr-only"/>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-1 h-full w-full">
            <NavList mobile :list="routes"/>
        </ul>
    </nav>
</template>

<script setup>
const routes = useRouteList()
</script>