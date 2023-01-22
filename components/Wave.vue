<template>
    <svg
        viewBox="0 0 1600 800"
        width="100%"
        preserveAspectRatio="none"
        class="scale-x-[-1] inset-x-0 absolute"
        :class="[maxHeight]">
        <path
            :fill="fill"
            :stroke="stroke && '#d1d5db'"
            :stroke-width="stroke && '4'"
            d="M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z"
        />
    </svg>
</template>

<script setup>
const props = defineProps({
    fill: { type: String, default: 'var(--body-bg)' },
    stroke: { type: Boolean, default: true },
    maxHeight: { type: String, default: 'max-h-[96px]' }
})
</script>