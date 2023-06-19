import { slider } from './slider'
import { stepForm } from './stepForm'
import { scrollHeader } from './scrollHeader'
import { animate } from './animate'
import mainBg from './mainBg'
import mainScroll from './mainScroll'

export default () =>
    document.addEventListener('DOMContentLoaded', () => {

        const bgScrollHandler = mainBg()
        const headerScrollHandler = scrollHeader()

        mainScroll([
            bgScrollHandler,
            headerScrollHandler
        ])

        slider()
        stepForm()
        animate()
    })
