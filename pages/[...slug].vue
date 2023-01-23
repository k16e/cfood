<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
</template>

<script setup>
const config = useRuntimeConfig()
const url = () => {
    const
        { path } = useRoute(),
        pathArray = String(path).split('/')
    if (path === '/') return 'home'
    else if (pathArray.length > 2) return path
    return `pages${path}`
}

const story = await useAsyncStoryblok(url(), {
    version: config.storyblokVersion,
    resolve_links: 'url'
})

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>