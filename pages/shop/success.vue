<template>
    <Reveal>
        <Container padX center padTGrow>
            <PageHeader
                :centered="latest ? false : true"
                tag="h1" :content="latest ? 'Thanks, a load!' : `You're way ahead!`"
                link="/products" linkIcon="ic:baseline-arrow-back"
                linkText="Buy more"
                :pretitle="latest && `Hey, ${latest.first_name}`"
                :copy="latest && `Here's a quick summary of your order, id <span class='text-blue-700'>${latest.reference}</span>. This has been emailed to you, don't worry. You will always have a view of them (previous orders) under your account when you sign in. See you there.`"
            />
            <ClientOnly>
                <Transition name="slide-up" appear mode="out-in">
                    <div v-if="latest">
                        <pre>
                            {{ latest }}
                        </pre>
                    </div>
                </Transition>
            </ClientOnly>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
const latest = ref(productsStore.latestOrder[0]) ?? null
const { $randomIntBetween } = useNuxtApp()
const router = useRouter()
const resetLatestOrder = () => {
    setTimeout(() => {
        productsStore.$patch(state => state.latestOrder = [])
        router.push({ path: '/products' })
    }, ($randomIntBetween(7, 15) * 1000))
}

onBeforeRouteLeave(() => {
    productsStore.$patch(state => state.latestOrder = [])
})

onMounted(() => {
    resetLatestOrder()
})

onUnmounted(() => {
    clearTimeout(resetLatestOrder)
})
</script>