<template>
    <Container center padX>
        <ProductsDetails :product="product[0]"/>
    </Container>
</template>

<script setup>
const { id } = useRoute().params
const sku = id.substr(-8)
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