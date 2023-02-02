<template>
    <Transition name="slide-up-full">
        <div
            v-if="app.sheet"
            class="fixed bottom-0 inset-x-0 bg-white min-h-[150px]">
            <Wave top="top-[-24px]" max-height="max-h-[64px]" :stroke="false" :fill="`#fff`" flip-forward/>
            <Transition name="flip" appear>
                <NavMobile v-if="app.navMobile"/>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>