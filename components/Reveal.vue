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