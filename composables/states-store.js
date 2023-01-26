import { useStateStore } from '@/states.js'

export const useStatesStore = () => {
    const store = useStateStore()
    return store
}