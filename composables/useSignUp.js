const error = ref(null)

const signUp = async (form, email, password, token = null) => {
    error.value = null

    try {
        console.log(email, password)
    } catch (error) {
        console.error()
    } finally {
        form.reset()
    }
}

const useSignUp = () => {
    return { error, signUp }
}

export default useSignUp