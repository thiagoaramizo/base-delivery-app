import styled from "styled-components"
import { ProductCard } from "./ProductCard"

export function ProductList() {

    return (
      <Wrapper>
        <h1>Nossos produtos</h1>
        <div className="productList">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
        justify-content: space-between;
    }
  `