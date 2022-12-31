<template>
    <div>
        <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
            <li v-for="product in products" :key="product.uuid">
                <NuxtLink :to="`/products/${$slugify(product.name)}-${product.sku}`">
                    <CardProduct :product="product" />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const
    supabase = useSupabaseClient(),
    { data: products, error } = await useAsyncData('products',
        async () => {
            const { data } = await supabase
                .from('products')
                .select('*')
            return data
        }
    )

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>

<style lang="scss" scoped>

</style>