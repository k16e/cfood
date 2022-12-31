<template>
    <div>
        <NuxtLink :to="`/products`">
            Go to products
        </NuxtLink>
    </div>
</template>

<script setup>
useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>

<style lang="scss" scoped>

</style>