const client = useSupabaseAuthClient()

const signUp = async (form, customer) => {
    console.log(customer)
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
    console.log(error)
}

const useSignUp = () => {
    return { signUp }
}

export default useSignUp