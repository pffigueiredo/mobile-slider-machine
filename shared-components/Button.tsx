import { styled } from '../stitches.config';

export const Button = styled('button', {
  // base styles
  transition: 'transform 0.2s, filter 0.2s',

  '&:active': {
    transform: 'translateY(5px)',
    filter: 'brightness(90%)',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      cta: {
        padding: '$lg',
        backgroundColor: '$darkBlue',
        borderRadius: '$base',
        color: 'white',
        border: 'none',
        fontWeight: 'bold',
        boxShadow: '0 2px 6px 0 lightgrey',
        letterSpacing: '1px',
      },
    },
  },
});
