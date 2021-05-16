import React from 'react';
import { styled } from '../../stitches.config';

const OverlayWrapper = styled('div', {
  backgroundColor: 'rgb(188 188 188 / 20%)',
  width: 'calc(100%)',
  height: 'calc(100%)',

  position: 'absolute',
  top: '0',
  backdropFilter: 'blur(4px)',
});

const Overlay: React.FC = ({ children }) => {
  return <OverlayWrapper>{children}</OverlayWrapper>;
};

export default Overlay;
