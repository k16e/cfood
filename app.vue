<template>
    <NuxtLoadingIndicator :color="`#ea580c`"/>
    <NuxtLayout>
        <header class="p-3 fixed inset-x-0 top-0 h-16 z-30">
            <SiteHeader/>
            <Wave class="fixed z-[-1]" :fill="'#fff'" :max-height="'max-h-[80px]'"/>
        </header>
        <main class="pt-24 sm:pt-28 flex flex-col min-h-screen overflow-y-clip transition-all duration-300">
            <NuxtPage/>
        </main>
    </NuxtLayout>

    <BackToTop/>
    <Overlay/>
    <Sheet/>
</template>

<script setup>
const app = useAppStore()

useHead({
    htmlAttrs: {
        style: () => app.overlay && 'overflow-y: hidden',
        lang: 'en'
    }
})
</script>