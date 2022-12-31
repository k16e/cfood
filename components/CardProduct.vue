<template>
    <div class="r-card bg-white border border-gray-100 shadow-sm rounded-xl">
        <div>
            <img :src="product.image" :alt="product.name" class="r-thumb w-full">
        </div>
        <div class="p-3 sm:p-5 border-t border-gray-100">
            <div>
                <span v-text="product.sku" class="uppercase block text-xs font-medium tracking-wider text-gray-600"/>
                <h2 v-text="product.name" class="text-lg font-medium"/>
            </div>
            <div class="pt-2 sm:pt-3 flex items-center justify-between">
                <p
                    v-text="$formatPrice(product.price)"
                    class="font-medium text-gray-800 text-xl"
                />
                <button class="flex items-center p-2 rounded-full bg-orange-600 text-white">
                    <Icon name="ri:shopping-cart-fill" size="18"/>
                    <span v-text="'Add to cart'" class="sr-only"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>