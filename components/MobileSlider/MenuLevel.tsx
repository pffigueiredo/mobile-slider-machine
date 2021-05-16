import { AnimatePresence, motion, Variants } from 'framer-motion';
import React from 'react';
import BackSvg from '../../shared-components/BackButton';
import Box from '../../shared-components/Box';
import { Heading } from '../../shared-components/Heading';
import { styled } from '../../stitches.config';
import { useMobileSliderProvider } from './MobileSliderProvider';

const MenuAnimatedLevelWrapper = styled(motion.div, {
  position: 'absolute',
  height: '100%',
  width: '100%',
});

const HeaderSection = styled(Box, {
  marginBottom: '$lg',
  padding: '$lg',
  borderBottom: '1px solid lightgrey',
});

const MenuLevelVariants: Variants = {
  open: {
    x: '0',
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    x: '100%',
    transition: {
      duration: 0.3,
    },
  },
};

interface MenuLevelProps {
  onLinkClick?: (menuName: string) => void;
  show: boolean;
  showBack: boolean;
  menus: string[];
  levelTitle?: string;
}

const MenuLevel: React.FC<MenuLevelProps> = ({
  onLinkClick,
  menus,
  show,
  showBack,
  levelTitle,
}) => {
  const {
    machine: [current, send],
  } = useMobileSliderProvider();

  return (
    <AnimatePresence>
      {show && (
        <MenuAnimatedLevelWrapper
          initial={current.matches('firstLevel') ? false : 'closed'}
          animate="open"
          exit="closed"
          variants={MenuLevelVariants}
        >
          <Box css={{ backgroundColor: 'white', height: '100%' }}>
            <HeaderSection css={{ display: 'flex' }}>
              {showBack && (
                <Box
                  clickable
                  css={{ size: '25px' }}
                  onClick={() => send('BACK')}
                >
                  <BackSvg />
                </Box>
              )}
              <Heading relevance="secondary" css={{ margin: 'auto' }}>
                {levelTitle}
              </Heading>
            </HeaderSection>

            {menus.map((menu, index) => {
              return (
                <Box
                  css={{ padding: '$lg' }}
                  key={index}
                  clickable
                  onClick={() => onLinkClick(menu)}
                >
                  {menu}
                </Box>
              );
            })}
          </Box>
        </MenuAnimatedLevelWrapper>
      )}
    </AnimatePresence>
  );
};

export default MenuLevel;
