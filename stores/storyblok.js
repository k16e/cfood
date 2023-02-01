export const useStoryblokStore = defineStore('storyblok', {
    state: () => ({
        story: {},
        fallbackComponent: 'page'
    }),
    actions: {
        async fetchStory(path) {
            const config = useRuntimeConfig()
            try {
                await useStoryblok(path, {
                    version: config.storyblokVersion,
                    resolve_links: 'story'
                })
                .then(result => {
                    this.story = result.value
                    this.fallbackComponent = this.story.content.component
                })
            } catch (err) { console.error(err) }
        }
    },
    persist: { storage: persistedState.localStorage }
})