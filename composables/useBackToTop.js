const backToTop = (app) => {
    const footer = document.getElementById('footer')
    const footerHeight = Math.ceil(footer.getBoundingClientRect().height)
    const root = document.documentElement
    const footerVisible = footer.getAttribute('data-visible')
    let divisor

    if (pageYOffset > 640) {
        app.showBackToTop = true
        const backToTop = document.getElementById('back-to-top')
        const bttHeigt = backToTop?.getBoundingClientRect()?.height || 56
        divisor = Math.round(bttHeigt)
    }
    else app.showBackToTop = false

    if (footerVisible === 'true') root.style.setProperty('--back-to-top-translate', ((footerHeight * -1) + divisor) + 'px')
    else root.style.setProperty('--back-to-top-translate', 0)
}

const useBackToTop = () => {
    return { backToTop }
}

export default useBackToTop