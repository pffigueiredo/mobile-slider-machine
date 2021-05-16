import React from 'react';
import Box from '../shared-components/Box';
import { styled } from '../stitches.config';
import Menu from './MobileSlider/Menu';
import { useMobileSliderProvider } from './MobileSlider/MobileSliderProvider';

const NavbarWrapper = styled('nav', {
  padding: '$lg',
});

const Navbar = () => {
  const {
    useSliderState: [sliderOpen, setSliderOpen],
  } = useMobileSliderProvider();

  return (
    <NavbarWrapper>
      <Box clickable css={{ width: 'max-content' }}>
        <svg
          viewBox="0 0 100 80"
          width="40"
          height="40"
          onClick={() => setSliderOpen(true)}
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </Box>
    </NavbarWrapper>
  );
};

export default Navbar;
