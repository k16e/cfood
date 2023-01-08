<template>
    <div class="flex items-center justify-between">
        <Heading :tag="tag" :content="content" class="flex-1"/>
        <NuxtLink
            v-if="link"
            :to="link"
            class="luna-btn text-gray-700">
            <Icon v-if="linkIcon" :name="linkIcon" size="22" class="mr-1.5 text-orange-700"/>
            <span v-text="linkText"/>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    tag: { type: String, default: 'h2' },
    content: { type: String, default: 'Page heading' },
    link: { type: String, default: '/' },
    linkIcon: { type: String, default: 'ic:baseline-arrow-back' },
    linkText: { type: String, default: 'Go back' }
})
</script>