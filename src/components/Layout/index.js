import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PrimaryTheme from '@themes/primary'

const StyledMain = styled.main`
  padding-top: 48px;
`

function Layout({
  navbar,
  footer,
  children,
}) {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      {navbar && navbar}
      <StyledMain>{children}</StyledMain>
      {navbar && footer}
    </ThemeProvider>
  )
}

export default Layout
