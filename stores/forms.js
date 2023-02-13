export const useFormsStore = defineStore('forms', {
    state: () => ({
        sent: false,
        sending: false,
        errorMessage: ''
    })
})