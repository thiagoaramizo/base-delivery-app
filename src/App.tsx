import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'

import { Router } from './Router'
import { AppContext } from './contexts/AppContext'
import { CartContextProvider } from './contexts/CartContext'
import { useContext } from 'react'

export function App() {

  const { theme } = useContext(AppContext)

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  )
}
