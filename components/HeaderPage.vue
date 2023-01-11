<template>
    <div class="flex items-center justify-between">
        <div class="flex-1" :class="isChildPage && 'flex items-center gap-x-3 lg:gap-x-5'">
            <BackButton v-if="isChildPage" class="translate-y-1"/>
            <Heading :tag="tag" :content="content"/>
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
</template>

<script setup>
const props = defineProps({
    tag: { type: String, default: 'h2' },
    content: { type: String, default: 'Page heading' },
    link: { type: String, default: '/' },
    linkIcon: { type: String, default: 'ic:baseline-arrow-back' },
    linkText: { type: String, default: 'Go back' },
    isChildPage: { type: Boolean, default: false }
})
</script>