import { useMediaQuery } from '@vueuse/core'

export const useMediaQueryDefs = () => {
    const
        isMediumScreen = useMediaQuery('(min-width: 768px)'),
        isLargeScreen = useMediaQuery('(min-width: 1024px)'),
        isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

    return {
        isMediumScreen,
        isLargeScreen,
        isPreferredDark
    }
}