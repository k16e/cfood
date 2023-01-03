<template>
    <div>
        <img :src="product.image" :alt="product.name" class=""/>
        <div>
            <h1 v-text="product.name"/>
            <div>
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