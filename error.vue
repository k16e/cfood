<template>
    <div>
        <p>
            {{ error.statusCode }}
        </p>
        <p>
            {{ error.message }}
        </p>

        <a href="/">Please go back home</a>
    </div>
</template>

<script setup>
    const props = defineProps({ error: Object })
    const error = useError()
    error.value.message = 'Oops! Page not found 😔'
</script>