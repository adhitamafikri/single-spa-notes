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
  () => import('@services/Home'),
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
  () => import('@services/Notes'),
  // Activity function
  (location) => location.pathname.startsWith('/notes')
)

// /**
//  * Profile {Service}
//  */
// registerApplication(
//   // Service name
//   'Profile',
//   // Service component location
//   () => import('@services/Profile'),
//   // Activity function
//   (location) => location.pathname === '/profile' ||
//     location.pathname.startsWith('/profile')
// )

start()
