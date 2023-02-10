<template>
    <Reveal class="pb-24 sm:pb-28">
        <ProductsSingle :product="product[0]"/>
    </Reveal>
    <SiteFooter/>
</template>

<script setup>
const { id } = useRoute().params
const sku = String(id).split('-')[2]
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