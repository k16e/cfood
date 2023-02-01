<template>
    <Transition name="slide-up-full">
        <div
            v-if="app.sheet"
            class="fixed bottom-0 inset-x-0 bg-white min-h-[150px]">
            <div class="h-full overflow-y-auto">
                <Wave top="top-[-64px]" :stroke="false" :fill="`#fff`" flip-forward/>
                <div class="relative z-10 -translate-y-3">
                    <Transition name="flip">
                        <NavMobile v-if="app.navMobile"/>
                    </Transition>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>