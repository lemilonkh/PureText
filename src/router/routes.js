let makePage = (pageName, path) => {
  return {
    path,
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/' + pageName) }
    ]
  }
}

let pages = ['index', 'timeline', 'jam', 'mixer', 'library', 'code']

let routes = pages.map((page) => {
  let path = '/'
  if (page === 'index') {
    page = 'timeline'
  } else {
    path += page
  }
  return makePage(page, path)
})

routes.push({ // Always leave this as last one
  path: '*',
  component: () => import('pages/404')
})

export default routes
