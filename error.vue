<template>
    <div>
        <p>
            {{ error.statusCode }}
        </p>
        <p>
            {{ error.message }}
        </p>

        <!-- Button to clear the error -->
        <button @click="handleError" class="r-btn">Please go back home</button>
    </div>
</template>

<script setup>
    const props = defineProps({
        error: Object
    })
    const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>