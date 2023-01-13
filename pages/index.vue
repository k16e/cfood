<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
    <ProductsPromo/>
</template>

<script setup>
const story = await useStoryblok('pages', { version: 'draft' })
useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>