<template>
    <div v-editable="blok" class="pb-24 sm:pb-28">
        <StoryblokComponent
            v-for="blok in blok.body"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
    <SiteFooter/>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>