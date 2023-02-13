const signUp = async (form, customer, client, formStatus) => {
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
                }
            }
        })
    } catch (err) {
        formStatus.errorMessage = err
    } finally {
        formStatus.sent = true
        formStatus.sending = false
        console.log(customer)
        form.value.reset()
    }
}

const useSignUp = () => {
    return { signUp }
}

export default useSignUp