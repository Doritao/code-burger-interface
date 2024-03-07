import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  PageLink,
  ContainerText,
  ContainerLeft,
  ContainerRight,
  Line,
  PageLinkLogOut
} from './styles'
export function Header() {
  const { logOut, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logOut()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>

        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="loog-da-pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá {userData.name}</p>
          <PageLinkLogOut onClick={logoutUser}>Sair</PageLinkLogOut>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
