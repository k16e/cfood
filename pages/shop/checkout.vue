<template>
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
                                        <div>
                                            <label for="customer_name" class="luna-label">Name:</label>
                                            <input v-model="customer.customer_name.value" required type="text" id="customer_name" autocomplete="given-name" class="luna-input"/>
                                        </div>
                                        <div>
                                            <label for="email" class="luna-label">Email:</label>
                                            <input v-model="customer.email.value" type="email" id="email" autocomplete="email" class="luna-input"/>
                                        </div>
                                        <div class="lg:col-span-2">
                                            <label for="phone" class="luna-label">Phone number:</label>
                                            <input v-model="customer.phone.value" required type="text" id="phone" autocomplete="tel" class="luna-input"/>
                                        </div>
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
                                    class="mt-9 w-full rounded-md border border-transparent bg-orange-700 py-3 px-4 font-medium text-white shadow-sm hover:bg-orange-600">
                                    Proceed to pay
                                </button>
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
import { ref } from 'vue'

const store = useProductsStore()
const cart = store.cart
const subTotal = cart.reduce((acc, cur) => acc + cur.subTotal, 0)

await store.fetchShippingRates()
const shippingRates = ref(store.shippingRates)
const shipping = ref(shippingRates.value[0].price)
const customer = {
    customer_name: ref(''),
    email: ref(''),
    phone: ref(''),
    address: ref('')
}
const order = store.order

const router = useRouter()
const proceedToPay = async () => {
    const supabase = useSupabaseClient()
    order.push({
        customer_name: customer.customer_name.value,
        email: customer.email.value,
        phone: customer.phone.value,
        address: customer.address.value,
        shipping: shipping.value,
        shippingZone: (shippingRates.value.find(el => el.price == shipping.value).distance),
        orders: cart,
        subTotal: subTotal,
        total: (subTotal + shipping.value)
    })
    try {
        const { data: order_data, error: order_error } = await supabase
            .from('orders')
            .insert([
                {
                    customer_name: order[0].customer_name,
                    products: order[0].orders,
                    sub_total: order[0].subTotal,
                    total: order[0].total,
                    delivery_address: order[0].address,
                    delivery_zone: order[0].shippingZone,
                    shipping: order[0].shipping
                }
            ])
        if (order_error) throw order_error
        const { data: customer_data, error: customer_error } = await supabase
            .from('customers')
            .upsert([
                {
                    name: order[0].customer_name,
                    phone: order[0].phone,
                    email: order[0].email
                }
            ], { onConflict: 'email', ignoreDuplicates: false })
        if (customer_error) throw customer_error
    } catch (err) {
        console.log(err)
    } finally {
        console.log(order)
        router.push({ path: '/shop/success' })
    }
}
</script>