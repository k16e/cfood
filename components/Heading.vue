<template>
    <component
        :is="tag"
        :class="`${classes[tag]} ${font} ${color} ${weight} text-orange-700 !leading-[1.1]`">
        <slot>
            {{ content }}
        </slot>
    </component>
</template>

<script setup>
const props = defineProps({
    tag: { type: String, default: 'h2' },
    content: { type: String },
    font: { type: String, default: 'font-display' },
    color: { type: String, default: 'text-orange-700' },
    weight: { type: String, default: 'font-normal' },
})
const classes = computed(() => ({
    h1: 'text-4xl sm:text-5xl lg:text-6xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-xl',
    h4: 'text-lg'
}))
</script>