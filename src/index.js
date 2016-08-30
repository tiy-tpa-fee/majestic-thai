import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Home,
  Menu
} from './components'

import './styles/screen.sass'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/menu' component={Menu} />
    </Route>
  </Router>
), document.getElementById('root'))
