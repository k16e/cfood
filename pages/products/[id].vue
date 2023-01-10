<template>
    <WrapperReveal>
        <Container center padX>
            <ProductsOverview :product="product[0]"/>
        </Container>
    </WrapperReveal>
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