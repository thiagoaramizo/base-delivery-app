import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react"
import styled from "styled-components"
import { ButtonPaymentMethod } from "./ButtonPaymentMethod"

export function FormPaymentMethod () {

    const handleClick = ( data: string ) => {
        console.log( data )
    }
    
    return (
        <Wrapper>

            <div className="title">
                <CurrencyDollar size={22} />
                <div>
                    <p>Pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </div>

            <div className="options">

                <ButtonPaymentMethod value="Cartão de crédito">
                    <CreditCard size={16} /> <span>Cartão de crédito</span>
                </ButtonPaymentMethod>

                <ButtonPaymentMethod value="Cartão de débito">
                    <Bank size={16} /> <span>Cartão de débito</span>
                </ButtonPaymentMethod>

                <ButtonPaymentMethod value="Dinheiro">
                    <Money size={16} /> <span>Dinheiro</span>
                </ButtonPaymentMethod>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${(props)=>props.theme.color.background};
    padding: 2.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .title {
        display: flex;
        gap: 0.5rem;
        color: ${(props)=>props.theme.color.brandSecondary};

        & p {
            color: ${(props)=>props.theme.color.textDark};
        }

        & span {
            color: ${(props)=>props.theme.color.text};
            display: block;
            font-size: 0.875rem;
            line-height: 1.6;
        }
    }

    & .options {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;
        
    }
`