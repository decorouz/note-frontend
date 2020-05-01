import React from 'react'

const NoteForm = ({ newNote, handleNoteSubmit, handleNoteChange }) => {
  return (
    <div>
      <form onSubmit={handleNoteSubmit}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm
