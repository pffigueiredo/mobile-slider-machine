import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
    theme: {
        colors: {
            gray500: 'hsl(206,10%,76%)',
            blue500: 'hsl(206,100%,50%)',
            purple500: 'hsl(252,78%,60%)',
            green500: 'hsl(148,60%,60%)',
            red500: 'hsl(352,100%,62%)',
        },
        space: {
            sm: '4px',
            base: '8px',
            lg: '16px',
        },
        fontSizes:{
            base: '16px',
            large: '18px',
            xl: '24px',
            xxl: '32px'
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {
            sm: '4px',
            base: '8px',
            lg: '16px',
        },
        shadows: {},
        zIndices: {},
        transitions: {},
    },
    media: {},
    utils: {
        mx: (config) => (value) => ({
            marginLeft: value,
            marginRight: value,
          }),
          my: (config) => (value) => ({
            marginTop: value,
            marginBottom: value,
          }),
          px: (config) => (value) => ({
            paddingLeft: value,
            paddingRight: value,
          }),
          py: (config) => (value) => ({
            paddingTop: value,
            paddingBottom: value,
          }),
    
    },
});