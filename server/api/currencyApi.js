export default defineEventHandler(async () => {
    const
        { currencyKey } = useRuntimeConfig(),
        { data } = await $fetch(`https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}`)

    return data
})