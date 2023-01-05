<template>
    <component
        :is="tag"
        :class="classes[tag] + ' font-display text-orange-700 !leading-normal'">
        <slot>
            {{ content }}
        </slot>
    </component>
</template>

<script setup>
const props = defineProps({
    tag: { type: String, required: true, default: 'h2' },
    content: { type: String }
})
const classes = computed(() => ({
    h1: 'text-4xl sm:text-5xl lg:text-6xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-2xl',
    h4: 'text-xl'
}))
</script>