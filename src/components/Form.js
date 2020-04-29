import React from 'react'

const Form = ({
  loginHandler,
  username,
  setUsername,
  password,
  setPassword,
  addNote,
  newNote,
  handleNoteChange,
  user,
  handleLogout,
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
          type="password"
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
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )

  return (
    <div>
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>
            {user.name} logged in
            <br />
            <button onClick={handleLogout}>logout</button>
            <br />
          </p>
          {noteForm()}
        </div>
      )}
    </div>
  )
}

export default Form
