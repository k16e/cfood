<template>
    <Transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0">
        <div
            @click.self="app.removeOverlay"
            v-show="app.overlay"
            class="fixed inset-0 bg-gray-800 bg-opacity-80 ease duration-500 transition-opacity">
            <slot/>
        </div>
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>