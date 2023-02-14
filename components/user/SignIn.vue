<template>
    <Container padX center padTGrow>
        <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-xl space-y-8">
                <PageHeader
                    tag="h1" content="Sign in!"
                    link="" linkIcon=""
                />
                <form ref="form" @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-1 gap-5 sm:gap-7 mb-3">
                        <p>
                            <label for="email" class="luna-label">Email:</label>
                            <input v-model="customer.email" type="email" id="email" autocomplete="email" required placeholder="Email address" class="luna-input"/>
                        </p>
                        <p>
                            <label for="password" class="luna-label">Password:</label>
                            <input v-model="customer.password" type="password" id="password" autocomplete="current-password" required placeholder="Password" class="luna-input"/>
                            <span v-if="formStatus.errorMessage">{{ formStatus.errorMessage }}</span>
                        </p>
                    </div>
                    <div class="text-sm">
                        <NuxtLink
                            to="/customer/password-forgot"
                            class="font-medium text-orange-700 hover:text-orange-500">
                            Forgot your password?
                        </NuxtLink>
                    </div>

                    <div class="mt-9">
                        <button type="submit" class="luna-btn _is-block relative">
                            <Transition name="slide-up" appear>
                                <span v-if="formStatus.sending" class="absolute top-1/2 left-3 -translate-y-1/2">
                                    <Spinner/>
                                </span>
                                <span v-else class="absolute top-1/2 left-3 -translate-y-1/2">
                                    <Icon name="ic:round-lock-person" class="h-5 w-5 text-orange-300 group-hover:text-orange-50" aria-hidden="true" />
                                </span>
                            </Transition>
                            <span v-text="'Sign in!'"/>
                        </button>
                    </div>
                </form>

                <p class="text-sm text-center">
                    <NuxtLink to="/customer/sign-up" class="font-medium text-orange-700 hover:text-orange-500 p-3 rounded-full">
                        Get a new account with c.food Studio!
                    </NuxtLink>
                </p>
            </div>
        </div>
    </Container>
</template>

<script setup>
const form = ref(null)
const client = useSupabaseAuthClient()
const router = useRouter()
const user = useSupabaseUser()
const formStatus = useFormsStore()

const customer = reactive({
    email: '',
    password: ''
})

const handleSubmit = async () => {
    formStatus.sending = true
    const { email, password } = customer
    const { error } = await client.auth.signInWithPassword({ email, password })
    if (!error) {
        formStatus.sent = true
        formStatus.sending = false
        form.value.reset()
        router.push('/customer/account')
    }
    formStatus.errorMessage = error
    console.log(error)

    // try {
    //     formStatus.sending = true
    //     const { error } = await client.auth.signInWithPassword({ email, password })
    // } catch (error) {
    //     formStatus.errorMessage = error
    //     error.value = error
    //     console.log(error)
    // } finally {
    //     formStatus.sent = true
    //     formStatus.sending = false
    //     form.value.reset()
    //     router.push('/customer/account')
    // }
}

watchEffect(async () => {
    if (user.value) {
        await router.push('/customer/account')
    }
})
</script>