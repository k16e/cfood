<template>
    <div class="p-3 sm:p-5 pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12 flex items-center justify-between">
        <h1 class="font-light text-orange-700 text-3xl sm:text-5xl lg:text-5xl truncate">Your Cart</h1>
        <NuxtLink to="/products" class="luna-btn text-gray-700">
            <Icon name="ic:baseline-arrow-back" size="22" class="mr-1.5 text-orange-700"/>
            <span>Products</span>
        </NuxtLink>
    </div>
    <ClientOnly>
        <div v-if="cart.length >= 1" class="bg-white">
            <div class="px-3">
                <form
                    class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 pb-7">
                    <section aria-labelledby="cart-heading" class="lg:col-span-7">
                        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
                        <ul role="list" class="divide-y divide-gray-200">
                            <li v-for="(item, idx) in cart" :key="item.id + idx" class="flex py-5 sm:py-7">
                                <div class="flex-shrink-0">
                                    <img :src="item.image" :alt="item.name" class="h-32 w-32 object-cover sm:h-48 sm:w-48"/>
                                </div>

                                <div class="relative ml-3 sm:ml-5 flex-1 pr-3">
                                    <div class="flex justify-between flex-col">
                                        <div>
                                            <div class="flex flex-col justify-between">
                                                <div>
                                                    <span v-text="item.id" class="uppercase block text-xs font-medium tracking-wider text-gray-600"/>
                                                    <NuxtLink
                                                        :to="`/products/${$slugify(item.name)}-${item.id}`"
                                                        class="leading-tight text-2xl sm:text-xl truncate pb-1.5 text-orange-800 hover:text-orange-900">
                                                        {{ item.name }}
                                                    </NuxtLink>
                                                </div>
                                                <p v-text="item.description" class="text-sm line-clamp-2 opacity-70"/>
                                            </div>
                                            <p class="pt-3">
                                                <span v-text="'Price:'" class="luna-small-caps block -mb-0.5"/>
                                                <span class="font-medium text-gray-800 text-lg mt-1.5">
                                                    {{ $formatPrice(item.price) }}
                                                </span>
                                            </p>
                                        </div>

                                        <div class="flex items-center justify-between pt-5">
                                            <div class="number-input w-28">
                                                <div class="flex flex-row h-9 w-full rounded-xl relative bg-transparent">
                                                    <button
                                                        @click="decrement($event, item)"
                                                        type="button"
                                                        class="luna-counter rounded-l-full bg-gray-200">
                                                        <span class="sr-only">Decrease quantity</span>
                                                        <Icon name="ri:subtract-line" size="20" aria-hidden="true"/>
                                                    </button>
                                                    <input
                                                        type="number"
                                                        name="counter"
                                                        :value="item.qty"
                                                        min="1"
                                                        max="9"
                                                        class="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base flex items-center text-gray-700 outline-none border-0 border-y-2 border-gray-200" disabled>
                                                    <button
                                                        @click="increment($event, item)"
                                                        type="button"
                                                        class="luna-counter rounded-r-full bg-gray-200">
                                                        <span class="sr-only">Increase quantity</span>
                                                        <Icon name="ri:add-line" size="20" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <p class="text-right">
                                                <span v-text="'Subtotal:'" class="luna-small-caps block -mb-1"/>
                                                <span class="font-medium text-gray-800 text-lg mt-1.5">
                                                    {{ $formatPrice(item.price) }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="absolute top-0 right-0">
                                        <button type="button" class="-m-2 inline-flex p-3 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Remove</span>
                                            <Icon name="material-symbols:close-rounded" size="20" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <!-- Order summary -->
                    <section aria-labelledby="summary-heading" class="mt-3 rounded-lg bg-gray-50 px-3 py-5 sm:p-5 lg:col-span-5 lg:mt-7 lg:p-8 lg:sticky lg:top-24 border border-gray-200">
                        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>
                        <dl class="mt-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <dt class="text-gray-600">Subtotal</dt>
                                <dd class="font-medium text-gray-900">{{ $formatPrice(subTotal) }}</dd>
                            </div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Order total</dt>
                                <dd class="font-medium text-gray-900">{{ $formatPrice(subTotal) }}</dd>
                            </div>
                        </dl>
                        <div class="mt-9">
                            <button
                                type="submit"
                                class="w-full rounded-md border border-transparent bg-orange-700 py-3 px-4 font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-gray-50">
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
        <p v-else>
            You have yet to add any item to your cart. Please continue shopping at the Products page.
        </p>
    </ClientOnly>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

const store = useProductsStore()
const cart = store.cart
const subTotal = cart.reduce((acc, cur) => acc + cur.subTotal, 0)

const decrement = (e, item) => {
    const
        input = e.target.nextElementSibling,
        min = Number(input.getAttribute('min'))
    let value = Number(input.value)

    if (value == min) return
    value--
    input.value = value
    item.qty = value
}
const increment = (e, item) => {
    const
        input = e.target.previousElementSibling,
        max = Number(input.getAttribute('max'))
    let value = Number(input.value)

    if (value == max) return
    value++
    input.value = value
    item.qty = value
}
</script>

<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.number-input button:focus,
.number-input input:focus { outline: none !important; }

.luna-counter { @apply text-gray-900 h-full w-20 cursor-pointer outline-none flex items-center justify-center px-2; }
</style>