<template>
    <NuxtLoadingIndicator :color="`#ea580c`"/>
    <NuxtLayout>
        <div class="flex flex-col min-h-screen">
            <header class="p-3 fixed inset-x-0 top-0 h-16 z-30">
                <SiteHeader/>
                <Wave
                    class="fixed z-[-1] top-0"
                    :fill="'#fff'"
                    :max-height="'max-h-[88px]'"
                />
            </header>
            <main class="py-24 flex-1">
                <NuxtPage/>
            </main>
            <footer
                class="relative pt-16 lg:pt-24 pb-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white flex flex-col items-center">
                <Wave
                    class="z-[1] top-[-56px] scale-x-[1]" :stroke="false"
                />
                <SiteFooter class="relative z-[2]"/>
            </footer>
        </div>
    </NuxtLayout>
</template>

<script setup>

</script>