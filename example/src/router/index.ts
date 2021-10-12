import Routes from './Routes'
import { Home, Buttons, StyledComponents } from 'pages'
import { RouteProps } from 'react-router'

export default Routes

export const routesList: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/buttons',
    component: Buttons,
    exact: true
  },
  {
    path: '/styled-components',
    component: StyledComponents,
    exact: true
  }
]
