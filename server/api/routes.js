export default defineEventHandler(async () => {
    const data = [
        { title: 'Products', to: '/products' },
        { title: 'Research', to: '/research' },
        { title: 'Studio', to: '/more/studio' },
        { title: 'Meet c.food', to: '/about' }
    ]
    return { data }
})