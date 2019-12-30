import React from 'react'

const dummyNotes = [
  {
    id: 1,
    title: 'Life of Balenciaga',
    content: 'This is the life of the luxury balenciaga'
  },
  {
    id: 2,
    title: 'Motorla',
    content: 'best motorola phone ever'
  },
]

export const NotesContext = React.createContext()

export function NotesProvider({ children }) {
  const [notes, setNotes] = React.useState(dummyNotes)

  const addNotes = (noteData) => {
    const latestID = notes[notes.length - 1].id + 1
    const nd = {
      ...noteData,
      id: latestID
    }

    setNotes(prevNotes => [...prevNotes, nd])
  }
  
  return (
    <NotesContext.Provider value={[ notes, addNotes ]}>
      {children}
    </NotesContext.Provider>
  )
}
