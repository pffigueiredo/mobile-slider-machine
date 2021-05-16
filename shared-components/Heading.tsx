import { styled } from '../stitches.config';

export const Heading = styled('h2', {
  variants: {
    relevance: {
      main: {
        fontSize: '$xl',
      },
      secondary: {
        fontSize: '$large',
      },
    },
  },
});
