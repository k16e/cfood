<template>
    <Container padX center padTGrow>
        <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <PageHeader
                    tag="h1" content="Get a c.food!"
                    link="" linkIcon=""
                />
                <form
                    ref="form"
                    @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-1 gap-5 sm:gap-7 mb-3">
                        <p>
                            <label for="email" class="luna-label">Enter email:</label>
                            <input v-model="customer.email.value" type="email" id="email" autocomplete="email" required placeholder="Email address" class="luna-input"/>
                        </p>
                        <p>
                            <label for="password" class="luna-label">Choose password:</label>
                            <input v-model="customer.password.value" type="password" id="password" autocomplete="current-password" required placeholder="Password" class="luna-input"/>
                        </p>
                    </div>

                    <div class="mt-9">
                        <button
                            type="submit"
                            class="luna-btn _is-block relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Icon name="ic:round-lock-person" class="h-5 w-5 text-orange-400 group-hover:text-orange-100" aria-hidden="true" />
                            </span>
                            Create an account
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
const customer = {
    email: ref(''),
    password: ref('')
}

const handleSubmit = () => {
    console.table(email.value, password.value)

    form.value.reset()
}
</script>