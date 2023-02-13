<template>
    <Reveal class="pb-24 sm:pb-28">
        <Container padX center padTGrow>
            <PageHeader
                tag="h1" content="Welcome!"
                link="/customer/orders" linkIcon=""
                linkText="Your orders"
            />
            <div>
                <button
                    v-if="user"
                    @click="signOut()"
                    class="luna-btn _is-taller text-lg text-gray-600 font-medium">
                    Sign out!
                </button>
            </div>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const router = useRouter()

async function signOut() {
    const { error } = await client.auth.signOut()
    if (error) return
    await router.push('/customer/sign-in')
}
</script>