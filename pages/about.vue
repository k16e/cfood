<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/endpoints')

</script>

<style lang="scss" scoped>

</style>