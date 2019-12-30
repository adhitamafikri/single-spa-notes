import React from 'react'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import { NotesContext, NotesProvider } from '@contexts/NotesContext'

const StyledInputText = styled.input`
  margin-bottom: 16px;
`

function CreateNote() {
  const [notes, addNotes] = React.useContext(NotesContext)
  const [noteData, setNoteData] = React.useState({
    id: 0,
    title: '',
    content: ''
  })

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
    </Layout>
  )
}

function CreateNoteWithContext() {
  return (
    <NotesProvider>
      <CreateNote />
    </NotesProvider>
  )
}

export default CreateNoteWithContext
