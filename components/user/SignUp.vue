<template>
    <Container padX center padTGrow>
        <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-xl space-y-8">
                <PageHeader
                    tag="h1" content="Get a c.food!"
                    link="" linkIcon=""
                />
                <form
                    ref="form"
                    @submit.prevent="handleSubmit()">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-3">
                        <p>
                            <label for="first_name" class="luna-label">First name:</label>
                            <input v-model="customer.first_name" required type="text" id="first_name" autocomplete="given-name" class="luna-input"/>
                        </p>
                        <p>
                            <label for="last_name" class="luna-label">Last name:</label>
                            <input v-model="customer.last_name" required type="text" id="last_name" autocomplete="given-name" class="luna-input"/>
                        </p>
                        <p>
                            <label for="email" class="luna-label">Enter email:</label>
                            <input v-model="customer.email" type="email" id="email" autocomplete="email" required placeholder="Email address" class="luna-input"/>
                        </p>
                        <p>
                            <label for="phone" class="luna-label">Phone number:</label>
                            <input v-model="customer.phone" required type="text" id="phone" autocomplete="tel" class="luna-input"/>
                        </p>
                        <p>
                            <label for="password" class="luna-label">Choose password:</label>
                            <input v-model="customer.password" type="password" id="password" autocomplete="current-password" required placeholder="Password" class="luna-input"/>
                        </p>
                    </div>
                    <div class="mt-9">
                        <button
                            type="submit"
                            class="luna-btn _is-block relative">
                            <Transition name="slide-up">
                                <span v-if="formStatus.sending" class="absolute top-1/2 left-3 -translate-y-1/2">
                                    <Spinner/>
                                </span>
                                <span v-else class="absolute top-1/2 left-3 -translate-y-1/2">
                                    <Icon name="ic:round-lock-person" class="h-5 w-5 text-orange-300 group-hover:text-orange-50" aria-hidden="true" />
                                </span>
                            </Transition>
                            <span v-text="'Create an account'"/>
                        </button>
                    </div>
                </form>
                <p class="text-sm text-center">
                    <NuxtLink to="/customer/sign-in" class="font-medium text-orange-700 hover:text-orange-500 p-3 rounded-full">
                        Have an account? Sign in instead!
                    </NuxtLink>
                </p>
            </div>
        </div>
    </Container>
</template>

<script setup>
const form = ref(null)
const formStatus = useFormsStore()

const { signUp } = useSignUp()
const customer = reactive({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: ''
})

const handleSubmit = () => signUp(form, customer)
</script>