import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import Loading from '@components/Loading'

import Pane from '../../components/Pane'
import Paper from '../../components/Paper'

import {
  useNotesState,
  useNotesDispatch,
  fetchNotes,
} from '../../contexts/NotesContext'

function NoteList({ notes }) {
  return notes.map((note, idx) => {
    return (
      <Paper key={idx} margin="0 8px">
        <strong>{note.title}</strong>
        <p>{note.content}</p>
      </Paper>
    )
  })
}

function List() {
  const {
    loading,
    error, 
    errorMsg,
    items,
  } = useNotesState()
  const notesDispatch = useNotesDispatch()

  React.useEffect(() => {
    fetchNotes(notesDispatch)
  }, [fetchNotes])

  return (
    <Layout navbar={<Navbar />}>
      {loading && <Loading />}

      <Pane
        width="flex"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        margin="16px 0"
      >
        {!loading && items && <NoteList notes={items} />}
      </Pane>

      <Pane width="100%" display="flex" justifyContent="center">
        <Link to="/create">
          <button type="button">
            Create New Note
          </button>
        </Link>
      </Pane>
    </Layout>
  )
}

export default List
