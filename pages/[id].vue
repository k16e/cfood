<template>
    <StoryblokComponent v-if="story" :blok="story.content"/>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const path = computed(() => route.path)

const story = await useStoryblok(`pages${path.value}`, {
    version: config.storyblokVersion,
    resolve_links: 'story'
})
</script>