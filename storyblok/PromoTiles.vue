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

                            <div class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="flex-shrink-0">
                                            <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                                        </div>

                                        <div class="mt-6 flex-shrink-0 sm:mt-0">
                                            <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="flex-shrink-0">
                                            <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg" alt="" />
                                        </div>

                                        <div class="mt-6 flex-shrink-0 sm:mt-0">
                                            <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div class="flex-shrink-0">
                                            <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                                        </div>

                                        <div class="mt-6 flex-shrink-0 sm:mt-0">
                                            <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                                        </div>
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