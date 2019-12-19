import { registerApplication, start } from 'single-spa'

/**
 * Navbar {Global Component}
 */
registerApplication(
  'Navbar',
  () => import('@components/Navbar').then(module => module.Navbar),
  () => true,
)

/**
 * Home {Service}
 */
registerApplication(
  // Service name
  'Home',
  // Service component location
  () => import('@services/Home'),
  // Activity function
  (location) => location.pathname === '' ||
    location.pathname === '/' ||
    location.pathname.startsWith('/home')
)

/**
 * Create Note {Service}
 */
registerApplication(
  // Service name
  'CreateNote',
  // Service component location
  () => import('@services/CreateNote'),
  // Activity function
  (location) => location.pathname === '/create' ||
    location.pathname.startsWith('/create')
)

start()