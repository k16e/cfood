<template>
    <Reveal>
        <Container padX center padTGrow>
            <div v-editable="blok" data-test="media-split">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-12 sm:gap-14">
                    <div class="lg:col-span-2 order-2 md:order-1">
                        <div class="pb-5 sm:pb-7">
                            <Heading tag="h1" :content="blok.title"/>
                        </div>
                        <div
                            v-html="$mdRender.render(blok.body)"
                            class="prose prose-xl lg:prose-2xl leading-normal lg:leading-snug italic max-w-none"
                        />
                    <div v-if="!$isEmpty(blok.link) || blok.link[0].cached_url" class="mt-9 lg:mt-12">
                        <NuxtLink
                            v-for="item in blok.link" :key="item._uid"
                            :to="$stripLink(item.link.cached_url)"
                            class="luna-btn _is-taller text-lg text-gray-600 font-medium">
                            <Icon name="ic:baseline-shopping-basket" size="24" class="mr-1.5 text-orange-700"/>
                            <span v-text="item.title"/>
                        </NuxtLink>
                    </div>
                    </div>
                    <figure v-if="!$isEmpty(blok.media) || blok.media[0].file.filename" class="md:order-2">
                        <NuxtImg
                            v-if="$mediaType((blok.media[0].file.filename), 'image')"
                            :src="blok.media[0].file.filename"
                            :alt="blok.media[0].file.alt"
                            preset="medium"
                        />
                    </figure>
                </div>
            </div>
        </Container>
    </Reveal>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>