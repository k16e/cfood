<template>
    <Container padX center>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-12 sm:gap-14 pt-7 lg:pt-12">
            <div class="lg:col-span-2 order-2 md:order-1">
                <div class="pb-5 sm:pb-7">
                    <Heading tag="h1" content="Welcome to c.food!"/>
                </div>
                <div class="prose prose-xl lg:prose-2xl leading-normal lg:leading-snug italic max-w-none">
                    <p>
                        This year, make it a goal to eat food that expires, even quickly, that you can pronounce, that your grandmother wouldn't pass up.
                    </p>
                    <p>
                        <NuxtLink to="/studio">At c.food</NuxtLink>, we're proud to be making such foods. Thanks to the modern invention of the refrigerator, most of them do keep up to a week. Some even longer! But all of them preservatives and funny-sounding chemicals free! Only fresh, refrigerated goodnesses.
                    </p>
                </div>
            <div class="pt-7 sm:pt-9">
                <NuxtLink to="/products" class="luna-btn text-gray-600 font-medium">
                    <Icon name="ic:baseline-shopping-basket" size="22" class="mr-1.5 text-orange-700"/>
                    <span>Shop our products</span>
                </NuxtLink>
            </div>
            </div>
            <figure class="md:order-2">
                <img src="/logo.png" alt="">
            </figure>
        </div>
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