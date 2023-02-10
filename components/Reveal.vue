<template>
    <div
        ref="el"
        class="luna-reveal"
        :class="elIsVisible && '_is-in-viewport'">
        <slot/>
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'

const el = ref(null)
const elIsVisible = ref(false)

const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => elIsVisible.value = isIntersecting)

onUpdated(() => stop())
onBeforeRouteLeave(() => el.value.classList.add('_on-route-change'))
onBeforeRouteUpdate(() => el.value.classList.add('_on-route-change'))
</script>

<style scoped>
.luna-reveal { @apply scale-110 opacity-0 invisible transition duration-700; }
.luna-reveal._is-in-viewport { @apply scale-100 opacity-100 visible; }
.luna-reveal._on-route-change { @apply scale-110 opacity-0 transition duration-700; }
</style>