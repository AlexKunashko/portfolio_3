
const BTN_SEND = 'Отправить'
const BTN_GO_NEXT = `Далее`

export const stepForm = () => {
    let current = 1

    const prev = document.getElementById('prevBtn')
    const next = document.getElementById('nextBtn')

    prev.addEventListener('click', handleGoBack)
    next.addEventListener('click', handleGoNext)

    const slideNodes = document.querySelectorAll('[id^=quizz-slide-]')
    const slides = Array.from(slideNodes)

    const stepNodes = document.querySelectorAll('[id^=step-slide-]')
    const steps = Array.from(stepNodes)

    function changeCurrent(newValue) {
        const slide = slides[newValue - 1]
        const step = steps[newValue - 1]
        slides.forEach(node => node.classList.remove('active'))
        slide.classList.add('active')
        steps.forEach(node => node.classList.remove('active-step', 'back-step'))
        step.classList.add('active-step')
        steps.slice(0, newValue - 1).forEach(step => step.classList.add('back-step'))

        prev.classList[newValue <= 1 ? 'add' : 'remove']('nodisplay')

        if (newValue === slides.length) {
            next.textContent = BTN_SEND
            next.type = 'submit'
        } else if (next.textContent !== BTN_GO_NEXT) {
            next.textContent = BTN_GO_NEXT
            next.type = 'button'
        }

        current = newValue
    }

    function handleGoNext() {
        if (current < slideNodes.length)

            changeCurrent(current + 1)
    }

    function handleGoBack() {
        if (current > 1)

            changeCurrent(current - 1)
    }

    changeCurrent(1)
}