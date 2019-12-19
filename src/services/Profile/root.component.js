import React from 'react'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

function Profile() {
  return (
    <Layout navbar={<Navbar />}>
      <h1>This is profile page</h1>
    </Layout>
  )
}

export default Profile
