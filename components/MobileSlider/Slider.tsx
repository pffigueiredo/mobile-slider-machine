import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Box from '../../shared-components/Box';
import { styled } from '../../stitches.config';
import FirstLevel from './MenuLevels/FirstLevel';
import SecondLevel from './MenuLevels/SecondLevel';
import ThirdLevel from './MenuLevels/ThirdLevel';
import { useMobileSliderProvider } from './MobileSliderProvider';

const SliderWrapper = styled(motion.div, {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 15%',
});

const IconWrapper = styled(Box, {
  fontSize: '$xl',
  backgroundColor: 'white',
  height: 'fit-content',
  px: '$sm',
  borderRadius: '$base',
  marginTop: '$base',
});

const sliderVariants = {
  open: {
    x: '0',
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  closed: {
    x: '-100%',
    transition: {
      duration: 0.3,
    },
  },
};

const Slider: React.FC = () => {
  const {
    useSliderState: [sliderOpen, setSliderOpen],
    machine: [context, send],
  } = useMobileSliderProvider();

  return (
    <AnimatePresence>
      {sliderOpen && (
        <SliderWrapper
          variants={sliderVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <Box css={{ position: 'relative', overflowX: 'hidden' }}>
            <FirstLevel />
            <SecondLevel />
            <ThirdLevel />
          </Box>

          <Box
            css={{ display: 'flex', justifyContent: 'center' }}
            onClick={() => {
              send({ type: 'RESET' });
              setSliderOpen(false);
            }}
          >
            <IconWrapper>X</IconWrapper>
          </Box>
        </SliderWrapper>
      )}
    </AnimatePresence>
  );
};

export default Slider;
