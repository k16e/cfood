<template>
    <div class="r-card text-center bg-white border border-gray-100 shadow-sm rounded-xl">
        <img :src="product.image" :alt="product.name" class="r-thumb">
        <div class="flex justify-between p-3 sm:p-5">
            <h2 v-text="product.name" class="truncate"/>
            <p v-text="product.price"/>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>