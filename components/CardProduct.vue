<template>
    <div class="r-card text-center">
        <img :src="product.image" :alt="product.title" class="r-thumb">
        <h2 v-text="product.title" class="truncate"/>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>