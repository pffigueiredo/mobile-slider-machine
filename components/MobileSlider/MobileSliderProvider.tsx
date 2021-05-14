import { useMachine } from '@xstate/react'
import * as React from 'react'
import { useState } from 'react'
import { assign, Interpreter, Machine, State } from 'xstate'
import useMenu from '../../hooks/useMenu'

const {
  getFirstLevelMenu,
  getSecondLevelByMenu,
  getThirdLevelByMenu,
} = useMenu()

interface MenuContext {
  firstLevelMenuName: string
  secondLevelMenuName: string
  firstLevelMenuData: string[]
  secondLevelMenuData: string[]
  thirdLevelMenuData: string[]
}

interface MenuStateSchema {
  states: {
    firstLevel: Record<string, unknown>
    secondLevel: Record<string, unknown>
    thirdLevel: Record<string, unknown>
  }
}

// The events that the machine handles
type MenuEvent =
  | { type: 'NEXT'; firstLevelMenuName: string; secondLevelMenuName?: never }
  | { type: 'NEXT'; firstLevelMenuName?: never; secondLevelMenuName: string }
  | { type: 'BACK'; firstLevelMenuName?: never; secondLevelMenuName?: never }
  | { type: 'RESET'; firstLevelMenuName?: never; secondLevelMenuName?: never  }

const MenuMachine = Machine<MenuContext, MenuStateSchema, MenuEvent>(
  {
    id: 'menu',
    initial: 'firstLevel',
    context: {
      firstLevelMenuData: getFirstLevelMenu(),
      firstLevelMenuName: '',
      secondLevelMenuName: '',
      secondLevelMenuData: [],
      thirdLevelMenuData: [],
    },
    states: {
      firstLevel: {
        tags: ['firstLevel'],
        on: {
          NEXT: {
            target: 'secondLevel',
            cond: (_context, event) => Boolean(event.firstLevelMenuName),
            actions: ['goToSecondLevel'],
          },
          RESET:'firstLevel',
        },
      },
      secondLevel: {
        tags: ['firstLevel', 'secondLevel'],
        on: {
          NEXT: {
            target: 'thirdLevel',
            cond: (_context, event) => Boolean(event.secondLevelMenuName),
            actions: ['goToThirdLevel'],
          },
          BACK: {
            target: 'firstLevel',
          },
          RESET:'firstLevel',
        },
      },
      thirdLevel: {
        tags: ['firstLevel', 'secondLevel', 'thirdLevel'],
        on: {
          BACK: {
            target: 'secondLevel',
            actions: ['goToSecondLevel'],
          },
          RESET:'firstLevel',
        },
      } ,
    },
  },
  {
    actions: {
      goToSecondLevel: assign((context, event) => ({
        ...context,
        firstLevelMenuName: event.firstLevelMenuName ?? context.firstLevelMenuName,
        secondLevelMenuData: getSecondLevelByMenu(event.firstLevelMenuName ?? context.firstLevelMenuName),
      })),
      goToThirdLevel: assign((context, event) => ({
        ...context,
        secondLevelMenuName: event.secondLevelMenuName,
        thirdLevelMenuData: getThirdLevelByMenu(
          context.firstLevelMenuName,
          event.secondLevelMenuName
        ),
      })),
    },
  }
)

type Distribute<U, C> = U extends any ? { value: U; context: C } : never // util
type TypeState = Distribute<keyof MenuStateSchema['states'], MenuContext> // assuming same context
type Context = [
  State<MenuContext, MenuEvent, MenuStateSchema, TypeState>,
  Interpreter<MenuContext, MenuStateSchema, MenuEvent, TypeState>['send']
]

const MobileSliderContext = React.createContext<{
  useSliderState:
    | [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    | undefined
  machine: Context
}>({} as any)

const MobileSliderProvider: React.FC = ({ children }) => {
  const [sliderOpen, setSliderOpen] = useState(false)
  const [current, send] = useMachine(MenuMachine)

  return (
    <MobileSliderContext.Provider
      value={{
        useSliderState: [sliderOpen, setSliderOpen],
        machine: [current, send],
      }}
    >
      {children}
    </MobileSliderContext.Provider>
  )
}

function useMobileSliderProvider() {
  const context = React.useContext(MobileSliderContext)
  if (context === undefined) {
    throw new Error(
      'useMobileSliderProvider must be used within a MobileSliderProvider'
    )
  }
  return context
}
export { MobileSliderProvider, useMobileSliderProvider }
