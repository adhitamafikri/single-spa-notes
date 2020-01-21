import React, { lazy } from 'react'

const ListPage = lazy(() => /* webpackChunkName: ListPage */ import('../pages/List'))
const CreatePage = lazy(() => /* webpackChunkName: CreatePage */ import('../pages/Create'))

export default [
  {
    path: '/',
    exact: true,
    component: <ListPage />
  },
  {
    path: '/create',
    exact: false,
    component: <CreatePage />
  },
]
