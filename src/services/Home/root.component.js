import React from 'react'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

function Home() {
  return (
    <Layout navbar={<Navbar />}>
      <h1>This is homepage</h1>
    </Layout>
  )
}

export default Home
