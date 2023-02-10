const backToTop = (app) => {
    const footer = document.getElementById('footer') || null
    let footerHeight, root, footerVisible, divisor
    if (footer) {
        footerHeight = Math.ceil(footer.getBoundingClientRect().height)
        root = document.documentElement
        footerVisible = footer.getAttribute('data-visible')
    }

    if (pageYOffset > 640) {
        app.showBackToTop = true
        const backToTop = document.getElementById('back-to-top')
        const bttHeigt = backToTop?.getBoundingClientRect()?.height || 56
        divisor = Math.round(bttHeigt)
    }
    else app.showBackToTop = false

    if (footer) {
        if (footerVisible === 'true') root.style.setProperty('--back-to-top-translate', ((footerHeight * -1) + divisor) + 'px')
        else root.style.setProperty('--back-to-top-translate', 0)
    } else return
}

const useBackToTop = () => {
    return { backToTop }
}

export default useBackToTop