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
                        <FormInput
                            labelFor="first_name" labelText="First name:"
                            type="text" id="first_name" name="first_name" placeholder="First name" required
                            v-model="customer.first_name"
                        />
                        <FormInput
                            labelFor="last_name" labelText="Last name:"
                            type="text" id="last_name" name="last_name" placeholder="Last name" required
                            v-model="customer.last_name"
                        />
                        <FormInput
                            labelFor="email" labelText="Email:"
                            type="email" id="email" name="email" placeholder="Your email" required
                            v-model="customer.email"
                        />
                        <FormInput
                            labelFor="phone" labelText="Phone number:"
                            type="text" id="phone" name="phone" placeholder="Phone number" required
                            v-model="customer.phone"
                        />
                        <FormInput
                            labelFor="password" labelText="Password:"
                            type="password" id="password" name="password" placeholder="********" required
                            v-model="customer.password"
                        />
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