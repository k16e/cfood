<template>
    <WrapperReveal>
        <Container padX center>
            <HeaderPage tag="h1" content="Checkout" link="/shop/cart" linkIcon="ic:baseline-arrow-back" linkText="Modify cart?"/>
            <ClientOnly>
                <div class="pt-5 overflow-x-hidden">
                    <div class="bg-white rounded-xl border border-gray-200 relative overflow-x-hidden">
                        <!-- Background color split screen for large screens -->
                        <div class="absolute top-0 left-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true"/>
                        <div class="absolute top-0 right-0 hidden h-full w-1/2 bg-gray-50 lg:block border-l border-gray-200" aria-hidden="true"/>

                        <div class="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2">
                            <section
                                aria-labelledby="summary-heading"
                                class="bg-gray-50 p-3 py-5 lg:py-7 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:sticky lg:top-24 border-b border-gray-200 lg:border-b-0">
                                <div class="mx-auto max-w-2xl lg:max-w-none">
                                    <h2 id="summary-heading" class="sr-only">Order summary</h2>
                                    <dl>
                                        <dt class="text-sm font-medium">Amount due</dt>
                                        <dd class="mt-1.5 text-3xl font-bold tracking-tight text-orange-700">
                                            {{ $formatPrice(subTotal) }}
                                        </dd>
                                    </dl>
                                    <dl class="space-y-5 border-t border-white border-opacity-10 pt-5 text-sm font-medium">
                                        <div class="flex items-center justify-between">
                                            <dt>Subtotal</dt>
                                            <dd>{{ $formatPrice(subTotal) }}</dd>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <dt>Shipping</dt>
                                            <dd>{{ $formatPrice(shipping) }}</dd>
                                        </div>
                                        <div class="flex items-center justify-between border-t border-white border-opacity-10 pt-5">
                                            <dt class="text-base">Total</dt>
                                            <dd class="text-base">{{ $formatPrice(subTotal + shipping) }}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </section>

                            <section
                                aria-labelledby="payment-and-shipping-heading"
                                class="p-3 py-5 lg:py-7 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg">
                                <h2 id="payment-and-shipping-heading" class="sr-only">Payment and shipping details</h2>
                                <!-- Complete order form -->
                                <form
                                    @submit.prevent="proceedToPay()"
                                    class="mx-auto max-w-2xl lg:max-w-none">
                                    <div>
                                        <Heading tag="h3" content="Contact info" class="text-lg font-sans font-medium mb-3"/>
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-3">
                                            <p>
                                                <label for="first_name" class="luna-label">First name:</label>
                                                <input v-model="customer.first_name.value" required type="text" id="first_name" autocomplete="given-name" class="luna-input"/>
                                            </p>
                                            <p>
                                                <label for="last_name" class="luna-label">Last name:</label>
                                                <input v-model="customer.last_name.value" required type="text" id="last_name" autocomplete="given-name" class="luna-input"/>
                                            </p>
                                            <p>
                                                <label for="email" class="luna-label">Email:</label>
                                                <input v-model="customer.email.value" type="email" id="email" autocomplete="email" class="luna-input"/>
                                            </p>
                                            <p>
                                                <label for="phone" class="luna-label">Phone number:</label>
                                                <input v-model="customer.phone.value" required type="text" id="phone" autocomplete="tel" class="luna-input"/>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="mt-9">
                                        <Heading tag="h3" content="Shipping info" class="text-lg font-sans font-medium mb-3"/>
                                        <div class="grid grid-cols-1 gap-5">
                                            <div>
                                                <label for="address" class="luna-label">Street, apartment, etc.</label>
                                                <input v-model="customer.address.value" required type="text" id="address" autocomplete="street-address" class="luna-input"/>
                                            </div>
                                            <div>
                                                <label for="shipping" class="luna-label">Delivery area</label>
                                                <select
                                                    id="shipping"
                                                    name="shipping"
                                                    class="luna-input"
                                                    v-model="shipping">
                                                    <option
                                                        v-for="item in shippingRates"
                                                        :key="item.id"
                                                        :value="item.price">
                                                        {{ item.distance }} - {{ $formatPrice(item.price) }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        class="mt-9 luna-btn _is-block"
                                        :class="{ 'cursor-not-allowed': formStatus.sending.value }"
                                        :disabled="formStatus.sending.value">
                                        <svg v-if="formStatus.sending.value" class="mr-3 h-5 w-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span v-text="'Proceed to pay'"/>
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </Container>
    </WrapperReveal>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'
import { ref } from 'vue'

const config = useRuntimeConfig()

useHead({
    script: [
        { src: 'https://js.paystack.co/v1/inline.js', async: true }
    ]
})

const store = useProductsStore()
const cart = store.cart
const subTotal = cart.reduce((acc, cur) => acc + cur.subTotal, 0)

await store.fetchShippingRates()
const shippingRates = ref(store.shippingRates)
const shipping = ref(shippingRates.value[0].price)
const customer = {
    first_name: ref(''),
    last_name: ref(''),
    email: ref(''),
    phone: ref(''),
    address: ref('')
}
let formStatus = {
    sent: ref(false),
    sending: ref(false),
    error: ref(false),
    errorMessage: ref(null)
}
const order = store.order
const { completeOrder } = useOrderCompletion()

const proceedToPay = () => {
    let handler = PaystackPop.setup({
        key: config.pKey,
        email: email.value,
        amount: (subTotal + shipping.value) * 100,
        currency: 'NGN',
        ref: Date.now().toString(36) + Math.random().toString(36).substring(5),
        callback: response => {
            let reference = response.reference
            completeOrder(formStatus, order, customer, shippingRates, subTotal, store, cart, reference)
        },
        onClose: () => {
            alert(`Sure you want to dismiss this transaction?`)
            console.log(`Transaction was canceled`)
        }
    });
    handler.openIframe()
}
</script>