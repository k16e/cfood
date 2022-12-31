<template>
    <div>
        <ProductDetails :product="product[0]"/>
    </div>
</template>

<script setup>
const
    { id } = useRoute().params,
    sku = id.substr(-8),
    supabase = useSupabaseClient(),
    { data: product, error } = await useAsyncData('products',
        async () => {
            const { data } = await supabase
                .from('products')
                .select('*')
                .match({ sku })
            return data
        }
    )
</script>