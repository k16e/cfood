export const useStoryblokStore = defineStore('storyblok', {
    state: () => ({
        story: {},
        fallbackComponent: 'page'
    }),
    actions: {
        async fetchStory(path) {
            const config = useRuntimeConfig()
            try {
                const data = await useAsyncStoryblok(path, {
                    version: config.storyblokVersion,
                    resolve_links: 'story'
                })
                .then(data => {
                    this.story = data.value
                    this.fallbackComponent = this.story.content.component
                })
            } catch (err) { console.error(err) }
        }
    },
    persist: { storage: persistedState.localStorage }
})