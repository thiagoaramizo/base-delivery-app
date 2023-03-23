import { useContext } from "react"
import styled from "styled-components"
import { FormAddress } from "../components/FormAddress"
import { FormPaymentMethod } from "../components/FormPaymentMethod"
import { ProductsAndPriceOnCart } from "../components/ProductsAndPriceOnCart"
import { AppContext } from "../contexts/AppContext"
import { CartContext } from "../contexts/CartContext"

export function Checkout() {

    const cart = useContext(CartContext)
    const app = useContext(AppContext)
    

    return (
      <Wrapper>

        <div className="addressAndPayment">
          <h3>Complete seu pedido</h3>
          <FormAddress />
          <FormPaymentMethod />
        </div>

        <div className="productsAndPrice">
          <h3>{app.appData.productsName} selecionados</h3>
          <ProductsAndPriceOnCart />
        </div>
      </Wrapper>
    )
  }

  const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 40rem 1fr;
    gap: 2rem;

    @media (max-width: 1180px){
      grid-template-columns: 1fr;
    }

    & .addressAndPayment,
    .productsAndPrice {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      & h3 {
        padding-bottom: 1rem;
      }
    }
  `
  