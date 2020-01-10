import React from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import Loading from '@components/Loading'
import {
  NotesProvider,
  useNotesState,
  useNotesDispatch,
  fetchNotes,
} from '@home-contexts/NotesContext'

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

function Home() {
  const {
    loading,
    error,
    errorMsg,
    items
  } = useNotesState()
  const notesDispatch = useNotesDispatch()

  React.useEffect(() => {
    fetchNotes(notesDispatch)
  }, [fetchNotes])

  return (
    <Layout navbar={<Navbar />}>
      <Flex>
        {loading && <Loading />}
        <Flex>
          {!loading && items && <h1>Hey dude you have {items.length} notes</h1>}
        </Flex>
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
