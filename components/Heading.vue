<template>
    <component
        :is="tag"
        :class="classes[tag] + ' font-light text-orange-700 truncate'">
        {{ content }}
    </component>
</template>

<script setup>
const props = defineProps({
    tag: { type: String, required: true, default: 'h2' },
    content: { type: String, required: true }
})
const classes = computed(() => ({
    h1: 'text-4xl sm:text-6xl lg:text-7xl',
    h2: 'text-3xl sm:text-5xl',
    h3: 'text-2xl'
}))
</script>