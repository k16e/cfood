<template>
    <div class="flex flex-col min-h-screen">
        <header class="p-3 fixed inset-x-0 top-0 h-16 bg-white border-b border-gray-200 z-30">
            <HeaderMain/>
        </header>
        <main class="mt-16 flex-1 py-9">
            <slot/>
        </main>

        <footer class="py-1.5">
            <FooterMain/>
        </footer>
    </div>
</template>

<script setup>

</script>