<template>
    <WrapperReveal>
        <Container center padX padTGrow>
            <div v-if="pending">Loading...</div>
            <div v-else>
                <pre>
                    {{ story }}
                </pre>
            </div>
        </Container>
    </WrapperReveal>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const path = computed(() => route.path)
// const router = useRouter()

const { pending, data: story } = useLazyAsyncData(async () => {
    try {
        const response = await useStoryblok(`pages${path.value}`, {
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
    } catch (err) { console.log('Error:', err) }
})
</script>