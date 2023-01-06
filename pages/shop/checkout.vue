<template>
    <Container padX center>
        <div class="flex items-center justify-between">
            <Heading tag="h1" content="Checkout your order"/>
            <NuxtLink to="/shop/cart" class="luna-btn text-gray-700">
                <Icon name="ic:baseline-arrow-back" size="22" class="mr-1.5 text-orange-700"/>
                <span>Modify cart?</span>
            </NuxtLink>
        </div>

        <ClientOnly>
            <section class="pt-5" @get-subtotal="getSubTotal">
                {{ subTotal }}
            </section>
        </ClientOnly>
    </Container>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const cart = store.cart
const subTotal = cart.reduce((acc, cur) => acc + cur.subTotal, 0)
</script>