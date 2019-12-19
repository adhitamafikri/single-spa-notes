import React from 'react'
import styled from 'styled-components'
import { navigateToUrl } from 'single-spa'

const StyledNavbar = styled.nav`
  background: ${props => props.theme.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
`

function Navbar() {
  return (
    <StyledNavbar>
      navbar
    </StyledNavbar>
  )
}

export default Navbar
