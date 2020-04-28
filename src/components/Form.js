import React from 'react'

const Form = ({
  loginHandler,
  username,
  setUsername,
  password,
  setPassword,
  addNote,
  newNote,
  noteChangeHandler,
  user,
}) => {
  const loginForm = () => (
    <form onSubmit={loginHandler}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="text"
          value={password}
          name="Passowrd"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const noteForm = () => (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={noteChangeHandler} />
      <button type="submit">save</button>
    </form>
  )

  return (
    <div>
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} loggeed in</p>
          {noteForm()}
        </div>
      )}
    </div>
  )
}

export default Form
