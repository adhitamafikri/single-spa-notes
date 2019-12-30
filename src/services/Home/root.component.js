import React from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import { NotesContext, NotesProvider } from '@contexts/NotesContext'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 16px;
  }
`

const Paper = styled.div`
  width: 140px;
  height: 200px
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
`

function NoteList({ notes }) {
  return notes.map((note) => {
    return (
      <Paper key={note.id}>
        {note.content}
      </Paper>
    )
  })
}

function Home() {
  const [notes] = React.useContext(NotesContext)

  return (
    <Layout navbar={<Navbar />}>
      <Flex>
        <NoteList notes={notes} />
      </Flex>
    </Layout>
  )
}

function HomeWithContext() {
  return (
    <NotesProvider>
      <Home />
    </NotesProvider>
  )
}

export default HomeWithContext
