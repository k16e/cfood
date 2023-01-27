<template>
    <div v-if="!story" class="fixed top-28 left-1/2 -translate-x-1/2">
        <Reveal>
            <svg class="h-8 w-8 text-orange-700 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </Reveal>
    </div>
    <StoryblokComponent v-else :blok="story.content"/>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const path = route.path === '/' ? 'home' : route.path
let story = ref(null)

const storyblok = async () => {
    try {
        const response = await useStoryblok(path, {
            version: config.storyblokVersion,
            resolve_links: 'story'
        })
        if(!response) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Page Not Found',
                fatal: true
            })
        }
        return response
    } catch (e) { console.log('Storyblok error: ', e) }
}
story = await storyblok()

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>