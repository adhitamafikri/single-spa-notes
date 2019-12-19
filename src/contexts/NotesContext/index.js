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

export const NotesContext = React.createContext({})

function NotesProvider({ children }) {
  const [notes, setNotes] = React.useState([ ...dummyNotes ])
  
  return (
    <NotesContext.Provider values={{ notes }}>
      {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider
