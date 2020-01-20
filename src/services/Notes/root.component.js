import React, { Suspense } from 'react'
import ListPage from './pages/List'
import CreatePage from './pages/Create'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

// const ListPage = React.lazy(() => import('./pages/List'))
// const CreatePage = React.lazy(() => import('./pages/Create'))

import { NotesProvider } from './contexts/NotesContext'

function NotesWithContext() {
  return (
    <BrowserRouter>
      <Switch>
        <NotesProvider>
          {/* <Route path="/notes" exact>
            <Suspense fallback={<p>sdfsd</p>}>
              <ListPage />
            </Suspense>
          </Route>
          <Route path="/notes/create" exact>
            <Suspense fallback={<p>sdfsd</p>}>
              <CreatePage />
            </Suspense>
          </Route> */}
          <Route path="/notes" exact>
            <ListPage />
          </Route>
          <Route path="/notes/create" exact>
            <CreatePage />
          </Route>
        </NotesProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default NotesWithContext
