import React from 'react'

const Note = ({ note, toggleImportance, user }) => {
  const label = note.important ? 'make not important' : 'make important'
  return user === null ? (
    <li className="note">{note.content}</li>
  ) : (
    <li className="note">
      {note.content}

      <button onClick={toggleImportance}>{label} </button>
    </li>
  )
}

export default Note
