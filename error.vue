<template>
    <Container center padX padTGrow>
        <p>
            {{ error.statusCode }}
        </p>
        <p>
            {{ error.message }}
        </p>
        <button type="button" @click="handleError">Please go back home</button>
    </Container>
</template>

<script setup>
const props = defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })
</script>