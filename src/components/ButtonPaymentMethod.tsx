import { Children, ReactNode, useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../contexts/CartContext"

interface ButtonPayMetProps {
    value: string
    children: ReactNode
}

export function ButtonPaymentMethod ( {value, children}: ButtonPayMetProps ) {

    const cart = useContext(CartContext)
    const {setPaymentMethod, payMethod} = cart

    const handleClick = ( ) => {
        setPaymentMethod( value )
    }

    return (
        <Wrapper>
            <button type="button" onClick={handleClick} className={ payMethod === value ? 'selected' : '' } >            
            {children}
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    
    & button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem;
        background-color: ${(props) => props.theme.color.backgroundDark};
        padding: 1rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        color: ${(props) => props.theme.color.brandSecondary};
        transition: background-color 0.3s;
        border: 2px solid transparent;
        border-radius: 6px;
        cursor: pointer;

        & span {
            color: ${(props) => props.theme.color.text};
        }

        :hover {
            background-color: #ccc;
        }
    }

    & button.selected {
        background-color: ${(props) => props.theme.color.brandSecondaryLight};
        border-color: ${(props) => props.theme.color.brandSecondary};

        &:focus {
            box-shadow: none;
        }
    }

`