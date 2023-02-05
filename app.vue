<template>
    <NuxtLoadingIndicator :color="`#ea580c`"/>
    <NuxtLayout>
        <div
            ref="rootElRef"
            class="flex flex-col min-h-screen">
            <header class="p-3 fixed inset-x-0 top-0 h-16 z-30">
                <SiteHeader/>
                <Wave class="fixed z-[-1]" :fill="'#fff'" :max-height="'max-h-[80px]'"/>
            </header>
            <main class="py-24 sm:py-28 flex-1 transition-all duration-300">
                <NuxtPage/>
            </main>
            <footer
                ref="footerRef"
                id="footer"
                class="relative pt-16 lg:pt-24 pb-3 bg-gradient-to-r from-orange-600 to-orange-800 flex flex-col items-center"
                :data-visible="isVisible">
                <Wave top="top-[-64px]" :stroke="false"/>
                <SiteFooter/>
            </footer>
        </div>
    </NuxtLayout>

    <BackToTop/>
    <Overlay/>
    <Sheet/>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'

const app = useAppStore()
const footerRef = ref(null)
const isVisible = ref(false)

const { backToTop } = useBackToTop()

onMounted(() => {
    const scrollEvents = () => {
        window.addEventListener('scroll', () => {
            backToTop(app)
        }, false)
    }

    scrollEvents()

    useIntersectionObserver(footerRef,
        ([{ isIntersecting }]) => { isVisible.value = isIntersecting }
    )
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollEvents())
})

useHead({
    htmlAttrs: {
        style: () => app.overlay && 'overflow-y: hidden'
    }
})
</script>