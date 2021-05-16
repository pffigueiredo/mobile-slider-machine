import { styled } from '../stitches.config';

const Box = styled('div', {
  variants: {
    variant: {
      flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    shape: {
      circle: {
        borderRadius: '50%',
      },
    },
    clickable: {
      true: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
});

export default Box;
