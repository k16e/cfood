export const useStoryblokStore = defineStore('storyblok', {
    state: () => ({
        story: {}
    }),
    actions: {
        async fetchStory(path) {
            const config = useRuntimeConfig()
            try {
                await useStoryblok(path, {
                    version: config.storyblokVersion,
                    resolve_links: 'story'
                })
                .then(res => this.story = res.value)
            } catch (err) { console.error(err) }
        }
    },
    persist: { storage: persistedState.localStorage }
})