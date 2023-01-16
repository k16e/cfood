<template>
    <component
        :is="tag"
        :class="`${classes[tag]} ${font} ${color} ${weight} text-orange-700 !leading-normal`">
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
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-xl',
    h4: 'text-lg'
}))
</script>