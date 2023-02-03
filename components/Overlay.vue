<template>
    <Transition name="fade-in">
        <div
            @click.self="app.removeOverlay"
            v-if="app.overlay"
            class="fixed inset-0 bg-black bg-opacity-70 z-10"
        />
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>