<template>
    <NuxtLoadingIndicator :color="`#ea580c`"/>
    <NuxtLayout>
        <div
            class="flex flex-col min-h-screen">
            <header class="p-3 fixed inset-x-0 top-0 h-16 z-30">
                <SiteHeader/>
                <Wave
                    class="fixed z-[-1]"
                    :fill="'#fff'"
                    :max-height="'max-h-[80px]'"
                />
            </header>
            <main class="py-24 flex-1 transition-all duration-300">
                <NuxtPage/>
            </main>
            <footer
                class="relative pt-16 lg:pt-24 pb-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white flex flex-col items-center">
                <Wave top="top-[-56px]" :stroke="false"/>
                <SiteFooter/>
            </footer>
        </div>
    </NuxtLayout>
    <BackToTop class="fixed bottom-9 right-7 sm:right-9 z-20"/>
    <Overlay>
        <Sheet v-show="app.sheet"/>
    </Overlay>
</template>

<script setup>
const app = useAppStore()

const backToTop = () => {
    if (!process.client) return
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 480) app.showBackToTop = true
        else app.showBackToTop = false
    }, false)
}

backToTop()
</script>