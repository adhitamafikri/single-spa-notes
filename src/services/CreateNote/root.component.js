import React from 'react'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

function CreateNote() {
  return (
    <Layout navbar={<Navbar />}>
      <h2>This is create note page</h2>
    </Layout>
  )
}

export default CreateNote
