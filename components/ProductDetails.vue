<template>
    <div>
        <img :src="product.image" :alt="product.title" class="r-thumb"/>
        <div>
            <h1 v-text="product.title"/>
            <div>
                <p>Price - ${{ product.price }}</p>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>