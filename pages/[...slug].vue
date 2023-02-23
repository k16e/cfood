<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
</template>

<script setup>
const route = useRoute()
const path = route.path === '/' ? 'home' : route.path.substring(1)
const config = useRuntimeConfig()

const story = await useAsyncStoryblok(path, {
    version: config.storyblokVersion,
    resolve_links: 'story'
})

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [{ name: 'description', content: 'All condiments and foodstuff from c.food' }]
})
</script>