<template>
    <NuxtLoadingIndicator :color="`#ea580c`"/>
    <NuxtLayout>
        <div class="flex flex-col min-h-screen">
            <header class="p-3 fixed inset-x-0 top-0 h-16 z-30">
                <HeaderMain/>
                <Wave class="fixed z-[-1] max-h-[93px] top-0"/>
            </header>
            <main class="mt-24 flex-1">
                <NuxtPage/>
            </main>
            <footer
                class="relative pt-16 lg:pt-24 pb-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white flex flex-col items-center">
                <Wave
                    class="absolute z-[1] max-h-[96px] top-[-56px] scale-x-[1]"
                    :stroke="false"
                    :fill="'#f2f2f2'"
                />
                <FooterMain class="relative z-[2]"/>
            </footer>
        </div>
    </NuxtLayout>
</template>

<script setup>

</script>