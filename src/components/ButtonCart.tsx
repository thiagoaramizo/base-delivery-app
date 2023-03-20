import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";

export function ButtonCart() {

  const { totalProducts } = useContext(CartContext)

    return (
      <Wrapper>
        <NavLink to='/checkout'>
          <ShoppingCartSimple size={20} weight="fill"/>
        </NavLink>
        <span>{totalProducts}</span>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    position: relative;

    & a {
      background-color: ${(props) => props.theme.color.brandPrimaryLight};
      color: ${(props) => props.theme.color.brandPrimaryDark};
      font-size: 0.875rem;
      padding: 0.5rem;
      display: flex;
      border-radius: 8px;
    }

    & span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.color.brandPrimaryDark};
      color: ${(props) => props.theme.color.brandPrimaryLight};
      border-radius: 50%;
      line-height: 1;
      width: 1.2rem;
      height: 1.2rem;
      font-weight: bold;
      font-size: 0.75rem;
      text-align: center;
      position: absolute;
      right: -0.6rem;
      top: -0.6rem;
    }
  `