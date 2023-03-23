import { Minus, Plus } from "@phosphor-icons/react"
import styled from "styled-components"

interface InputQuantityProps {
  value: number
  setValue: ( n: number ) => void
}

export function InputQuantity( {value, setValue} : InputQuantityProps ) {

    const handleUpValue = () => {
      if( value < 9 ) {
        const newValue = value + 1
        setValue( newValue )
      }
    }

    const handleDonwValue = () => {
      if( value > 1 ) {
        const newValue = value - 1
        setValue( newValue )
      }
    }

    return (
      <Wrapper>
        <button type="button" onClick={handleDonwValue}>
           <Minus size={16} weight="bold"/>
        </button>
        <input 
          type='number'
          min={1}
          max={9}
          step={1}
          value={value}
          readOnly
        />
        <button type="button" onClick={handleUpValue}>
          <Plus size={16} weight="bold"/>
        </button>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1rem 1fr 1rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${(props) => props.theme.color.backgroundDark};
    padding: 0.5rem;
    border-radius: 8px;

    & button {
      display: flex;
      background: none;
      color: ${(props) => props.theme.color.brandSecondary};
      border: none;
      cursor: pointer;
    }

    & input[type=number] {
      -moz-appearance: textfield;
      text-align: center;
      background: none;
      border: none;
    }

    & input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `