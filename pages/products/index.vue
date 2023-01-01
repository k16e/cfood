<template>
    <div>
        <!-- <ul class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
            <li v-for="product in products" :key="product.uuid" class="flex">
                <CardProduct :product="product"/>
            </li>
        </ul> -->
    </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
// const
//     supabase = useSupabaseClient(),
//     { data: products, error } = await useAsyncData('products',
//         async () => {
//             const { data } = await supabase
//                 .from('products')
//                 .select('*')
//                 .order('id')
//             return data
//         }
//     )

const products = useProductsStore()
console.log(products)

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>

<style lang="scss" scoped>

</style>