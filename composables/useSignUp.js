const signUp = async (form, customer, client, formStatus, router, config) => {
    try {
        formStatus.sending = true
        const { error } = await client.auth.signUp({
            email: customer.email,
            password: customer.password,
            options: {
                data: {
                    first_name: customer.first_name,
                    last_name: customer.last_name,
                    email: customer.email,
                    phone: customer.phone,
                },
                emailRedirectTo: config.baseUrl + '/customer/account'
            }
        })
    } catch (error) {
        formStatus.errorMessage = error
        console.log(error)
    } finally {
        formStatus.sent = true
        formStatus.sending = false
        form.value.reset()
        router.push({ path: '/customer/account' })
    }
}

const useSignUp = () => {
    return { signUp }
}

export default useSignUp