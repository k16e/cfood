<template>
    <Reveal class="pb-24 sm:pb-28">
        <Container padX center padTGrow>
            <PageHeader
                tag="h1" content="Welcome!"
                link="/customer/orders" linkIcon=""
                linkText="Your orders"
            />
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
</script>