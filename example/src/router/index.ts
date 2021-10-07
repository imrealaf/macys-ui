import Routes from './Routes'
import { Buttons } from 'pages'
import { RouteProps } from 'react-router'

export default Routes

export const routesList: RouteProps[] = [
  // {
  //   path: '/',
  //   component: Home,
  //   exact: true
  // },
  {
    path: '/',
    component: Buttons,
    exact: true
  }
]
