<template>
    <NuxtLink :to="parentPath" class="luna-btn _is-accented _is-pill">
        <Icon name="ps:arrow-left" size="24" class="translate-y-0.5"/>
        <span v-text="'Go back'" class="sr-only"/>
    </NuxtLink>
</template>

<script setup>
const route = useRoute()
const parentPath = route.matched[0].path.split('/:')[0]
</script>