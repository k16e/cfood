<template>
    <WrapperReveal>
        <WrapperSection>
            <div class="overflow-hidden pt-32 sm:pt-16 z-[1] relative">
                <div class="bg-gradient-to-r from-orange-500 to-orange-800">
                    <Container center padX>
                        <div class="relative min-h-[424px] lg:min-h-[480px] flex items-center pt-32 sm:pt-0">
                            <div class="text-center flex flex-col items-center w-full sm:text-left sm:block">
                                <Heading tag="h2" font="font-sans" color="text-white" weight="font-bold"
                                    class="text-4xl md:text-5xl lg:text-6xl !leading-none">
                                    <span v-text="blok.heading[0].line_1" class="block"/>
                                    <span v-text="blok.heading[0].line_2" class="block"/>
                                </Heading>
                                <div v-if="!$isEmpty(blok.link) || blok.link[0].cached_url" class="mt-9 lg:mt-12">
                                    <NuxtLink
                                        :to="blok.link[0].link.cached_url" class="luna-btn border-none text-gray-600 font-medium">
                                        <Icon name="ic:baseline-shopping-basket" size="22" class="mr-1.5 text-orange-700"/>
                                        <span v-text="blok.link[0].title"/>
                                    </NuxtLink>
                                </div>
                            </div>

                            <div class="absolute -top-24 left-1/2 -translate-x-1/2 transform sm:top-7 sm:translate-x-0">
                                <div class="ml-24 flex min-w-max space-x-5 sm:ml-3 lg:space-x-7">
                                    <div class="flex space-x-5 sm:flex-col sm:space-x-0 sm:space-y-5 lg:space-y-7">
                                        <NuxtImg
                                            :src="blok.tiles[5].file.filename"
                                            :alt="blok.tiles[5].file.alt"
                                            preset="small"
                                        />
                                        <NuxtImg
                                            :src="blok.tiles[4].file.filename"
                                            :alt="blok.tiles[4].file.alt"
                                            preset="small"
                                        />
                                    </div>
                                    <div class="flex space-x-5 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-5 lg:space-y-7">
                                        <NuxtImg
                                            :src="blok.tiles[3].file.filename"
                                            :alt="blok.tiles[3].file.alt"
                                            preset="small"
                                        />
                                        <NuxtImg
                                            :src="blok.tiles[2].file.filename"
                                            :alt="blok.tiles[2].file.alt"
                                            preset="small"
                                        />
                                    </div>
                                    <div class="flex space-x-5 sm:flex-col sm:space-x-0 sm:space-y-5 lg:space-y-7">
                                        <NuxtImg
                                            :src="blok.tiles[1].file.filename"
                                            :alt="blok.tiles[1].file.alt"
                                            preset="small"
                                        />
                                        <NuxtImg
                                            :src="blok.tiles[0].file.filename"
                                            :alt="blok.tiles[0].file.alt"
                                            preset="small"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </WrapperSection>
    </WrapperReveal>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
    img { @apply h-48 w-48 rounded-2xl object-cover md:h-72 md:w-72 flex-shrink-0; }
    img + img { @apply mt-7 md:mt-0; }
</style>