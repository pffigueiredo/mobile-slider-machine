import { AnimatePresence, motion, Variants } from 'framer-motion';
import React from 'react';
import Box from '../../shared-components/Box';
import { styled } from '../../stitches.config';
import { useMobileSliderProvider } from './MobileSliderProvider';

const MenuAnimatedLevelWrapper = styled(motion.div, {
  position: 'absolute',
  height: '100%',
  width: '100%',
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
}

const MenuLevel: React.FC<MenuLevelProps> = ({
  onLinkClick,
  menus,
  show,
  showBack,
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
            {menus.map((menu, index) => {
              return (
                <Box
                  css={{ padding: '$lg' }}
                  key={index}
                  onClick={() => onLinkClick(menu)}
                >
                  {menu}
                </Box>
              );
            })}
            {showBack && <button onClick={() => send('BACK')}>Back</button>}
          </Box>
        </MenuAnimatedLevelWrapper>
      )}
    </AnimatePresence>
  );
};

export default MenuLevel;
