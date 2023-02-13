const client = useSupabaseAuthClient()
const formStatus = useFormsStore()

const signUp = async (form, customer) => {
    try {
        formStatus.sending = true
        const { error } = await client.auth.signUp({
            email: customer.email.value,
            password: customer.password.value,
            options: {
                data: {
                    first_name: customer.first_name.value,
                    last_name: customer.last_name.value,
                    email: customer.email.value,
                    phone: customer.phone.value,
                }
            }
        })
    } catch (err) {
        formStatus.errorMessage = err
    } finally {
        formStatus.sent = true
        formStatus.sending = false
    }
}

const useSignUp = () => {
    return { signUp }
}

export default useSignUp