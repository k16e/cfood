<template>
    <Reveal>
        <Section>
            <div class="overflow-hidden pt-32 md:pt-16 z-[1] relative">
                <Wave :stroke="false" :bottom="'revert'" class="z-[1]"/>
                <Wave
                    :stroke="false"
                    :top="'revert'"
                    flip
                    :maxHeight="'max-h-[104px]'"
                    class="z-[3]"
                />
                <div class="bg-gradient-to-r from-orange-600 to-orange-800">
                    <Container center padX>
                        <div class="relative min-h-[528px] md:min-h-[680px] flex items-center">
                            <div class="text-center flex flex-col items-center w-full md:text-left md:block md:-translate-y-7">
                                <Heading
                                    tag="h2"
                                    font="font-sans"
                                    color="text-white"
                                    weight="font-bold"
                                    class="luna-block-heading">
                                    <span v-text="blok.heading[0].line_1" class="block"/>
                                    <span v-text="blok.heading[0].line_2" class="block"/>
                                </Heading>
                                <div v-if="!$isEmpty(blok.link) || blok.link[0].cached_url" class="mt-9 lg:mt-12">
                                    <NuxtLink
                                        :to="blok.link[0].link.cached_url" class="luna-btn _is-taller _is-raised border-none text-gray-600 text-lg">
                                        <Icon name="ic:baseline-shopping-basket" size="24" class="mr-1.5 text-orange-700"/>
                                        <span v-text="blok.link[0].title"/>
                                    </NuxtLink>
                                </div>
                            </div>

                            <div class="absolute -top-24 left-[50%] -translate-x-[50%] md:top-7 md:translate-x-0 z-[2] lg:translate-y-1.5">
                                <div class="ml-9 flex min-w-max space-x-5 md:ml-3 lg:space-x-7">
                                    <div class="flex space-x-5 md:flex-col md:space-x-0 md:space-y-5 lg:space-y-7">
                                        <NuxtImg
                                            :src="blok.tiles[3].file.filename"
                                            :alt="blok.tiles[3].file.alt"
                                            preset="small"
                                        />
                                        <NuxtImg
                                            :src="blok.tiles[4].file.filename"
                                            :alt="blok.tiles[4].file.alt"
                                            preset="small"
                                        />
                                    </div>
                                    <div class="flex space-x-5 md:-mt-20 md:flex-col md:space-x-0 md:space-y-5 lg:space-y-7">
                                        <NuxtImg
                                            :src="blok.tiles[5].file.filename"
                                            :alt="blok.tiles[5].file.alt"
                                            preset="small"
                                        />
                                        <NuxtImg
                                            :src="blok.tiles[2].file.filename"
                                            :alt="blok.tiles[2].file.alt"
                                            preset="small"
                                        />
                                        <NuxtImg
                                            :src="blok.tiles[5].file.filename"
                                            :alt="blok.tiles[5].file.alt"
                                            preset="small"
                                            class="hidden md:block"
                                        />
                                    </div>
                                    <div class="flex space-x-5 md:flex-col md:space-x-0 md:space-y-5 lg:space-y-7">
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
        </Section>
    </Reveal>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
img { @apply h-48 w-48 rounded-2xl object-cover md:h-64 md:w-64 flex-shrink-0; }
img + img { @apply mt-7 md:mt-0; }
</style>