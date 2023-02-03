<template>
    <Reveal>
        <Container padX center padTGrow>
            <PageHeader
                tag="h1" content="Thanks, a load!"
                link="/products" linkIcon="ic:baseline-arrow-back"
                linkText="Buy more"
            />
            <ClientOnly>
                <Transition name="slide-up" appear mode="out-in">
                    <div v-if="productsStore.latestOrder.length >= 1">
                        <pre>
                            {{ productsStore.latestOrder }}
                        </pre>
                    </div>
                </Transition>
            </ClientOnly>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
const routeLeaving = onBeforeRouteLeave(() => {
    productsStore.$patch(state => {
        state.latestOrder = []
    })
})
onMounted(() => {
    const router = useRouter()
    const resetLatestOrder = () => {
        if (productsStore.latestOrder.length >= 1) {
            setTimeout(() => {
                productsStore.$patch(state => {
                    state.latestOrder = []
                })
                router.push({ path: '/products' })
            }, 5000);
        }
    }
    resetLatestOrder()
})
</script>