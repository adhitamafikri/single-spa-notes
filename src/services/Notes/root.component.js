import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'

import routeStack from './routes'
import { NotesProvider } from './contexts/NotesContext'

/**
 * @desc Renders all routes defined in /routes/index.js
 */
function RenderRouteStack() {
  const history = useHistory()
  console.log(history)
  console.log(location.hash)

  if (location.hash.startsWith('#/')) {
    // history.push(location.hash.replace('#', ''))
    console.log(location.href.replace('#', ''))
    // history.push(location.href.replace('#', ''))
    console.log('yehe')
  }

  return routeStack.map((route, idx) => {
    return (
      <Route key={idx} path={route.path} exact={route.exact}>
        {route.component}
      </Route>
    )
  })
}

/**
 * @desc The main component
 */
function NotesWithContext() {
  return (
    <HashRouter>
      <Switch>
        <NotesProvider>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RenderRouteStack />
          </React.Suspense>
        </NotesProvider>
      </Switch>
    </HashRouter>
  )
}

export default NotesWithContext
