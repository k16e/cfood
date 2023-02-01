<template>
    <Transition name="fade-in">
        <div
            @click.self="app.removeOverlay"
            v-if="app.overlay"
            class="fixed inset-0 bg-black bg-opacity-70 ease duration-300 transition-opacity"
        />
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>