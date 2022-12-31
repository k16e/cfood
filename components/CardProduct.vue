<template>
    <div class="r-card bg-white border border-gray-100 shadow-sm rounded-xl relative">
        <NuxtLink :to="`/products/${$slugify(product.name)}-${product.sku}`">
            <div>
                <img :src="product.image" :alt="product.name" class="r-thumb w-full">
            </div>
            <div class="p-3 border-t border-gray-100">
                <div class="pr-6 sm:pr-10">
                    <span v-text="product.sku" class="uppercase block text-xs font-medium tracking-wider text-gray-600"/>
                    <h2 v-text="product.name" class="leading-tight text-lg truncate"/>
                </div>
                <div class="pt-2 sm:pt-3 flex items-center justify-between">
                    <p
                        v-text="$formatPrice(product.price)"
                        class="font-medium text-gray-800 text-xl"
                    />
                </div>
            </div>
        </NuxtLink>
        <button class="flex items-center p-2 rounded-full bg-orange-600 text-white absolute bottom-3 right-3 z-10">
            <Icon name="ri:shopping-cart-fill" size="16"/>
            <span v-text="'Add to cart'" class="sr-only"/>
        </button>
        <button class="flex items-center p-2 rounded-full bg-green-500 text-white absolute top-3 right-3 z-10">
            <Icon name="ri:heart-2-fill" size="16"/>
            <span v-text="'Add to wishlist'" class="sr-only"/>
        </button>
    </div>
</template>

<script setup>
    const { product } = defineProps([ 'product' ])
</script>

<style lang="scss" scoped>

</style>