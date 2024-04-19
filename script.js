const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24


function init() {
    const $countdown = document.querySelector('#count')
    if (!$countdown) return

    const $days = document.querySelector('#days')
    const $hours = document.querySelector('#hours')
    const $minutes = document.querySelector('#minutes')
    const $seconds = document.querySelector('#seconds')

    const timestamp = 1719781200000
    if (!timestamp) return

    const date = new Date(+timestamp).getTime()

    const formatTime = (time) => {
        return Math.floor(time).toString().padStart(2, "0")
    }


    function updateCountdown() {
        const now = Date.now()
        const diff = date - now

        if ($days instanceof HTMLElement) {
            $days.innerText = formatTime(diff / DAY)
        }
        if ($hours instanceof HTMLElement) {
            $hours.innerText = formatTime((diff % DAY) / HOUR)
        }
        if ($minutes instanceof HTMLElement) {
            $minutes.innerText = formatTime((diff % HOUR) / MINUTE)
        }
        if ($seconds instanceof HTMLElement) {
            $seconds.innerText = formatTime((diff % MINUTE) / SECOND)
        }

    }

    setInterval(updateCountdown, SECOND)
}
init()