import NotFound from '@/pages/common/NotFound'
import { createElement } from 'react'
import { useRoutes } from 'react-router'

import route from './route'

const Routes = () => {
  const generateRoutes = (routes) => {
    return routes.map((route) => {
      const currentRoute = {
        path: route.path,
        index: route.index,
        element: createElement(route.element)
      }

      if (route.children) {
        currentRoute.children = generateRoutes(route.children)
      }

      return currentRoute
    })
  }

  const routes = generateRoutes(route)

  routes.push({
    path: '*',
    element: <NotFound />
  })

  const element = useRoutes(routes)
  return element
}

export default Routes
