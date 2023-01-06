<template>
    <Container padX center>
        <div class="flex items-center justify-between">
            <Heading tag="h1" content="Checkout"/>
            <NuxtLink to="/shop/cart" class="luna-btn text-gray-700">
                <Icon name="ic:baseline-arrow-back" size="22" class="mr-1.5 text-orange-700"/>
                <span>Modify cart?</span>
            </NuxtLink>
        </div>

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
                                        <dd>$25.00</dd>
                                    </div>
                                    <div class="flex items-center justify-between border-t border-white border-opacity-10 pt-5">
                                        <dt class="text-base">Total</dt>
                                        <dd class="text-base">$642.60</dd>
                                    </div>
                                </dl>
                            </div>
                        </section>

                        <section
                            aria-labelledby="payment-and-shipping-heading"
                            class="p-3 py-5 lg:py-7 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg">
                            <h2 id="payment-and-shipping-heading" class="sr-only">Payment and shipping details</h2>
                            <form
                                class="mx-auto max-w-2xl lg:max-w-none">
                                <div>
                                    <Heading tag="h3" content="Contact info" class="text-lg font-sans font-medium mb-3"/>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3">
                                        <div>
                                            <label for="username" class="block mb-1.5 text-sm font-medium">
                                                Name:
                                            </label>
                                            <input type="text" id="username" name="username" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-1.5 text-sm font-medium text-gray-700">
                                                Email:
                                            </label>
                                            <input type="email" id="email" name="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-9">
                                    <Heading tag="h3" content="Shipping info" class="text-lg font-sans font-medium mb-3"/>
                                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                                        <div class="sm:col-span-3">
                                            <label for="address" class="block text-sm font-medium text-gray-700 mb-1.5">
                                                Street, apartment, suite no., etc.
                                            </label>
                                            <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
                                        </div>
                                        <pre>
                                            {{ shippingRates }}
                                        </pre>
                                    </div>
                                </div>

                                <div class="mt-9">
                                    <button
                                        type="submit"
                                        class="w-full rounded-md border border-transparent bg-orange-700 py-3 px-4 font-medium text-white shadow-sm hover:bg-orange-600">
                                        Proceed to pay
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </ClientOnly>
    </Container>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
const cart = store.cart
const subTotal = cart.reduce((acc, cur) => acc + cur.subTotal, 0)

await store.fetchShippingRates()
const shippingRates = await store.shippingRates
</script>