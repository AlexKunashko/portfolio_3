export const scrollHeader = () => {
    const header = document.getElementById('header')
    const headerLeft = document.getElementById('header-left')
    const headerRight = document.getElementById('header-right')
    const main = document.getElementById('main')

    const offsetTop = window.innerWidth > 768 ? main.clientHeight * 0.6 : 50

    const handleScroll = () => {
        const isScrolled = window.scrollY > offsetTop
        header.classList[!isScrolled ? 'remove' : 'add']('scroll-header')
        headerLeft.classList[!isScrolled ? 'remove' : 'add']('scroll-header-left')
        headerRight.classList[!isScrolled ? 'remove' : 'add']('scroll-header-right')
    }

    handleScroll()

    return handleScroll
} 
