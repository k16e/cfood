<template>
    <div>
        <p>
            {{ error.statusCode }}
        </p>
        <p>
            {{ error.message }}
        </p>

        <!-- Button to clear the error -->
        <button @click="handleError" class="">Please go back home</button>
    </div>
</template>

<script setup>
    const props = defineProps({
        error: Object
    })
    // customise 404 message from script section
    const error = useError()
    if (error.value.statusCode === 404) {
        error.value.message = 'Oops! Page not found 😔';
    }
    const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>