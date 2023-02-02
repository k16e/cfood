<template>
    <component
        :is="tag"
        v-for="(route, idx) in list"
        :key="route.title + idx"
        :class="{
            'flex items-center h-full _is-desktop': desktop,
            'w-full h-full flex _is-mobile': mobile
        }">
        <NuxtLink
            :to="route.to"
            @click="closeNav()"
            :class="{
                'parent-active': isParentRoute(route.to),
                'py-1 px-5 rounded-full focus:bg-orange-50 hover:bg-orange-50 font-medium text-orange-700 flex items-center h-full': desktop,
                'flex items-center md:justify-center md:text-center p-7 w-full h-full font-display text-3xl text-orange-700 focus:ring-0 focus:ring-offset-0 focus:bg-orange-50 hover:bg-orange-50 rounded-md': mobile
            }">
            {{ route.title }}
        </NuxtLink>
    </component>
</template>

<script setup>
const props = defineProps({
    tag: { type: String, default: 'li' },
    list: { type: Array, required: true },
    desktop: { type: Boolean, default: false },
    mobile: { type: Boolean, default: false }
})
const currentRoute = useRoute()
const isParentRoute = path => currentRoute.path.startsWith(path)
const app = useAppStore()
const closeNav = () => app.removeOverlay()
</script>

<style scoped>
._is-desktop .router-link-active:not(.luna-turn-off-active),
._is-desktop .parent-active:not(.luna-turn-off-active) {
    @apply ring-2 ring-offset-1 ring-offset-gray-50 outline-none ring-orange-700 bg-orange-50;
}
._is-mobile .router-link-active:not(.luna-turn-off-active),
._is-mobile .parent-active:not(.luna-turn-off-active) {
    @apply bg-orange-50 border border-orange-200;
}
</style>