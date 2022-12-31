<template>
    <div class="r-card bg-white border border-gray-100 shadow-sm rounded-xl">
        <div>
            <img :src="product.image" :alt="product.name" class="r-thumb">
        </div>
        <div class="p-3 sm:p-5 border-t border-gray-100">
            <div>
                <span v-text="product.sku" class="uppercase block text-xs font-medium tracking-wider text-gray-600"/>
                <h2 v-text="product.name" class="text-xl"/>
            </div>
            <div class="pt-2 sm:pt-3">
                <p
                    v-text="$formatPrice(product.price)"
                    class="font-bold text-gray-800"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>