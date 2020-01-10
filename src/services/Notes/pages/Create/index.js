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
  postNotes,
} from '../../contexts/NotesContext'

const StyledInputText = styled.input`
  margin-bottom: 16px;
`

/**
 * @desc Modify Notes Page
 */
function Create() {
  const {
    loading,
    error, 
    errorMsg,
    items,
  } = useNotesState()
  const notesDispatch = useNotesDispatch()

  const [noteData, setNoteData] = React.useState({
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

  return (
    <Layout navbar={<Navbar />}>
      <h1>Modify Notes</h1>
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
        <button type="button" onClick={() => postNotes(notesDispatch, noteData)}>
          Save
        </button>
      </Pane>
    </Layout>
  )
}

export default Create
