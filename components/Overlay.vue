<template>
    <Transition>
        <div
            ref="overlay"
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <slot>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis optio, iusto suscipit ipsa blanditiis? Accusamus ab non maiores magni placeat, magnam aspernatur voluptate voluptas cumque alias est suscipit perspiciatis.
            </slot>
        </div>
    </Transition>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>