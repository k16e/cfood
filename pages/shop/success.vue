<template>
    <Reveal>
        <Container padX center padTGrow>
            <PageHeader
                :centered="false"
                tag="h1" content="Thanks, a load!"
                link="/products" linkIcon="ic:baseline-arrow-back"
                linkText="Buy more"
                :pretitle="`Hey, ${latest.first_name}`"
                :copy="`Here's a quick summary of your order with id ${latest.reference}`"
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
const latest = ref(productsStore.latestOrder[0])
const routeLeaving = onBeforeRouteLeave(() => {
    productsStore.$patch(state => state.latestOrder = [])
})
onMounted(() => {
    const router = useRouter()
    const resetLatestOrder = () => {
        setTimeout(() => {
            productsStore.$patch(state => state.latestOrder = [])
            router.push({ path: '/products' })
        }, 7000)
    }
    resetLatestOrder()
})
</script>