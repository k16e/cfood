const routeList = () => {
    const routes = [
        { title: 'Products', to: '/products' },
        { title: 'Research', to: '/research' },
        { title: 'Studio', to: '/studio' },
        { title: 'Meet c.food', to: '/about' }
    ]

    return routes
}

const useRouteList = routeList

export default useRouteList