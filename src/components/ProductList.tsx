import { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../contexts/AppContext"
import { ProductCard } from "./ProductCard"

export function ProductList() {

    const {products, appData} = useContext(AppContext)

    return (
      <Wrapper>
        <h1>Nossos {appData.productsName || 'produtos'}</h1>
        <div className="productList">
          { products.map((product) => <ProductCard key={product.id} product={product} /> )}
        </div>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    margin-top: 2rem;

    & .productList {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: flex-start;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 1rem;
        }
    }
  `