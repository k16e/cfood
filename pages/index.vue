<template>
    <pre>
        {{ products }}
    </pre>
</template>

<script setup>
const
    client = useSupabaseClient(),
    { data: products } = await useAsyncData('products',
        async () => {
            const { data } = await client
                .from('products')
                .select('*')
            return data
        }
    )

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