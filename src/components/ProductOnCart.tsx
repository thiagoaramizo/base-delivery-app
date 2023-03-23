import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { CartProductType } from "../@types/CartType"

interface ProductOnCartProps {
  product: CartProductType
  onRemove: ( product: CartProductType ) => void
  onEdit: ( product: CartProductType ) => void
}

export function ProductOnCart( { product, onEdit, onRemove}: ProductOnCartProps) {

    const [removeAnimation, setRemoveAnimation] = useState(false)
    
    useEffect( () => {
      if( removeAnimation ){
        setTimeout(() => {
          onRemove( product )
        }, 700)
      }
    }, [removeAnimation])

    const handleRemoveProduct = () => {
      setRemoveAnimation(true)
    }

    const handleUpValue = () => {
      if( product.quantity < 9 ) {
        onEdit( {...product, quantity: product.quantity+1})
      }
    }

    const handleDonwValue = () => {
      if( product.quantity > 1 ) {
        onEdit( {...product, quantity: product.quantity-1})
      }
    }

    return (
      <Wrapper>
        <div className={removeAnimation ? 'removeAnim' : ''}>
          <img src={product.image} />
          <div>
            <div className="nameAndPrice">
              <p>{product.name}</p>
              <span>
                { 
                  (product.price * product.quantity ).toLocaleString(
                    "pt-BR", 
                    { 
                      minimumFractionDigits: 2,
                      style: 'currency', 
                      currency: 'BRL' 
                    }) 
                }
              </span> 
            </div>
            

            <div className="actionButtons">
              <div className="quantity">
                <button type="button" onClick={handleDonwValue}>
                  <Minus size={14} weight="bold"/>
                </button>
                <p>{product.quantity}</p>
                <button type="button" onClick={handleUpValue}>
                  <Plus size={14} weight="bold"/>
                </button>
              </div>
              <button onClick={handleRemoveProduct} > <Trash size={16} /> <span>Remover</span> </button>
            </div>

          </div>
        </div>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    & > div {
      display: flex;
      gap: 1.25rem;
      align-items: center;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid ${(props) => props.theme.color.backgroundDark};
      margin-bottom: 1.5rem;

      & img {
        width: 4rem;
        height: 4rem;
      }

      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        & button {
          display: flex;
          border: none;
          background-color: ${(props) => props.theme.color.backgroundDark};
          cursor: pointer;
        }

        & .nameAndPrice{
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 1.5;

          & span {
            font-weight: bold;
          }
        }

        & .actionButtons {
          display: flex;
          gap: 0.5rem;

          & .quantity {
            display: flex;
            align-items: center;
            background-color: ${(props) => props.theme.color.backgroundDark};
            padding: 0.3rem 0.5rem;
            gap: 0.25rem;
            border-radius: 6px;

            & button {
              color: ${(props) => props.theme.color.brandSecondary};
            }
          }

          & > button {
            display: flex;
            align-items: center;
            padding: 0.3rem 0.5rem;
            gap: 0.25rem;
            text-transform: uppercase;
            font-size: 0.75rem;
            border-radius: 6px;
            color: ${(props) => props.theme.color.brandSecondary};
            transition: background-color 0.3s;

            & span {
              color: ${(props) => props.theme.color.text};
            }

            :hover {
              background-color: #D7D5D5;
            }
          }
        }
      }
    }

    & div.removeAnim {
      animation: fade-out-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @keyframes fade-out-bck {
      0% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
      100% {
        -webkit-transform: translateZ(-80px);
                transform: translateZ(-80px);
        opacity: 0;
      }
    }
  `