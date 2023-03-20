import { createContext, ReactNode, useReducer } from 'react'
import { CartType } from '../@types/CartType'
import { coffeeDeliery } from './appContexts/coffeeDelivery'


export const CartContext = createContext({} as CartType)

interface contextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: contextProviderProps) {

  const [cartState, dispatch] = useReducer(
    //Actions
    (state: CartType, action: any) => {
      if (action.type === 'NomeDaAcao') {
        return {
          ...state
          // Definir o que fazer
        }
      } else return state
    },
    //Estado padrão inicial
    {
      totalProducts: 0,
      totalPrice: 0,
      shipPrice: 10,
      totalProductsPrice: 0,
      stauts: 'cart',
      products: []
    }
  )

  return (
    <CartContext.Provider
      value={{ ...cartState }}
    >
      {children}
    </CartContext.Provider>
  )
}