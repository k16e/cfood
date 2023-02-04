<template>
    <Container center padX :max-width="'max-w-screen-2xl'">
        <div
            class="grid grid-cols-12 gap-y-7 sm:gap-y-9 md:gap-12 lg:gap-16 md:-translate-x-12 lg:-translate-x-5 xl:translate-x-12 mb-7 sm:mb-9 md:mb-12 lg:mb-16">
            <div class="col-span-full md:col-span-6 xl:col-span-5">
                <Heading
                    tag="h2" font="font-sans" color="text-white" weight="font-bold"
                    class="luna-block-heading text-right">
                    <span class="block">Food that</span>
                    <em class="block italic">
                        love us back!
                    </em>
                </Heading>
            </div>
            <div class="col-span-full md:col-span-6 luna-prose prose lg:prose-base max-w-none pr-5">
                <p>
                    <strong>c.food</strong> is a condiments-first food researcher and deloper, coriandered into company in kb's home kitchen, fondly called <NuxtLink to="/studio">c.food Studio</NuxtLink>. As a studio and people, we only do food that <em>love us back</em>.
                </p>
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