import React from 'react';
import MenuLevel from '../MenuLevel';
import { useMobileSliderProvider } from '../MobileSliderProvider';

const ThirdLevel = () => {
  const {
    machine: [current],
  } = useMobileSliderProvider();

  function onLinkClick(menu: string) {
    alert(`you reached the end by clicking in ${menu}`);
  }

  return (
    <MenuLevel
      onLinkClick={onLinkClick}
      show={current.hasTag('thirdLevel')}
      menus={current.context.thirdLevelMenuData}
      showBack={true}
    />
  );
};

export default ThirdLevel;
