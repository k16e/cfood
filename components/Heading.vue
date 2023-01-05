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
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-2xl sm:text-3xl',
    h3: 'text-xl',
    h4: 'text-lg'
}))
</script>