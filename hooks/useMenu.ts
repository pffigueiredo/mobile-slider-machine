import {MENU_DATA} from "../constants/menu"

const useMenu = () => {
    
    function getFirstLevelMenu(){
       return MENU_DATA.map(menu => menu.name)
    }

    function getSecondLevelByMenu(menuName: string){
        return MENU_DATA.find(menu => menu.name === menuName).subCategories.map(sub => sub.name)
     }

     function getThirdLevelByMenu(firstLevelMenu: string, secondLevelMenu: string){
       console.log(firstLevelMenu, secondLevelMenu)
        return MENU_DATA.find(menu => menu.name === firstLevelMenu).subCategories.find(sub => sub.name === secondLevelMenu).subCategories
     }

     return {
        getFirstLevelMenu,
        getSecondLevelByMenu,
        getThirdLevelByMenu
     }

}

export default useMenu
