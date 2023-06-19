import MainIntersectionObserver from './MainIntersectionObserver'

export const animate = () => {
    const items = document.querySelectorAll('[data-anim]')

    if (sessionStorage.getItem('visited')) {
        return items.forEach((item) => item.removeAttribute('data-anim'))
    }

    sessionStorage.setItem('visited', 'true')

    const grouped = group(items)
    grouped.forEach((group) => {
        const sectionSelector = group.id
        const section = document.querySelector(sectionSelector)
        if (section) {
            const observer = new MainIntersectionObserver(
                section,
                (entry) => {
                    if (entry.isIntersecting) {
                        group.items.forEach((item) => {
                            const delay = item.order * 400
                            const node = item.node
                            setTimeout(() => {
                                node.removeAttribute('data-anim')
                                node.classList.add(...item.animation)
                            }, delay)
                        })
                    }
                },
                0.3,
            )
            observer.observe()
        }
    })
}

const group = (items) => {
    const grouped = []
    items.forEach((item) => {
        const id = item.getAttribute('data-anim-group')
        const order = Number(item.getAttribute('data-anim-order') || 1)
        const animation = item.getAttribute('data-anim')
        const animationClass = ['animate__animated', `animate__${animation}`]
        const index = grouped.findIndex((item) => item.id === id)
        if (index > -1) {
            return grouped[index].items.push({
                node: item,
                order,
                animation: animationClass,
            })
        }

        grouped.push({
            id: id || Date.now(),
            items: [
                {
                    node: item,
                    order,
                    animation: animationClass,
                },
            ],
        })
    })

    return grouped
}
