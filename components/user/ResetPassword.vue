<template>
    <Container padX center padTGrow>
        <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-xl space-y-8">
                <PageHeader
                    tag="h1" content="Reset your password!"
                    link="" linkIcon=""
                />
                <form ref="form" @submit.prevent="handleSubmit()">
                    <div class="grid grid-cols-1 gap-5">
                        <FormInput
                            labelFor="password" labelText="New password: (strong only)"
                            type="password" id="password" name="password" placeholder="********" autocomplete="off" required
                            :pattern="$strongPassword()"
                            v-model="customer.password"
                        />
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
                            <span v-text="'Send password reset link'"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </Container>
</template>

<script setup>
const form = ref(null)
const client = useSupabaseAuthClient()
const formStatus = useFormsStore()
const router = useRouter()
const config = useRuntimeConfig()

const customer = reactive({
    password: '',
})

const handleSubmit = async () => {
    const { password } = customer
    try {
        formStatus.sending = true
        const { data, error } = await supabase.auth.updateUser({ password })
    } catch (error) {
        formStatus.errorMessage = error
        console.log(error)
    } finally {
        formStatus.sent = true
        formStatus.sending = false
        form.value.reset()
        router.push('/customer/sign-in')
    }
}
</script>