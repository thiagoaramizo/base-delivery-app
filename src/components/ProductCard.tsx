import { useContext, useState } from "react"
import styled from "styled-components"
import { ProductType } from "../@types/ProductType"
import { CartContext } from "../contexts/CartContext"
import { ButtonAddCart } from "./ButtonAddCart"
import { InputQuantity } from "./InputQuantity"
import { Tag } from "./Tag"

interface ProductCardProps {
  product: ProductType
}

export function ProductCard({product}: ProductCardProps) {

  const { addToCart } = useContext(CartContext)
  const [value, setValue] = useState(1)

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    addToCart( {...product, quantity: value})
  }

    return (
      <Wrapper>
        <img src={product.image} />
        <header>
          { product.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </header>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <footer>
          <div className="price">R$<span>{product.price.toLocaleString(undefined,{minimumFractionDigits:2}) }</span></div>
          <form onSubmit={handleSubmit}>
            <InputQuantity value={value} setValue={setValue}/>
            <ButtonAddCart />
          </form>
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

    & header {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 0.75rem;
    }

    & h3 {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    & p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme.color.textLight};
      text-align: center;
      line-height: 1.4;
    }

    & footer {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & .price {
        display: flex;
        align-items: baseline;
        gap: 0.2rem;
        font-size: 0.875rem;

        & span {
          font-family: 'Baloo 2', sans-serif;
          font-size: 1.5rem;
        }
      }

      & form {
        display: flex;
        gap: 0.5rem;
      }
    }

    @media (max-width: 1180px) {
      width: 100%;
      margin-top: 0;
      align-items: flex-start;
      padding-left: 10rem;
      position: relative;

      & img {
        margin-top: 0;
        position: absolute;
        left: 1rem;
      }

      & header {
        margin-top: 0;
      }

      & h3, p { 
        text-align: left;
      }

      & footer {
        margin-top: 1rem;
      }
    }

  `