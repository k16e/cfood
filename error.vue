<template>
    <div>
        <p>
            {{ error.statusCode }}
        </p>
        <p>
            {{ error.message }}
        </p>

        <!-- Button to clear the error -->
        <button @click="handleClearError" class="luna-btn">Please go back home</button>
    </div>
</template>

<script setup>
    defineProps([ 'error' ])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>