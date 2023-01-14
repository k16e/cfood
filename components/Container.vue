<template>
    <div
        class="container"
        :class="[{
           'px-3 sm:px-5': padX,
           'mx-auto': center,
           'pt-7 lg:pt-12': padTGrow
        }, maxWidth]">
        <slot/>
    </div>
</template>

<script setup>
const props = defineProps({
    padX: Boolean,
    maxWidth: { type: String, default: 'max-w-screen-xl' },
    center: Boolean,
    padTGrow: Boolean
})
</script>