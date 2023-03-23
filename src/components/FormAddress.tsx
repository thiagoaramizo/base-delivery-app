import { MapPinLine } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import styled from "styled-components"

export function FormAddress () {

    const [zipCode, setZipCode] = useState('')
    const [zipToAPI, setZipToAPI] = useState('')

    const[street, setStreet] = useState('')
    const[neighborhood, setNeighborhood ] = useState('')
    const[city, setCity ] = useState('')
    const[state, setState ] = useState('')
    const[number, setNumber] = useState('')
    const[complement, setComplement] = useState('')

    useEffect(() => {
        if( zipToAPI ){
            fetch( `https://brasilapi.com.br/api/cep/v1/${zipToAPI}` )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setStreet(data.street)
                setNeighborhood(data.neighborhood)
                setCity(data.city)
                setState(data.state)
                setZipToAPI('')
            })
        }
    }, [zipToAPI])

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
    }

    const handleZipCodeInput = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode( (state) => {
                const newZipCode = e.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
                if (newZipCode.length === 8 ) {
                    setZipToAPI( newZipCode )
                }
                return newZipCode
            }
        )
    }
    
    return (
        <Wrapper>
            <div className="title">
                <MapPinLine size={22} />
                <div>
                    <p>Endereço de entrega</p>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </div>
                

            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        className="mediumInput cep" 
                        placeholder="CEP"
                        onChange={handleZipCodeInput}
                        value={zipCode}
                    />
                </div>
                    <div>
                    <input value={street} placeholder="Endereço"/>
                </div>
                <div>
                    <input value={number} className="mediumInput" placeholder="Número"/>
                    <input value={complement} placeholder="Complemento"/>
                </div>
                <div>
                    <input value={neighborhood} className="mediumInput" placeholder="Bairro"/>
                    <input value={city} placeholder="Cidade"/>
                    <input value={state} className="smallInput" placeholder="UF"/>
                </div>
            </form>
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
        color: ${(props)=>props.theme.color.brandPrimaryDark};

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

    & form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & div {
            display: flex;
            gap: 0.5rem;
        }
        & input {
            padding: 0.5rem;
            background-color: ${(props) => props.theme.color.backgroundDark};
            border-radius: 6px;
            border: 1px solid #ccc;
            width: 100%;
        }

        & input.smallInput {
            width: 3.75rem;
        }

        & input.mediumInput {
            width: 12.5rem;
        }

        & input.cep {
            width: 11.5rem;
        }
    }
`