const countdown = (duration, placement) => {
    let timer = duration, seconds

    setInterval(() => {
        seconds = parseInt(timer % 60, 10)
        seconds = seconds < 10 ? '0' + seconds : seconds

        placement.textContent = seconds

        if (--timer < 0) timer = 0
    }, 1000)
}

const useCountdown = () => {
    return { countdown }
}

export default useCountdown