import React from 'react'
import ListPage from './pages/List'
import CreatePage from './pages/Create'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom'

import routeStack from './routes'
import { NotesProvider } from './contexts/NotesContext'

function RenderRouteStack() {
  return routeStack.map((route, idx) => {
    return (
      <Route key={idx} path={route.path} exact={route.exact}>
        {route.component}
      </Route>
    )
  })
}

function NotesWithContext() {
  return (
    <BrowserRouter basename="/notes">
      <Switch>
        <NotesProvider>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RenderRouteStack />
          </React.Suspense>
        </NotesProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default NotesWithContext
