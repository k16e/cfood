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
            <main class="py-24 flex-1 transition-all duration-300">
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

    <BackToTop id="back-to-top" class="fixed bottom-8 translate-y-[var(--back-to-top-translate)] right-7 sm:right-9 z-20"/>
    <Overlay/>
    <Sheet/>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'

const app = useAppStore()
const footerRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(footerRef,
    ([{ isIntersecting }]) => { isVisible.value = isIntersecting }
)

const backToTop = () => {
    const footer = document.getElementById('footer')
    const footerHeight = Math.ceil(footer.getBoundingClientRect().height)
    const root = document.documentElement
    const footerVisible = footer.getAttribute('data-visible')
    let divisor

    if (window.pageYOffset > 640) {
        app.showBackToTop = true
        const backToTop = document.getElementById('back-to-top')
        const bttHeigt = backToTop?.getBoundingClientRect()?.height || 56
        divisor = Math.round(bttHeigt)
    }
    else app.showBackToTop = false

    if (footerVisible === 'true') {
        root.style.setProperty('--back-to-top-translate', ((footerHeight * -1) + divisor) + 'px')
    }
    else root.style.setProperty('--back-to-top-translate', 0)
}

onMounted(() => {
    const scrollEvents = () => {
        window.addEventListener('scroll', () => {
            backToTop()
        }, false)
    }

    scrollEvents()
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