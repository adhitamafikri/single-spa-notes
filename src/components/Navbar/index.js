import React from 'react'
import styled from 'styled-components'
import { navigateToUrl } from 'single-spa'

const StyledNavbar = styled.div`
  background: ${props => props.theme.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Link = styled.a`
  margin: 0 8px;
`

function Navbar() {
  return (
      <StyledNavbar>
        <Link href="/" onClick={navigateToUrl}>
          Home
        </Link>
        <Link href="/notes" onClick={navigateToUrl}>
          Notes
        </Link>
        <Link href="/profile" onClick={navigateToUrl}>
          Profile
        </Link>
      </StyledNavbar>
  )
}

export default Navbar
