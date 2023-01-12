export const useOrderCompletion = (formStatus, order, customer, shippingRates, subTotal, store, cart, reference) => {
    const router = useRouter()

    const completeOrder = async () => {
        const supabase = useSupabaseClient()

        formStatus.sending.value = true
        order.push({
            first_name: customer.first_name.value,
            last_name: customer.last_name.value,
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
            const { data: customer_data, error: customer_error } = await supabase
                .from('customers')
                .upsert([
                    {
                        first_name: order[0].first_name,
                        last_name: order[0].last_name,
                        phone: order[0].phone,
                        email: order[0].email
                    }
                ], { onConflict: 'email', ignoreDuplicates: false })
            const { data: order_data, error: order_error } = await supabase
                .from('orders')
                .insert([
                    {
                        customer_name: order[0].first_name + ' ' + order[0].last_name,
                        customer_email: order[0].email,
                        products: order[0].orders,
                        sub_total: order[0].subTotal,
                        total: order[0].total,
                        delivery_address: order[0].address,
                        delivery_zone: order[0].shippingZone,
                        shipping: order[0].shipping,
                        reference: reference
                    }
                ])

            formStatus.sending.value = false
            if (order_error) throw order_error
            if (customer_error) throw customer_error

        } catch (err) {
            console.log(err)
        } finally {
            formStatus.sent.value = true
            store.$patch({ cart: [], order: [] })
            router.push({ path: '/shop/success' })
            // setTimeout(() => {
            //     globalThis.location.reload()
            // }, 500);
        }
    }

    return { completeOrder }
}