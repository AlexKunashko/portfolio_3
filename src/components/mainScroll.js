import MainIntersctionObserver from './MainIntersectionObserver'


export default (handlers) => {
    const main = document.getElementById('main')

    const handleScroll = (e) => {
        handlers.forEach(handler => handler(e))
    }

    const observer = new MainIntersctionObserver(main, (entry) => {
        if (entry.isIntersecting) {
            window.addEventListener('scroll', (handleScroll))
        } else window.removeEventListener('scroll', handleScroll)
    }, 0)

    observer.observe()
}