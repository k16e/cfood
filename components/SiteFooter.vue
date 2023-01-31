<template>
    <Container center padX :max-width="'max-w-screen-2xl'">
        <div class="grid grid-cols-2 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-14">
            <div class="col-span-2 lg:col-span-6">
                <Heading
                    tag="h2" font="font-sans" color="text-white" weight="font-bold"
                    class="luna-decorative text-5xl md:text-6xl lg:text-8xl !leading-none text-right">
                    <span class="block">Food that</span>
                    <em class="_is-decorated block italic">
                        love us back!
                    </em>
                </Heading>
            </div>
            <div class="col-span-2 lg:col-span-5 self-center">
                <div class="text-white opacity-80 text-lg pr-5 prose">
                    <p>
                        <b class="font-bold">c.food</b> is a condiments-first food researcher and producer, curried and coriandered into company in kb's home kitchen, fondly called c.food Studio.
                    </p>
                    <p>
                        As a studio and people, we want to produce foods that <em>love us back</em>, us as in all of us.
                    </p>
                </div>
            </div>
        </div>
        <p class="mt-7 sm:mt-9 opacity-50 text-sm text-white">
            &copy; {{ $year() }} c.food Studio. All rights reserved.
        </p>
    </Container>
</template>

<script setup>

</script>