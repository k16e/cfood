<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
</template>

<script setup>
const { slug } = useRoute().params
const config = useRuntimeConfig()
const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? `pages/${slug[0]}` : 'pages',
    {
        version: config.storyblokVersion,
        resolve_links: 'url'
    }
)

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>