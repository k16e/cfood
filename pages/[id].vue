<template>
    <div>
        {{ myData }}
    </div>
    <div>
        {{ currencyApi }}
    </div>
</template>

<script setup>
    const { data: myData } = await useFetch('/api/bioData?name=KB', {
        method: 'post',
        body: { age: 30 }
    })
    const { data: currencyApi } = await useFetch('/api/currencyApi')
</script>