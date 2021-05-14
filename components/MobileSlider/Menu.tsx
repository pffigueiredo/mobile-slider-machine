import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import Portal from '../Portal';
import { useMobileSliderProvider } from './MobileSliderProvider';
import Overlay from './Overlay';
import Slider from "./Slider"


const variants = {
    open: { opacity: 1, transition: { duration: .3 } },
    closed: { opacity: 0, transition: { duration: .3, delay: .3 } },
}

const Menu = () => {
    const {useSliderState: [sliderOpen, setSliderOpen]} = useMobileSliderProvider();

    return <Portal>
        <AnimatePresence>
            {sliderOpen &&
                <motion.div key="modal"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={variants}>
                    <Overlay>
                        <Slider />
                    </Overlay>
                </motion.div>
            }
        </AnimatePresence>
    </Portal>
}

export default Menu
