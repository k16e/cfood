<template>
    <p>
        <label :for="labelFor" class="luna-label flex cursor-pointer">
            <span v-text="labelText"/>
            <span v-if="required" v-text="`*`" class="text-xs block -translate-y-0.5 translate-x-0.5 text-orange-700"/>
        </label>
        <input
            :type="type"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :required="required"
            :value="modelValue"
            :pattern="pattern"
            @input="$emit('update:modelValue', $event.target.value)"
            class="luna-input"
        />
    </p>
</template>

<script setup>
const props = defineProps({
    labelFor: { type: String, default: '' },
    labelText: { type: String, default: '' },

    type: { type: String, default: 'text' },
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    modelValue: { type: String },
    placeholder: { type: String, default: '' },
    autocomplete: { type: String, default: '' },
    pattern: { type: String },
    required: { type: Boolean, default: false }
})
const emits = defineEmits(['update:modelValue'])
</script>