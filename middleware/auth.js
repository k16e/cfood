export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()

    if (!user.value) {
        setTimeout(() => { // Temporary fix to Reveal not losing its _on-route-change class...
            return navigateTo('/customer/sign-in')
        }, 100)
    }
})