<template>
    <Transition name="slide-up">
        <button
            v-show="app.showBackToTop"
            @click="scrollToTop"
            class="luna-btn _is-borderless _is-square _is-wider _is-raised transition-all duration-300 ease-[var(--bezier)] fixed bottom-8 translate-y-[var(--back-to-top-translate)] right-7 sm:right-9 z-20"
            id="back-to-top">
            <Icon name="material-symbols:arrow-upward-rounded" size="30" class="text-orange-700"/>
        </button>
    </Transition>
</template>

<script setup>
import { useEventListener } from '@vueuse/core'

const app = useAppStore()
const { backToTop } = useBackToTop()
const scrollToTop = () => scrollTo(0, 0)

onMounted(() => {
    useEventListener(document, 'scroll', () => {
        backToTop(app)
    })
})
</script>
