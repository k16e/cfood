<template>
    <header class="">
        <NuxtLink to="/">
            Home
        </NuxtLink>
        <NuxtLink to="/order">
            Order
        </NuxtLink>
        <NuxtLink to="/order/abc">
            Product ABC
        </NuxtLink>
    </header>

    <main>
        <slot/>
    </main>

    <footer>
        Footer Here
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>