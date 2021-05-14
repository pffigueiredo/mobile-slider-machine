import React from 'react'
import Menu from './MobileSlider/Menu'
import { useMobileSliderProvider } from './MobileSlider/MobileSliderProvider'

const Navbar = () => {

    const {useSliderState: [sliderOpen, setSliderOpen]} = useMobileSliderProvider();

    return <nav>
        <svg viewBox="0 0 100 80" width="40" height="40" onClick={() => setSliderOpen(true)}>
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
        <Menu />
    </nav>
}

export default Navbar
