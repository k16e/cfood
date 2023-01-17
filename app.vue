<template>
    <NuxtLoadingIndicator :color="`#ea580c`"/>
    <NuxtLayout>
        <div class="flex flex-col min-h-screen">
            <header class="p-3 fixed inset-x-0 top-0 h-16 z-30">
                <HeaderMain/>
                <Wave class="fixed z-[-1] max-h-[92.5px] top-0 inset-x-0 scale-x-[-1]"/>
            </header>
            <main class="mt-24 flex-1">
                <NuxtPage/>
            </main>
            <footer class="py-1.5">
                <FooterMain/>
            </footer>
        </div>
    </NuxtLayout>
</template>

<script setup>

</script>