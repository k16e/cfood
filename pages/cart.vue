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
                <form class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 pb-7">
                    <section aria-labelledby="cart-heading" class="lg:col-span-7">
                        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
                        <ul role="list" class="divide-y divide-gray-200">
                            <li v-for="(product, idx) in cart" :key="product.id + idx" class="flex py-5 sm:py-7">
                                <div class="flex-shrink-0">
                                    <img :src="product.image" :alt="product.name" class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
                                </div>
                                <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div class="flex justify-between">
                                                <h3 class="text-sm">
                                                    <span v-text="product.id" class="uppercase block text-xs font-medium tracking-wider text-gray-600"/>
                                                    <NuxtLink
                                                        :to="`/products/${$slugify(product.name)}-${product.id}`"
                                                        class="leading-tight text-2xl sm:text-xl truncate pb-1.5 text-orange-800 hover:text-orange-900">
                                                        {{ product.name }}
                                                    </NuxtLink>
                                                    <p v-text="product.description" class="text-sm line-clamp-2 opacity-70"/>
                                                </h3>
                                            </div>
                                            <p
                                                v-text="$formatPrice(product.price)"
                                                class="font-medium text-gray-800 text-lg mt-1.5"
                                            />
                                        </div>
                                        <div class="absolute top-0 right-0">
                                            <button type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Remove</span>
                                                <Icon name="material-symbols:close-rounded" size="18" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <!-- Order summary -->
                    <section aria-labelledby="summary-heading" class="mt-7 rounded-lg bg-gray-50 px-3 py-5 sm:p-5 lg:col-span-5 lg:mt-7 lg:p-8 lg:sticky lg:top-24 border border-gray-200">
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
                                class="w-full rounded-md border border-transparent bg-orange-600 py-3 px-4 font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50">
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
        <pre>
            {{ cart }}
        </pre>
    </ClientOnly>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

const store = useProductsStore()
const cart = store.cart
const subTotal = cart.reduce((acc, cur) => acc + cur.subTotal, 0)
</script>