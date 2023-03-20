import styled from "styled-components"
import { ButtonAddCart } from "./ButtonAddCart"
import { InputQuantity } from "./InputQuantity"

export function ProductCard() {

    return (
      <Wrapper>
        <img src="./coffee-delivery/products/expresso.png" />
        <header>
          <span>Tradicional</span>
          <span>Com leite</span>
        </header>
        <h3>ProductCard</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <footer>
          <div><span>R$</span>9,90</div>
          <InputQuantity />
          <ButtonAddCart />
        </footer>
      </Wrapper>
    )
  }

  const Wrapper = styled.article`
    width: 16rem;
    margin-top: 2.5rem;
    background-color: ${(props) => props.theme.color.background};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      display: block;
      width: 7.5rem;
      height: 7.5rem;
      margin-top: -2.5rem;
    }

    & footer {
      display: flex;
      align-items: center;
    }

  `