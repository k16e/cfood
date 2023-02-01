<template>
    <Container center padX :max-width="'max-w-screen-2xl'">
        <div
            class="grid grid-cols-12 gap-y-7 sm:gap-y-9 md:gap-12 lg:gap-16 md:-translate-x-12 lg:-translate-x-5 xl:translate-x-12 mb-7 sm:mb-9 md:mb-12 lg:mb-16">
            <div class="col-span-full md:col-span-6 xl:col-span-5">
                <Heading
                    tag="h2" font="font-sans" color="text-white" weight="font-bold"
                    class="luna-decorative text-4xl sm:text-5xl lg:text-7xl !leading-none text-right">
                    <span class="block">Food that</span>
                    <em class="_is-decorated block italic">
                        love us back!
                    </em>
                </Heading>
            </div>
            <div class="col-span-full md:col-span-6 self-center">
                <div class="text-white opacity-80 pr-5 prose">
                    <p>
                        <strong>c.food</strong> is a condiments-first food researcher and producer, coriandered into company in kb's home kitchen, fondly called c.food Studio. As a studio and people, we want to produce only food that <em>love us back</em>.
                    </p>
                </div>
            </div>
        </div>
        <div class="text-white text-center border-t border-opacity-20 border-white max-w-sm sm:max-w-lg mx-auto">
            <p class="opacity-60 text-xs pt-3">
                &copy; {{ $year() }} c.food Studio. All rights reserved.
            </p>
        </div>
    </Container>
</template>

<script setup>

</script>