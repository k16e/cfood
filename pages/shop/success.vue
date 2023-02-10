<template>
    <Reveal class="pb-24 sm:pb-28">
        <Container padX center padTGrow>
            <PageHeader
                :centered="latest ? false : true"
                tag="h1" :content="latest ? 'Thanks, a load!' : `You're way ahead!`"
                link="/products" linkIcon="ic:baseline-arrow-back"
                :linkText="latest ? 'Buy more' : `Get shoppin'`"
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
    <SiteFooter/>
    <div
        id="luna-countdown"
        class="luna-btn _is-borderless _is-square _is-widest _is-raised text-orange-700 fixed bottom-9 left-1/2 -translate-x-1/2 z-10 text-3xl font-display _is-raised">
    </div>
</template>

<script setup>
const productsStore = useProductsStore()
const latest = ref(productsStore.latestOrder[0]) ?? null
const { $randomIntBetween } = useNuxtApp()
const { countdown } = useCountdown()
const router = useRouter()
const resetLatestOrder = () => {
    setTimeout(() => {
        productsStore.$patch(state => state.latestOrder = [])
        router.push({ path: '/products' })
    }, 12000)

    countdown(12, document.querySelector('#luna-countdown'))
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