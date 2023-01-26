<template>
    <Transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0">
        <div
            @click.self="app.removeOverlay"
            v-show="app.overlay"
            class="fixed inset-0 bg-gray-800 bg-opacity-80 ease duration-500 transition-opacity">
            <slot>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis optio, iusto suscipit ipsa blanditiis? Accusamus ab non maiores magni placeat, magnam aspernatur voluptate voluptas cumque alias est suscipit perspiciatis.
            </slot>
        </div>
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>

<style lang="scss" scoped>

</style>