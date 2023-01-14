<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
    <ProductsPromo/>
</template>

<script setup>
const config = useRuntimeConfig()
const story = await useAsyncStoryblok('pages', { version: config.STORYBLOK_VERSION })

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>