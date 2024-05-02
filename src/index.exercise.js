import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'

import '@reach/dialog/styles.css'
import {VisuallyHidden} from '@reach/visually-hidden'

const App = () => {
  const [openModal, setOpenModal] = useState('none')

  return (
    <>
      <h1>Bookshelf</h1>
      <Logo />
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>

      <Dialog aria-label="login-form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <p>Login modal</p>
      </Dialog>
      <Dialog aria-label="register-form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <p>Register modal</p>
      </Dialog>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
