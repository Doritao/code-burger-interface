import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Products, Register, Login, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'
function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact={true} component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
        <PrivateRoute component={Admin} path="/pedidos" isAdmin />
        <PrivateRoute component={Admin} path="/listar-produtos" isAdmin />
      </Switch>
    </Router>
  )
}
export default Routes
