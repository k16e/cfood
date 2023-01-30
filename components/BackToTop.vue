<template>
    <Transition name="slide-up">
        <button
            v-show="app.showBackToTop"
            @click="scrollToTop"
            class="luna-btn _is-borderless _is-square _is-wider _is-raised transition-all duration-300 ease-[var(--bezier)]">
            <Icon name="material-symbols:arrow-upward-rounded" size="30" class="text-orange-700"/>
        </button>
    </Transition>
</template>

<script setup>
const app = useAppStore()

const scrollToTop = () => {
    if (!process.client) return
    window.scrollTo(0, 0)
}
</script>
