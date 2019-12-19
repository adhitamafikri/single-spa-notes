import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  padding-top: 48px;
`

function Layout({
  navbar,
  footer,
  children,
}) {
  return (
    <>
      {navbar && navbar}
      <StyledMain>{children}</StyledMain>
      {navbar && footer}
    </>
  )
}

export default Layout
