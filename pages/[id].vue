<template>
    <WrapperReveal>
        <Container center padX padTGrow>
            <pre>
                {{ story }}
            </pre>
        </Container>
    </WrapperReveal>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const story = await useStoryblok(`pages${route.path}`, {
    version: config.storyblokVersion,
    resolve_links: 'story'
})
// let story = ref(null)
// try {
//     story = await useAsyncStoryblok(`pages${route.path}`, {
//         version: config.storyblokVersion,
//         resolve_links: 'story'
//     })
// } catch (error) {
//     console.log(error)
//     throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }
</script>