import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { CartProductType } from "../@types/CartType"
import { CartContext } from "../contexts/CartContext"
import { ProductCard } from "./ProductCard"
import { ProductOnCart } from "./ProductOnCart"

export function ProductsAndPriceOnCart() {

    const cart = useContext(CartContext)
    const { products, editProductOnCart, removeProductOfCart } = cart
    const totalProducts = products.reduce((totalProducts, prod) => {
      return totalProducts += prod.quantity * prod.price
    }, 0)

    function toBRL( value: number ){
      return value.toLocaleString(
        "pt-BR", 
        { 
          minimumFractionDigits: 2,
          style: 'currency', 
          currency: 'BRL' 
        }) 
    }

    return (
      <Wrapper>
        <div className="productList">
            {cart.products.map((product) => 
              {
                return (
                  <ProductOnCart 
                    key={product.id}
                    product={product}
                    onEdit={editProductOnCart}
                    onRemove={removeProductOfCart}
                  />
                )
              }
            )}
          </div>
          <footer>
            <div className="price"><span>Total de itens</span><span>{ toBRL(totalProducts) }</span></div>
            <div className="price"><span>Entrega</span><span>{products.length > 0 ? toBRL(cart.shipPrice) : toBRL(0)}</span></div>
            <div className="price total"><span>Total</span><span> {products.length > 0 ? toBRL(totalProducts + cart.shipPrice) : toBRL(0)}</span></div>
            <NavLink to='/success'>Confirmar pedido</NavLink>
          </footer>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    background-color: ${(props)=>props.theme.color.background};
    padding: 2.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    & footer {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      & .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      & .total {
        font-weight: bold;
        font-size: 1.25rem;
      }

      & a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 6px;
        color: white;
        background-color: ${(props) => props.theme.color.brandPrimary};
        font-size: 0.75rem;
        font-weight: bold;
        margin-top: 0.5rem;
        transition: background-color 0.3s;

        :hover {
          background-color: ${(props) => props.theme.color.brandPrimaryDark};
        }
      }
    }
  `