import React from 'react'
import Layout from '@components/Layout'
import { Pane } from 'evergreen-ui'

const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
}

function Navbar() {
  return (
    <Layout>
      <Pane
        width="100%"
        height={48}
        style={{...navbarStyle}}
      >
        Header
      </Pane>
    </Layout>
  )
}

export default Navbar
