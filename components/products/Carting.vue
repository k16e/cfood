<template>
    <div class="flex flex-row w-28 h-9 rounded-xl relative bg-transparent">
        <button
            @click="$decreaseFromCart($event, item)"
            type="button"
            class="luna-counter rounded-l-full bg-gray-200">
            <span class="sr-only">Decrease quantity</span>
            <Icon name="ri:subtract-line" size="19" aria-hidden="true"/>
        </button>
        <input
            type="number"
            name="counter"
            :value="item.qty"
            min="1"
            max="9"
            class="focus:outline-none text-center w-full font-semibold hover:text-black focus:text-black md:text-base flex items-center text-gray-700 border-0 border-y-2 border-gray-200" disabled>
        <button
            @click="$increaseToCart($event, item)"
            type="button"
            class="luna-counter rounded-r-full bg-gray-200">
            <span class="sr-only">Increase quantity</span>
            <Icon name="ri:add-line" size="19" aria-hidden="true"/>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})
</script>