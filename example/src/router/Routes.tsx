import { Switch, Route, RouteProps } from 'react-router-dom'

interface IRoutesProps {
  routes: RouteProps[]
}

function Routes({ routes = [] }: IRoutesProps) {
  return (
    <Switch>
      {routes.map((route: RouteProps, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  )
}

export default Routes
