import React from 'react'

const NoteForm = ({ value, onSubmit, handleNoteChange }) => {
  return (
    <div>
      <h2>Create a new note</h2>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm
