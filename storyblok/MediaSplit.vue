<template>
    <WrapperReveal>
        <Container padX center>
            <div v-editable="blok" data-test="media-split">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-12 sm:gap-14">
                    <div class="lg:col-span-2 order-2 md:order-1">
                        <div class="pb-5 sm:pb-7">
                            <Heading tag="h1" :content="blok.title"/>
                        </div>
                        <div
                            v-html="renderer.render(blok.body)"
                            class="prose prose-xl lg:prose-2xl leading-normal lg:leading-snug italic max-w-none"
                        />
                    <div class="mt-9 lg:mt-12">
                        <NuxtLink to="/products" class="luna-btn text-gray-600 font-medium">
                            <Icon name="ic:baseline-shopping-basket" size="22" class="mr-1.5 text-orange-700"/>
                            <span>Shop our products</span>
                        </NuxtLink>
                    </div>
                    </div>
                    <figure class="md:order-2">
                        <img src="/logo.png" alt="">
                    </figure>
                </div>
            </div>
        </Container>
    </WrapperReveal>
</template>

<script setup>
import md from 'markdown-it'
const props = defineProps({ blok: Object })
const renderer = md()
</script>