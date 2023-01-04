<template>
    <Container padX center>
        <div class="pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12">
            <div class="pb-5 sm:pb-7">
                <h1 class="font-light text-orange-700 text-3xl sm:text-5xl lg:text-5xl truncate">
                    Welcome to c.food!
                </h1>
            </div>
            <div class="prose prose-xl lg:prose-2xl leading-normal lg:leading-snug italic max-w-screen-lg">
                <p>
                    This year, make it a goal to eat food that expires, even quickly, that you can pronounce, that your grandmother wouldn't pass up.
                </p>
                <p>
                    <NuxtLink to="/studio">At c.food</NuxtLink>, we're proud to be making such foods. Thanks to the modern invention of the refrigerator, most of them do keep up to a week. Some even longer! But all of them preservatives and funny-sounding chemicals free! Only fresh, refrigerated goodnesses.
                </p>
            </div>
        </div>
        <NuxtLink to="/products" class="luna-btn text-gray-600 font-medium">
            <Icon name="ic:baseline-shopping-basket" size="22" class="mr-1.5 text-orange-700"/>
            <span>Shop our products</span>
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