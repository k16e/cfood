<template>
    <Reveal>
        <Container padX center padTGrow>
            <PageHeader
                tag="h1" content="Thanks, a load!"
                link="/products" linkIcon="ic:baseline-arrow-back"
                linkText="Buy more"
            />
            <ClientOnly>
                <div v-if="productsStore.latestOrder.length >= 1">
                    <pre>
                        {{ productsStore.latestOrder }}
                    </pre>
                </div>
            </ClientOnly>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
console.log(productsStore.latestOrder)
</script>