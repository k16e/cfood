<template>
    <div class="max-w-screen-lg mx-auto px-3 sm:px-5">
        <div class="p-3 sm:p-5 pt-5 lg:pt-9 pb-7 sm:pb-9 lg:pb-12 flex items-center justify-between">
            <h1 class="font-light text-orange-700 text-3xl sm:text-5xl lg:text-5xl truncate">Your wishlist!</h1>
            <NuxtLink to="/products" class="luna-btn text-gray-700">
                <Icon name="ic:baseline-arrow-back" size="22" class="mr-1.5 text-orange-700"/>
                <span>Products</span>
            </NuxtLink>
        </div>
        <section
            v-if="wishlist.length >= 1"
            aria-labelledby="wishlist-heading"
            class="px-3 bg-white rounded-xl border border-gray-200">
            <h2 id="wishlist-heading" class="sr-only">Products in your wishlist</h2>
            <ul role="list" class="divide-y divide-gray-200">
                <li v-for="(item, idx) in wishlist" :key="item.id + idx" class="flex py-5 sm:py-7">
                    <div class="flex-shrink-0">
                        <img :src="item.image" :alt="item.name" class="h-32 w-32 object-cover sm:h-48 sm:w-48"/>
                    </div>

                    <div class="relative ml-3 sm:ml-5 flex-1">
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
                                    <span class="font-medium text-gray-800 text-lg mt-1.5">
                                        {{ $formatPrice(item.price) }}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <button
                            @click="removeFromWishlist($event, idx)"
                            type="button"
                            class="inline-flex text-gray-400 hover:text-gray-500 pl-1.5 pb-1.5 -mt-1.5 lg:-mt-5 absolute top-0 right-0 z-10">
                            <span class="sr-only">Remove</span>
                            <Icon name="material-symbols:close-rounded" size="22" aria-hidden="true"/>
                        </button>
                        <button
                            @click="addToCart(item)"
                            class="flex items-center p-3 sm:p-2 rounded-full bg-orange-600 text-white absolute -bottom-1.5 right-0 z-10">
                            <Icon name="ri:shopping-cart-fill" size="18" class="pointer-events-none"/>
                            <span v-text="'Add to cart'" class="sr-only"/>
                        </button>
                    </div>
                </li>
            </ul>
        </section>
        <p v-else class="px-3 sm:px-5">
            You have yet to add any item to your wishlist. Please continue shopping at
            <NuxtLink to="/products">the Products page.</NuxtLink>
        </p>
    </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'

const store = useProductsStore()
const wishlist = await store.wishlist
const removeFromWishlist = (e, itemIdx) => wishlist.splice(itemIdx, 1)
const addToCart = await store.addToCart

useHead({
    title: 'c.food Products (All Condiments & foodstuff)',
    meta: [
        { name: 'description', content: 'All condiments and foodstuff from c.food' }
    ]
})
</script>