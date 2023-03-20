import { MapPin } from "@phosphor-icons/react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../contexts/AppContext"
import { ButtonCart } from "./ButtonCart"

export function Header() {

  const { appData } = useContext(AppContext)

    return (
      <Wrapper>
        <div className="logo">
          <NavLink to='/'>
            <img src={appData.logo} title={appData.title}/>
          </NavLink>
        </div>

        <div>
          <span className="local">
            <MapPin size={20} weight="fill" />
            {appData.local}
          </span>
          <ButtonCart />
        </div>
        
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    & .logo {
      & a {
        display: block;
        padding: 0.5rem;
        margin-left: -0.5rem;
        border-radius: 8px;
        text-decoration: none;

        & img {
          height: 2.5rem;
          display: block;
        }
      }

      & a:focus {
        box-shadow: 0 0 0 2px #ddddddaa;
      }
    }

    & div:last-child {
      display: flex;
      align-items: center;
      gap: 0.875rem;

      & .local {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        font-size: 0.875rem;
        background-color: ${(props) => props.theme.color.brandSecondaryLight};
        color: ${(props) => props.theme.color.brandSecondary};
        border-radius: 8px;
        gap: 0.3rem;
      }
    }
  `