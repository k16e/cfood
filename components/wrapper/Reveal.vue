<template>
    <div
        ref="el"
        class="luna-reveal"
        :class="elIsVisible && '_is-in-viewport'">
        <slot/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const el = ref(null)
const elIsVisible = ref(false)

const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => elIsVisible.value = isIntersecting)

const updated = onUpdated(() => stop())
const routeLeaving = onBeforeRouteLeave((to, from) => {
    el.value.classList.add('_on-route-leave')
})
</script>