<template>
    <ProductDetails :product="product"/>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = `https://fakestoreapi.com/products/${id}`

    const { data: product } = await useFetch(uri, { key: id })
    if (!product.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Product not found',
            fatal: true // Forces app to show error page, useful when error is coming from browser
        })
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style lang="scss" scoped>

</style>