
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        line-height: 1;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.color.brandPrimary};
    }
    body {
        background-color: ${(props) => props.theme.color.backgroundlight};
        color: ${(props) => props.theme.color.text};
        -webkit-font-smoothing: antialiased;
    }
    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3 {
        font-family: 'Baloo 2', sans-serif;
        color: ${(props) => props.theme.color.textDark};
    }
`