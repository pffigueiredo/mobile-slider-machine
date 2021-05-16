import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useMobileSliderProvider } from './MobileSliderProvider';
import Overlay from './Overlay';
import Slider from './Slider';

const variants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } },
};

const Menu = () => {
  const {
    useSliderState: [sliderOpen, setSliderOpen],
  } = useMobileSliderProvider();

  return (
    <AnimatePresence>
      {sliderOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          <Overlay>
            <Slider />
          </Overlay>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
