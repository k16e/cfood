<template>
    <Reveal>
        <Container padX center padTGrow>
            <PageHeader
                tag="h1" content="Your cart!"
                link="/products" linkIcon="ic:baseline-arrow-back"
                linkText="Products"
            />
            <ClientOnly>
                <form
                    v-if="cart.length"
                    @submit.prevent="proceedToCheckout()"
                    class="relative bg-white px-3 sm:px-5 rounded-xl border border-gray-200 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 pb-7">
                    <TransitionGroup tag="ul" name="flip" class="lg:col-span-7 divide-y divide-gray-200 relative">
                        <li v-for="(item, idx) in cart" :key="item.sku" class="flex py-5 sm:py-7">
                            <NuxtImg
                                :src="item.image"
                                :alt="item.name"
                                preset="thumbnail"
                                class="flex-shrink-0 h-32 w-32 object-cover sm:h-48 sm:w-48"
                            />
                            <div class="relative ml-3 sm:ml-5 flex-1">
                                <div class="flex justify-between flex-col">
                                    <div>
                                        <div class="flex flex-col justify-between">
                                            <Heading>
                                                <NuxtLink
                                                    :to="`/products/${$slugify(item.name)}-${item.sku}`"
                                                    v-text="item.name"
                                                    class="focus:text-orange-500 hover:text-orange-500"
                                                />
                                            </Heading>
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
                                        <ProductsCarting :item="item"/>
                                        <p class="font-medium text-gray-800">
                                            {{ $formatPrice(item.subTotal) }}
                                        </p>
                                    </div>
                                </div>
                                <div class="absolute top-0 right-0">
                                    <button
                                        @click="$removeFromCart($event, idx, cart)"
                                        type="button"
                                        class="luna-btn _is-neutral _is-square text-gray-400 hover:text-red-500 focus:text-red-500">
                                        <span class="sr-only">Remove</span>
                                        <Icon name="material-symbols:close-rounded" size="22" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </TransitionGroup>
                    <section aria-labelledby="summary-heading" class="mt-3 rounded-lg bg-gray-50 px-3 py-5 sm:p-5 lg:col-span-5 lg:mt-7 lg:p-8 lg:sticky lg:top-24 border border-gray-200">
                        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>
                        <dl class="mt-6 space-y-4">
                            <div class="flex items-center justify-between">
                                <dt class="text-gray-600">Subtotal</dt>
                                <dd class="font-medium text-gray-900">
                                    {{ $formatPrice(cart.reduce((acc, cur) => acc + cur.subTotal, 0)) }}
                                </dd>
                            </div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">Order total</dt>
                                <dd class="font-medium text-gray-900">
                                    {{ $formatPrice(cart.reduce((acc, cur) => acc + cur.subTotal, 0)) }}
                                </dd>
                            </div>
                        </dl>
                        <div class="mt-9">
                            <button
                                type="submit"
                                class="w-full rounded-md border border-transparent bg-orange-700 py-3 px-4 font-medium text-white shadow-sm hover:bg-orange-600">
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>
                <Transition name="slide-up" mode="out-in">
                    <p v-if="!cart.length" class="text-xl max-w-2xl">
                        You're yet to add items to your cart. Go shopping
                        <NuxtLink to="/products">our Products</NuxtLink>
                        to do so.
                    </p>
                </Transition>
            </ClientOnly>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
const { cart } = productsStore

const router = useRouter()
const proceedToCheckout = () => router.push({ path: '/shop/checkout' })
</script>