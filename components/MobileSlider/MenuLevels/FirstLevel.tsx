import React from 'react'
import MenuLevel from '../MenuLevel'
import { useMobileSliderProvider } from '../MobileSliderProvider'

const FirstLevel = () => {

      const {
        machine: [current, send],
      } = useMobileSliderProvider()

      function onLinkClick(menu){
        send({type: "NEXT", firstLevelMenuName: menu})
      }

    return (
        <MenuLevel onLinkClick={onLinkClick} show={current.hasTag('firstLevel')} menus={current.context.firstLevelMenuData} />
    )
}

export default FirstLevel
