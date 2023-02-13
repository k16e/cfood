<template>
    <div class="flex flex-col justify-between min-h-screen">
        <Container center padX max-width="max-w-xl" class="flex-1 flex flex-col items-center justify-center text-center relative z-10">
            <Heading tag="h1" font="font-sans" weight="font-bold" class="!text-9xl">
                {{ error.statusCode }}!
            </Heading>
            <p class="sm:text-lg">
                Hmmm... there's an error somewhere. Please check and refresh or use the button below
            </p>
            <div class="mt-12">
                <button
                    @click="handleError"
                    class="luna-btn _is-primary _is-taller">
                    <Icon name="material-symbols:home-outline-rounded" size="22"/>
                    <span v-text="'Back to home'" class="ml-1.5"/>
                </button>
            </div>
        </Container>
        <SiteFooter/>
    </div>
</template>

<script setup>
const props = defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })
</script>