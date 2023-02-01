<template>
    <component
        :is="tag"
        v-for="(route, idx) in list"
        :key="route.title + idx"
        :class="{
            'flex items-center h-full _is-desktop': desktop,
            'w-full h-full flex items-center justify-center _is-mobile': mobile
        }">
        <NuxtLink
            :to="route.to"
            :class="{
                'parent-active': isParentRoute(route.to),
                'py-1 px-5 rounded-full focus:bg-orange-50 hover:bg-orange-50 font-medium text-orange-700 flex items-center h-full': desktop,
                'flex items-center justify-center p-5 rounded-xl w-full h-full luna-gradient text-white text-xl': mobile
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
</script>

<style scoped>
._is-desktop .router-link-active:not(.luna-turn-off-active),
._is-desktop .parent-active:not(.luna-turn-off-active) {
    @apply ring-2 ring-offset-1 ring-offset-gray-50 outline-none ring-orange-700 bg-orange-50;
}
</style>