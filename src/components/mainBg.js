export default () => {
    const main = document.getElementById('main-bg')

    return () => {
        const size = ((window.scrollY / main.clientHeight) / 4) + 1
        main.style = `transform: scale(${size});`
    }
}