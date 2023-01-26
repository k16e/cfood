<template>
    <Container center :max-width="'max-w-screen-2xl'"
        class="flex items-center justify-between h-full">
        <div class="flex items-center h-full translate-y-2.5">
            <div class="flex items-center">
                <NuxtLink
                    to="/"
                    class="flex items-center justify-center rounded-full mr-5 luna-turn-off-active">
                    <span v-text="'c.food home'" class="sr-only"/>
                    <Logo/>
                </NuxtLink>
                <ClientOnly>
                    <button
                        v-if="!isLargeScreen"
                        class="luna-btn _is-square flex lg:hidden">
                        <Icon name="material-symbols:menu-rounded" size="22" class="text-orange-700"/>
                    </button>
                </ClientOnly>
            </div>
            <nav class="sr-only lg:not-sr-only flex !h-[95%] items-center">
                <h2 v-text="'Main navigation'" class="sr-only"/>
                <ul class="flex items-center h-full w-full space-x-3">
                    <li
                        v-for="(route, idx) in routes"
                        :key="route.title + idx"
                        class="flex items-center h-full">
                        <NuxtLink
                            :to="route.to"
                            class="flex items-center h-full py-1 px-5 rounded-full focus:bg-orange-50 hover:bg-orange-50 font-medium text-orange-700"
                            :class="{ 'parent-active': isParentRoute(route.to) }">
                            {{ route.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="flex items-center space-x-3 -translate-y-0.5 font-medium">
            <ProductsWishlistLink/>
            <ProductsCartLink/>
            <ProductsUserMenu/>
        </div>
    </Container>
</template>

<script setup>
const routes = [
    { title: 'Products', to: '/products' },
    { title: 'Research', to: '/research' },
    { title: 'Studio', to: '/more/studio' },
    { title: 'Meet c.food', to: '/about' }
]
const currentRoute = useRoute()
const isParentRoute = path => currentRoute.path.startsWith(path)
const { isLargeScreen } = useMediaQueryDefs()
</script>