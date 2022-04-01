// import lib
import { lazy } from 'react'

export default [
  {
    path: '/categories',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  },
  {
    path: '/categories/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add')),
  },
  {
    path: '/categories/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit')),
  },
]