<template>
    <Reveal>
        <Container padX center padTGrow>
            <PageHeader
                tag="h1" content="Your wishlist!"
                link="/products" linkIcon="ic:baseline-arrow-back"
                linkText="Products"
            />
            <ClientOnly>
                <TransitionGroup v-if="wishlist.length" tag="ul" name="flip"
                    class="relative px-3 bg-white lg:bg-transparent rounded-xl border border-gray-200 lg:border-0 divide-y divide-gray-200 lg:grid lg:grid-cols-2 lg:divide-none lg:gap-5">
                    <li
                        v-for="(item, idx) in wishlist"
                        :key="item.sku"
                        class="relative flex py-5 sm:py-7 lg:bg-white lg:rounded-xl lg:p-5 lg:border lg:border-gray-200">
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
                                                :to="`/products/${$slugify(item.name)}-${item.id}`"
                                                v-text="item.name"
                                                class="focus:text-orange-500 hover:text-orange-500"
                                            />
                                        </Heading>
                                        <p v-text="item.description" class="text-sm line-clamp-2 opacity-70"/>
                                    </div>
                                    <p class="pt-3">
                                        <span class="font-medium text-gray-800 text-lg mt-1.5">
                                            {{ $formatPrice(item.price) }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="-mt-1.5 sm:-mt-3 lg:-mt-1.5 absolute top-0 right-0 z-10">
                                <button
                                    @click="removeFromWishlist($event, idx)"
                                    type="button"
                                    class="luna-btn _is-neutral _is-square text-gray-400 hover:text-red-500 focus:text-red-500">
                                    <span class="sr-only">Remove</span>
                                    <Icon name="material-symbols:close-rounded" size="22" aria-hidden="true"/>
                                </button>
                            </div>
                            <div class="absolute -bottom-1.5 right-0 z-10">
                                <button
                                    @click="productsStore.addToCart(item)"
                                    class="flex items-center p-3 sm:p-2 rounded-full bg-orange-600 text-white">
                                    <Icon name="ri:shopping-cart-fill" size="18" class="pointer-events-none"/>
                                    <span v-text="'Add to cart'" class="sr-only"/>
                                </button>
                            </div>
                        </div>
                    </li>
                </TransitionGroup>
                <Transition name="slide-up" mode="out-in">
                    <p v-if="!wishlist.length" class="text-xl max-w-2xl">
                        You're yet to add items to your wishlist. Go shopping
                        <NuxtLink to="/products">our Products.</NuxtLink>
                    </p>
                </Transition>
            </ClientOnly>
        </Container>
    </Reveal>
</template>

<script setup>
const productsStore = useProductsStore()
const { wishlist } = productsStore
const removeFromWishlist = (e, itemIdx) => wishlist.splice(itemIdx, 1)

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>