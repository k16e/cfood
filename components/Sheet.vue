<template>
    <Transition name="slide-up-full">
        <div
            v-if="app.sheet"
            class="fixed bottom-0 inset-x-0 bg-white min-h-[150px]">
            <div class="h-full overflow-y-auto">
                <Wave top="top-[-64px]" :stroke="false" :fill="`#fff`" flip-forward/>
                <div class="p-3 py-5 mt-5">
                    <NavMobile v-if="app.navMobile"/>
                    <div v-else>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex tenetur quisquam inventore odio illo itaque unde nemo, est perferendis doloremque id saepe voluptates suscipit, ipsum accusantium consequuntur obcaecati distinctio cumque.
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
const app = useAppStore()
</script>