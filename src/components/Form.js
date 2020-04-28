import React from 'react'

const Form = (props) => {
  const loginForm = () => (
    <form onSubmit={props.handleLogin}>
      <div>
        username
        <input
          type="text"
          value={props.username}
          name="Username"
          onChange={({ target }) => props.setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="text"
          value={props.password}
          name="Passowrd"
          onChange={({ target }) => props.setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const noteForm = () => (
    <form onSubmit={props.addNote}>
      <input value={props.newNote} onChange={props.handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )

  return (
    <div>
      {props.user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{props.user.name} loggeed in</p>
          {noteForm()}
        </div>
      )}
    </div>
  )
}

export default Form
