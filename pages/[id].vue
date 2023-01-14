<template>
    <WrapperReveal>
        <Container center padX>
            <pre>
                {{ story }}
            </pre>
        </Container>
    </WrapperReveal>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const story = await useAsyncStoryblok(`pages${route.path}`, { version: 'draft' })
</script>