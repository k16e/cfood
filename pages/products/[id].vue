<template>
    <WrapperReveal>
        <ProductsOverview :product="product[0]"/>
    </WrapperReveal>
</template>

<script setup>
let { path } = useRoute()
console.log(path.split('/')[1])
const { id } = useRoute().params
const sku = id.split('-')[2]
const supabase = useSupabaseClient()
const { data: product, error } = await useAsyncData('products',
    async () => {
        const { data } = await supabase
            .from('products')
            .select('*')
            .match({ sku })
        return data
    }
)
</script>