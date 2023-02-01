export const useAppStore = defineStore('app', {
    state: () => ({
        overlay: false,
        sheet: false,
        showBackToTop: false,
        navMobile: false
    }),
    actions: {
        toggleOverlay() { this.overlay = !this.overlay },
        activateOverlay() {
            this.overlay = true
        },
        removeOverlay() {
            this.overlay = false
            this.sheet = false
            this.navMobile = false
        },
        openSheet() { this.sheet = true },
        closeSheet() { this.sheet = false },
        toggleSheet() { this.sheet = !this.sheet },
        openNavMobile() { this.navMobile = true },
        closeNavMobile() { this.navMobile = false }
    },
    // persist: { storage: persistedState.localStorage }
})