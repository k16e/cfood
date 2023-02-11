<template>
    <Container center :max-width="'max-w-screen-2xl'"
        class="flex items-center justify-between h-full">
        <div class="flex items-center h-full translate-y-1.5">
            <div class="flex items-center">
                <NuxtLink
                    to="/"
                    @click="$closeMobileNavIfOpen()"
                    class="flex items-center justify-center rounded-full mr-5 luna-turn-off-active">
                    <span v-text="'c.food home'" class="sr-only"/>
                    <Logo class="w-14 h-14"/>
                </NuxtLink>
                <button
                    @click="toggleNavMobile"
                    class="luna-btn _is-square flex lg:hidden"
                    aria-label="Toggle navigation on small screen (mobile)">
                    <Icon name="material-symbols:menu-rounded" size="22" class="text-orange-700"/>
                </button>
            </div>
            <nav class="sr-only lg:not-sr-only flex !h-[95%] items-center">
                <h2 v-text="'Main navigation'" class="sr-only"/>
                <ul class="flex items-center h-full w-full space-x-3">
                    <NavList :list="routes" desktop/>
                </ul>
            </nav>
        </div>
        <div class="flex items-center space-x-3 translate-y-[-5px] font-medium">
            <ProductsWishlistLink/>
            <ProductsCartLink/>
            <ProductsUserMenu/>
        </div>
    </Container>
</template>

<script setup>
const app = useAppStore()
const routes = useRouteList()

const toggleNavMobile = () => {
    if (app.sheet) {
        app.removeOverlay()
    } else {
        app.openSheet()
        app.activateOverlay()
        if (app.showBackToTop) app.showBackToTop = false
        app.openNavMobile()
    }
}
</script>