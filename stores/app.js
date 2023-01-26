export const useAppStore = defineStore('app', {
    state: () => ({
        overlay: false,
        sheet: false
    }),
    actions: {},
    persist: { storage: persistedState.localStorage }
})