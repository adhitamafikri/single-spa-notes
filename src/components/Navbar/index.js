import React from 'react'
import styled from 'styled-components'
import { Pane, Link } from 'evergreen-ui'
import { navigateToUrl } from 'single-spa'

const StyledNavbar = styled(Pane)`
  background: ${props => props.theme.primary}
  display: flex;
  justify-content: center;
  align-items: center;
`

function Navbar() {
  return (
      <StyledNavbar
        width="100%"
        height={48}
        style={{ position: 'fixed', top: 0, left: 0 }}
      >
        <Link href="/" onClick={navigateToUrl} marginX={8}>
          Home
        </Link>
        <Link href="/create" onClick={navigateToUrl} marginX={8}>
          Create
        </Link>
        <Link href="/profile" onClick={navigateToUrl} marginX={8}>
          Profile
        </Link>
      </StyledNavbar>
  )
}

export default Navbar
