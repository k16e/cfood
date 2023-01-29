<template>
    <Transition name="slide-up">
        <button
            v-if="app.showBackToTop"
            @click="scrollToTop"
            class="luna-btn _is-primary _is-square _is-wider _is-raised">
            <Icon name="material-symbols:arrow-upward-rounded" size="25"/>
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
