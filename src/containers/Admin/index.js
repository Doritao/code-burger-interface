import React from 'react'

import { SideMenuAdmin } from '../../components'
import { listLinks } from '../../components/SideMenuAdmin/menu-list'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        <ListProducts />
        {/* <Orders />  */}
      </ContainerItems>
    </Container>
  )
}
