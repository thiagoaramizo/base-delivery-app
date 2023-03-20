import { Package, ShoppingCartSimple, ThumbsUp, Timer } from "@phosphor-icons/react"
import { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../contexts/AppContext"
import { BlurBackground } from "./BlurBackground"

export function SiteCover() {

    const {appData} = useContext(AppContext)
    const { callout, description, image, serviceDifferentials } = appData.siteCover

    return (
      <Wrapper>
        <div className="coverContent">
            <div className="coverImage">
                <img src={image} />
            </div>
            <div className="coverText">
                <h1>{callout}</h1>
                <p>{description}</p>
                <div>
                    <div><span><ShoppingCartSimple size={16} weight="fill"/></span> {serviceDifferentials.shop}</div>
                    <div><span><Package size={16} weight="fill" /></span> {serviceDifferentials.pack}</div>
                    <div><span><Timer size={16} weight="fill" /></span> {serviceDifferentials.delivery}</div>
                    <div><span><ThumbsUp size={16} weight="fill" /></span> {serviceDifferentials.satisfaction}</div>
                </div>
            </div>
        </div>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    width: 100vw;
    margin-left: calc((50vw - 50%)*-1);
    overflow: hidden;
    position: relative;

    & .coverContent {
        width: 100%;
        max-width: 74rem;
        margin: 0 auto;
        padding: 5.75rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        gap: 3.5rem;
        @media (max-width: 768px) {
            flex-direction: column;
        }

        & .coverImage img{
            width: 30rem;
        }

        & .coverText {
            
            & h1 {
                font-size: 3rem;
                padding-bottom: 1rem;
                line-height: 1.3;
                @media (max-width: 768px) {
                    text-align: center;
                    font-size: 2.5rem;
                }
            }

            & p {
                font-size: 1.25rem;
                line-height: 1.3;
                @media (max-width: 768px) {
                    text-align: center;
                }
            }

            & > div {
                margin-top: 4.125rem;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem 2rem;

                & div {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 0.9rem;

                    & > span {
                        color: white;
                        display: inline-block;
                        padding: 0.5rem;
                        border-radius: 50%;
                        background-color: #333;
                        display: flex;
                    }

                    &:first-child > span  {
                        background-color: ${(props) => props.theme.color.brandPrimaryDark};
                    }

                    &:nth-child(3) > span  {
                        background-color: ${(props) => props.theme.color.brandPrimary};
                    }

                    &:last-child > span  {
                        background-color: ${(props) => props.theme.color.brandSecondary};
                    }
                }
            }
        }
    } 

    &:before{
        content: '';
        display: block;
        width: 16rem;
        height: 20rem;
        border-radius: 50%;
        filter: blur(1rem);
        opacity: 0.3;
        background-color: ${(props) => props.theme.color.brandPrimaryLight};
        position: absolute;
        right: 1rem;
        top: 5rem;
        z-index: -1;
        animation: pulse 10s cubic-bezier(0.11, 0, 0.5, 0) 1s infinite alternate both;
    }

    &:after {
        content: '';
        display: block;
        width: 18rem;
        height: 15rem;
        border-radius: 50%;
        filter: blur(1rem);
        opacity: 0.5;
        background-color: ${(props) => props.theme.color.brandSecondaryLight};
        position: absolute;
        left: -1%;
        top: 8rem;
        z-index: -1;
        animation: pulse 8s cubic-bezier(0.11, 0, 0.5, 0) 3s infinite alternate both;
    }

    @keyframes pulse {
	0% {
		transform: scaleX(1) translateX(0);
	}

	50% {
		transform: scaleX(1.5) rotate(90deg);
	}

	100% {
		transform: scaleX(1) rotate(0deg);
	}
}
    
  `