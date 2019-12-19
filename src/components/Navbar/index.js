import React from 'react'
import styled from 'styled-components'
import { Pane } from 'evergreen-ui'
import { navigateToUrl } from 'single-spa'

const StyledNavbar = styled(Pane)`
  background: ${props => props.theme.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
`

const StyledAnchor = styled.a`
  color: black;
`

function Navbar() {
  return (
    <StyledNavbar>
      <a href="/" onClick={navigateToUrl}>
        Home
      </a>
      <a href="/create" onClick={navigateToUrl}>
        Create Note
      </a>
      <a href="/profile" onClick={navigateToUrl}>
        Profile
      </a>
    </StyledNavbar>
  )
}

export default Navbar
