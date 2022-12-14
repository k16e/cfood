<template>
    <div>
        <h1 v-text="product.title"/>
        <img :src="product.image" :alt="product.title" class="r-thumb"/>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>