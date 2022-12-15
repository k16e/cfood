export default defineEventHandler(async () => {
    const
        { data } = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=nrhLvxOMP2XMlaQZplSIjTKGiWvbpFSVgSBLnhGC')

    return data
})