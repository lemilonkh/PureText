import Timeline from 'pages/timeline'
import Mixer from 'pages/mixer'
import Library from 'pages/library'
// import Code from 'pages/code'
import NotFoundPage from 'pages/404'

export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  }, {
    path: '/timeline',
    component: Timeline
  }, {
    path: '/mixer',
    component: Mixer
  }, {
    path: '/library',
    component: Library
  }, /* {
    path: '/code',
    component: Code
  }, */ { // Always leave this as last one
    path: '*',
    component: NotFoundPage
  }
]
