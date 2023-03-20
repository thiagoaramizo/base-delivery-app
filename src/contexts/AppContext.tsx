import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { AppType } from '../@types/AppType'
import { coffeeDeliery } from './appContexts/coffeeDelivery'


export const AppContext = createContext({} as AppType)

interface AppContextProviderProps {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

  const [appState, dispatch] = useReducer(
    //Actions
    (state: AppType, action: any) => {
      if (action.type === 'NomeDaAcao') {
        return {
          ...state
          // Definir o que fazer
        }
      } else return state
    },
    //Estado padrão inicial
    coffeeDeliery
  )

  const { theme, appData, products } = appState

  return (
    <AppContext.Provider
      value={{ theme, appData, products }}
    >
      {children}
    </AppContext.Provider>
  )
}