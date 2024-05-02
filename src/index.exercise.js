import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Dialog } from '@reach/dialog'
import { VisuallyHidden } from '@reach/visually-hidden'

import { Logo } from './components/logo'

import '@reach/dialog/styles.css'

const LoginForm = ({ onSubmit, buttonText }) => {
  const handleSubmit = event => {
    event.preventDefault()

    const { username, password } = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" required />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = useState('none')

  const handleSubmit = formData => {
    console.log('login', formData)
  }

  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="login-form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>Close</span>
        </button>
        <p>Login</p>
        <LoginForm onSubmit={handleSubmit} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="register-form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>Close</span>
        </button>
        <p>Register</p>
      </Dialog>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

export { root }
