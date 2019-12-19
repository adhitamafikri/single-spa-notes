import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PrimaryTheme from '@themes/primary'

const StyledMain = styled.main`
  padding-top: 48px;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

function Layout({
  navbar,
  footer,
  children,
}) {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <GlobalStyle />
      {navbar && navbar}
      <StyledMain>{children}</StyledMain>
      {navbar && footer}
    </ThemeProvider>
  )
}

export default Layout
