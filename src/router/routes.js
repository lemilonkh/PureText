/*
{
  path: '/mixer',
  component: () => import('pages/mixer')
}, {
  path: '/mixer',
  component: () => import('pages/mixer')
}, {
  path: '/code',
  component: () => import('pages/code')
},
*/

export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  }, {
    path: '/timeline',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/timeline') }
    ]
  }, {
    path: '/library',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/library') }
    ]
  }, { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
