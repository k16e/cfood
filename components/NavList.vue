<template>
    <component
        :is="tag"
        v-for="(route, idx) in list"
        :key="route.title + idx"
        class="flex items-center h-full">
        <NuxtLink
            :to="route.to"
            class="flex items-center h-full"
            :class="{
                'parent-active': isParentRoute(route.to),
                'py-1 px-5 rounded-full focus:bg-orange-50 hover:bg-orange-50 font-medium text-orange-700': desktop,
                'justify-center': mobile
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