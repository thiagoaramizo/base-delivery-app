import { ShoppingCartSimple } from "@phosphor-icons/react"
import styled from "styled-components";

export function ButtonAddCart() {

    return (
      <Wrapper>
        <ShoppingCartSimple size={20} weight="fill" />
      </Wrapper>
    )
  }

  const Wrapper = styled.button`
    border: 0;
    border-radius: 8px;
    display: flex;
    color: white;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.color.brandSecondaryDark};
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.brandSecondary};
    }
  `