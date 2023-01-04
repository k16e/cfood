<template>
    <Container padX center>
        <div class="p-3 sm:p-5 pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12">
            <h1 class="font-light text-orange-700 text-3xl sm:text-5xl lg:text-5xl truncate">
                Welcome to c.food!
            </h1>
            <p>
                Eat food
            </p>
        </div>
        <NuxtLink :to="`/products`">
            Go to products
        </NuxtLink>
    </Container>
</template>

<script setup>
useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>