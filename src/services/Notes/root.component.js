import React from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import Loading from '@components/Loading'

import Pane from './components/Pane'
import Paper from './components/Paper'

import {
  NotesProvider,
  useNotesState,
  useNotesDispatch,
  fetchNotes
} from './contexts/NotesContext'

const StyledInputText = styled.input`
  margin-bottom: 16px;
`

function NoteList({ notes }) {
  return notes.map((note) => {
    return (
      <Paper key={note._id} margin="0 8px">
        <strong>{note.title}</strong>
        <p>{note.content}</p>
      </Paper>
    )
  })
}

function Notes() {
  const {
    loading,
    error, 
    errorMsg,
    items,
  } = useNotesState()
  const notesDispatch = useNotesDispatch()

  const [noteData, setNoteData] = React.useState({
    id: 0,
    title: '',
    content: ''
  })

  React.useEffect(() => {
    fetchNotes(notesDispatch)
  }, [fetchNotes])

  const onTitleChange = (e) => {
    const nd =  { ...noteData }
    nd.title = e.target.value
    setNoteData({ ...nd })
  }

  const onContentChange = (e) => {
    const nd =  { ...noteData }
    nd.content = e.target.value
    setNoteData({ ...nd })
  }

  const saveNote = () => addNotes({...noteData})

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

      <Pane width="100%">
        <StyledInputText
          value={noteData.title}
          placeholder="Title"
          onChange={onTitleChange}
        />
        <StyledInputText
          value={noteData.content}
          placeholder="Content"
          onChange={onContentChange}
        />
        <button type="button" onClick={saveNote}>
          Save
        </button>
      </Pane>
    </Layout>
  )
}

function NotesWithContext() {
  return (
    <NotesProvider>
      <Notes />
    </NotesProvider>
  )
}

export default NotesWithContext
