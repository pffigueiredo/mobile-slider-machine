import React from 'react';
import MenuLevel from '../MenuLevel';
import { useMobileSliderProvider } from '../MobileSliderProvider';

const SecondLevel = () => {
  const {
    machine: [current, send],
  } = useMobileSliderProvider();

  function onLinkClick(menu: string) {
    send({ type: 'NEXT', secondLevelMenuName: menu });
  }

  return (
    <>
      <MenuLevel
        onLinkClick={onLinkClick}
        show={current.hasTag('secondLevel')}
        menus={current.context.secondLevelMenuData}
        showBack={true}
        levelTitle={current.context.firstLevelMenuName}
      />
    </>
  );
};

export default SecondLevel;
