import React from 'react'
import {createRoot} from 'react-dom/client'

import {Logo} from './components/logo'

const handleOnClick = () => {
  console.log('button clicked')
}

const App = () => {
  return (
    <>
      <h1>Bookshelf</h1>
      <Logo />
      <button onClick={handleOnClick}>Login</button>
      <button onClick={handleOnClick}>Register</button>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
