import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
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
  const {
    push,
    location: { pathname }
  } = useHistory()
  console.log(pathname)

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
          <p>Ola mundo!</p>
          <PageLinkLogOut>Sair</PageLinkLogOut>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
