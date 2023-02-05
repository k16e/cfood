<template>
    <div class="mb-5 lg:mb-7">
        <div class="flex justify-between" :class="centered ? 'items-center' : 'items-start'">
            <div
                class="flex-1"
                :class="isChildPage && 'flex items-center gap-x-3 lg:gap-x-5'">
                <BackToParent v-if="isChildPage" class="translate-y-1"/>
                <div>
                    <span v-if="pretitle" v-text="pretitle" class="text-gray-600 text-lg block"/>
                    <Heading :tag="tag" :content="content" class="pr-3"/>
                </div>
            </div>
            <slot>
                <NuxtLink
                    v-if="link"
                    :to="link"
                    class="luna-btn text-gray-700">
                    <Icon v-if="linkIcon" :name="linkIcon" size="22" class="mr-1.5 text-orange-700"/>
                    <span v-text="linkText"/>
                </NuxtLink>
            </slot>
        </div>
        <p v-if="copy" v-html="copy" class="text-base max-w-screen-md pr-3 mt-3"/>
    </div>
</template>

<script setup>
const props = defineProps({
    tag: { type: String, default: 'h2' },
    content: { type: String, default: 'Page heading' },
    link: { type: String, default: '/' },
    linkIcon: { type: String, default: 'ic:baseline-arrow-back' },
    linkText: { type: String, default: 'Go back' },
    isChildPage: { type: Boolean, default: false },
    pretitle: { type: String },
    copy: { type: String },
    centered: { type: Boolean, default: true }
})
</script>