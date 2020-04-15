import { registerApplication, start } from 'single-spa'

/**
 * Navbar {Global Component}
 */
// registerApplication(
//   'Navbar',
//   () => import('@components/Navbar').then(module => module.Navbar),
//   () => true,
// )

/**
 * Home {Service}
 */
registerApplication(
  // Service name
  'Home',
  // Service component location
  () => import( /* webpackChunkName: 'HomeService' */ '@services/Home'),
  // Activity function
  (location) => location.pathname === '' ||
    location.pathname === '/' ||
    location.pathname.startsWith('/home')
)

/**
 * Notes {Service}
 */
registerApplication(
  // Service name
  'Notes',
  // Service component location
  () => import(/* webpackChunkName: 'NotesService' */ '@services/Notes'),
  // Activity function
  (location) => location.pathname.startsWith('/notes')
)

start()
