import { createContext, ReactNode, useReducer, useState } from 'react'
import { CartProductType, CartType } from '../@types/CartType'


export const CartContext = createContext({} as CartType)

interface contextProviderProps {
  children: ReactNode
}

interface ActionCartType {
  type: string,
  payload: any
}

export function CartContextProvider({ children }: contextProviderProps) {

  const addToCart = ( product: CartProductType ) => {
    dispatch({
      type: 'addProduct',
      payload: {
        product: product
      }
    })
  }

  const editProductOnCart = ( product: CartProductType ) => {
    dispatch({
      type: 'editProduct',
      payload: {
        product: product
      }
    })
  }

  const removeProductOfCart = ( product: CartProductType ) => {
    dispatch({
      type: 'removeProduct',
      payload: {
        product: product
      }
    })
  }

  const setPaymentMethod = ( paymentMethod: string ) => {
    dispatch({
      type: 'setPaymentMethod',
      payload: {
        paymentMethod: paymentMethod
      }
    })
  }

  const [cartState, dispatch] = useReducer(
    //Actions
    (state: CartType, action: ActionCartType) => {
      
      if (action.type === 'addProduct') { 
        
        const newProduct =  action.payload.product as CartProductType

        const productAlreadyExists = state.products.findIndex((p) => newProduct.id === p.id ) > -1 ? true : false
        const newProducts =  productAlreadyExists ? 
          (
            state.products.map<CartProductType>((prod) => {
              if( newProduct.id === prod.id) {
                return { ...newProduct, quantity: (newProduct.quantity + prod.quantity) }
              } else {
                console.log(prod) 
                return prod
              }
            })
          ) : [ ...state.products, newProduct]
                
        return {
          ...state,
          products: newProducts,
        }
      } 
      
      else if (action.type === 'editProduct') { 
        const newProducts =  state.products.map<CartProductType>((prod) => {
          if( action.payload.product.id === prod.id) {
            return action.payload.product
          } else{
            return prod
          }
        })
        return {
          ...state,
          products: newProducts,
        }
      } 

      else if (action.type === 'removeProduct') { 
        const newProduct =  action.payload.product as CartProductType
        const products = [...state.products]
        //@ts-ignore
        const newProducts =  products.filter<CartProductType>( (prod) => (newProduct.id !== prod.id) )
        return {
          ...state,
          products: newProducts,
        }
      }

      else if (action.type === 'setPaymentMethod') { 
        return {
          ...state,
          payMethod: action.payload.paymentMethod,
        }
      } 
      
      else return state
    },
    //Estado padrão inicial
    {
      shipPrice: 10,
      stauts: 'cart',
      products: [],
      addToCart: addToCart,
      editProductOnCart: editProductOnCart,
      removeProductOfCart: removeProductOfCart,
      setPaymentMethod: setPaymentMethod
    }
  )

  return (
    <CartContext.Provider
      value={{ ...cartState, addToCart: addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}