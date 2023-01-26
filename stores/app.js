export const useAppStore = defineStore('app', {
    state: () => ({
        overlay: false,
        sheet: false
    }),
    actions: {
        toggleOverlay() { this.overlay = !this.overlay },
        activateOverlay() { this.overlay = true },
        removeOverlay() {
            this.overlay = false
            this.sheet = false
        },
        openSheet() { this.sheet = true },
        closeSheet() { this.sheet = false },
        toggleSheet() { this.sheet = !this.sheet }
    },
    persist: { storage: persistedState.localStorage }
})