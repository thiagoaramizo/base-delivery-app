import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`