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
const story = await useAsyncStoryblok(`pages${route.path}`, {
    version: config.storyblokVersion,
    resolve_links: 'story'
})
console.log(route)
</script>