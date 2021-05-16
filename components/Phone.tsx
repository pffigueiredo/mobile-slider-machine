import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Box from '../shared-components/Box';
import { Button } from '../shared-components/Button';
import { keyframes, styled } from '../stitches.config';
import Menu from './MobileSlider/Menu';
import { MobileSliderProvider } from './MobileSlider/MobileSliderProvider';
import Navbar from './Navbar';

const AnimatedPhone = styled(motion.div, {
  padding: '$lg',
  borderRadius: '$lg',
  backgroundColor: 'lightgray',
  position: 'absolute',
});

const PhoneScreen = styled(motion.div, {
  width: '100%',
  height: '100%',
  borderRadius: '$base',
  position: 'relative',
  overflow: 'hidden',
});

const fadeOut = keyframes({
  '0%': { backgroundColor: '$darkBlue', opacity: 1 },
  '75%': { backgroundColor: 'lightgray', opacity: 1 },
  '100%': { backgroundColor: 'lightgray', opacity: 0 },
});

const PhoneButton = styled(Button, {
  '&.mobile-open': {
    animation: `${fadeOut} 500ms forwards`,
  },
});

const PhoneVariants = {
  open: {
    opacity: 1,
    width: 'min(80vw, 310px)',
    height: 'min(80vh, 800px)',
    transition: {
      delayChildren: 1,
      opacity: { duration: 1 },
      width: { delay: 0.3, type: 'spring', stiffness: 100 },
      height: { delay: 0.6, type: 'spring', stiffness: 100 },
    },
  },
  closed: {
    opacity: 0,
    width: '0px',
    height: '100px',
    transition: {
      opacity: { duration: 0.3, delay: 0.3 },
      width: { delay: 0.3, type: 'spring', stiffness: 100 },
      height: { type: 'spring', stiffness: 100 },
    },
  },
};

const PhoneScreenVariants = {
  open: {
    backgroundColor: '#fff',
  },
  closed: {
    backgroundColor: '#d3d3d3',
  },
};

const Phone = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      variant="flexCenter"
      css={{ backgroundColor: '$lightBlue', width: '100vw', height: '100vh' }}
    >
      <AnimatedPhone
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={PhoneVariants}
      >
        <PhoneScreen variants={PhoneScreenVariants}>
          <MobileSliderProvider>
            {isOpen && (
              <>
                <Navbar />
                <Box
                  variant="flexCenter"
                  shape="circle"
                  clickable
                  css={{
                    position: 'absolute',
                    top: '20px',
                    right: '16px',
                    padding: '$base',
                    size: '2em',
                    color: 'grey',
                    fontWeight: 'bold',
                    backgroundColor: 'lightgrey',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  X
                </Box>
                <Menu />
              </>
            )}
          </MobileSliderProvider>
        </PhoneScreen>
      </AnimatedPhone>
      <PhoneButton
        variant="cta"
        className={isOpen && 'mobile-open'}
        onMouseUp={() => setIsOpen(true)}
        css={{ position: 'relative' }}
      >
        Make it mobile
      </PhoneButton>
    </Box>
  );
};

export default Phone;
