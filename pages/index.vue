<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
</template>

<script setup>
const config = useRuntimeConfig()
const story = await useStoryblok(`pages`, {
    version: config.storyblokVersion,
    resolve_links: 'url'
})

// const { data: useOs } = await useFetch('/api/builtin')

// console.log(useOs)

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>